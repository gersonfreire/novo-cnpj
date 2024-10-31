pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/theofurtado05/API-ValidadorCPF.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            junit 'reports/junit/results.xml'
            archiveArtifacts artifacts: 'reports/junit/results.xml', allowEmptyArchive: true
        }
        failure {
            script {
                echo "Pipeline failed. Check the Jenkins job: ${env.BUILD_URL}"
            }
        }
    }
}
