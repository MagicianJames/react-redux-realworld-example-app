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
                sh "chmod +x -R ${env.WORKSPACE}"
		        sh './deliver.sh'
		        input message: 'Finished using the web site? (Click "Proceed" to continue)'
		        sh './kill.sh'
            }
        }
    }
}
