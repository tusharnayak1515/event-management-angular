pipeline {
    agent any

    stages {

        stage('Build Angular App') {
            steps {
                bat 'cd ./'

                bat 'npm install'

                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t demo-angular-docker:latest .'
            }
        }

        stage('Deploy to Docker Swarm') {
            steps {
                bat 'docker service create --name angular-docker-service --replicas 3 --publish published=4200,target=4200 demo-angular-docker:latest'
            }
        }
    }
}