properties([
    parameters([
        string(name: 'NUM_NODES', defaultValue: '3', description: 'Enter the number of parallel agents to run (any positive integer)')
    ])
])

pipeline {
    agent any
    stages {
        stage('Setup') { 
            steps { 
                bat 'npm ci' 
            } 
        }
        stage('Run Cypress Parallel') {
            steps {
                script {
                    def numSplits = 1
                    try {
                        numSplits = params.NUM_NODES.toInteger()
                        if (numSplits < 1) {
                            echo "Warning: Number of agents (${numSplits}) must be at least 1. Defaulting to 1."
                            numSplits = 1
                        }
                    } catch (NumberFormatException e) {
                        echo "Warning: Invalid input '${params.NUM_NODES}'. Defaulting to 1 agent."
                        numSplits = 1
                    }

                    def parallelStages = [:]
                    for (int i = 0; i < numSplits; i++) {
                        def index = i
                        parallelStages["Agent ${index + 1}"] = {
                            node {
                                ws { // Jenkins automatically isolates workspaces
                                    checkout scm
                                    bat 'npm ci'
                                    withEnv(["SPLIT=${numSplits}", "SPLIT_INDEX=${index}"]) {
                                        bat 'npx cypress run'
                                    }
                                }
                            }
                        }
                    }
                    parallel parallelStages
                }
            }
        }
    }
    post {
        always {
            echo 'Publishing HTML reports...'
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])
        }
    }
}