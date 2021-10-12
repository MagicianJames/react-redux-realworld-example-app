pipeline {
    agent {
        docker {
            image 'mrts/docker-python-nodejs-google-chrome'
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
                sh 'npm start'
            }
        }
    }
}
