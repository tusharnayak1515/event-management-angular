pipeline {
    agent any

    parameters {
        booleanParam(name: 'DOCKER_BUILD', defaultValue: true, description: 'Build Docker Image')
        booleanParam(name: 'DOCKER_DEPLOY', defaultValue: true, description: 'Deploy to Docker Swarm')
    }

    stages {

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
                bat 'docker service rm angular-docker-service'
                bat 'docker service create --name angular-docker-service --replicas 3 --publish mode=host published=4200,target=4500 demo-angular-docker:latest'
            }
        }
    }
}