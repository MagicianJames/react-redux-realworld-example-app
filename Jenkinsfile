pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4100:4100'
        }
    }
    environment {
        HOME="."
    }
    stages {
        stage("BUILD") {
            steps {
                sh 'npm install'
            }
        }
        stage("DEPLOY") {
            steps {
                sh 'npm start &'
            }
        stage("EXIT") {
            input message: 'Finished using the web app? (Click "Proceed" to continue)'
            sh 'fuser -k 4100/tcp || true'
        }
    }
}
