pipeline {
    agent any
    
    tools {
    // Define Node.js tool with a specific installation from Global Tool Configuration
    dockerTool 'zaid'
  }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zaid-coder-01/codeFront.git'
            }
        }

        stage('Install') {
            steps {
                sh 'docker build -t zaid .'
            }
        }

        stage('run') {
            steps {
                sh 'docker run -d -p 3000:3000'
            }
        }
    }
}
