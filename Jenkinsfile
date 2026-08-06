pipeline {
    agent any
    stages {
        stage('Setup') { steps { bat 'npm ci' } }
        stage('Run Tests') { steps { bat 'npm run cy:parallel' } }
    }
    post {
        always {
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