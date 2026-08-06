pipeline{
    agent any

    stages{
        stage('Setup dependencies'){
            steps{
                echo 'Installing node modules...'
                bat 'npm ci'
            }
        }

        stage('Run cypress tests in parallel'){
            parallel{
                stage('Test Agent 1'){
                    environment{
                        SPLIT='2'
                        SPLIT_INDEX='0'
                    }
                    steps{
                        echo 'Running part 1'
                        bat 'npx cypress run'
                    }
                }
                stage('Test Agent 2'){
                    environment{
                        SPLIT='2'
                        SPLIT_INDEX='1'
                    }
                    steps{
                        echo 'Running part 2'
                        bat 'npx cypress run'
                    }
                }
            }
        }
    }

    post{
        always{
            echo 'Publishing html reports'

            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports',
                reportFiles: 'index.html',
                reportName: 'Cypress Test Report'
            ])
        }
    }
}