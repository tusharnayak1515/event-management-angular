pipeline {
    agent any

    parameters {
        booleanParam(name: 'DOCKER_BUILD', defaultValue: true, description: 'Build Docker Image')
        booleanParam(name: 'DOCKER_DEPLOY', defaultValue: true, description: 'Deploy to Docker Swarm')
    }

    stages {

        stage('Checkout') {
            steps {
                bat 'git clone https://github.com/tusharnayak1515/event-management-angular.git'
            }
        }

        stage('Build Angular App') {
            steps {
                bat 'cd ./'

                bat 'npm install'

                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            when {
                expression {
                    params.DOCKER_BUILD == true
                }
            }
            steps {
                bat 'docker build -t demo-angular-docker:latest .'
            }
        }

        stage('Deploy to Docker Swarm') {
            when {
                expression {
                    params.DOCKER_DEPLOY == true
                }
            }
            steps {
                bat 'docker service create --name angular-docker-service --replicas 3 --publish published=4200,target=4200 demo-angular-docker:latest'
            }
        }
    }
}