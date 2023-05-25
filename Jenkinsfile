pipeline {
    
    agent {
       label 'zaidDocker' 
    }
  
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from the provided Git repository
                git 'https://github.com/zaid-coder-01/codeFront.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image with the Dockerfile in the root of the repository
                script {
                    docker.build('zaid', '.')
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                // Run Docker container using the built image
                script {
                    docker.image('zaid').run('-p 3000:3000')
                }
            }
        }
    }
}
