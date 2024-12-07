pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "my-docker-registry"
        DOCKER_IMAGE = "my-docker-image"
        DOCKER_TAG = "latest"
        // Si prefieres pasar estos valores como parámetros, puedes usar 'parameters' en lugar de 'environment'.
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm  // Aquí estamos haciendo checkout del código desde el repositorio Git.
            }
        }

        stage('Build') {
            steps {
                script {
                    echo "Iniciando la construcción de las imágenes Docker"
                    // Aquí puedes añadir pasos como npm install, compilación de proyectos, etc.
                    sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG .'
s                   sh 'docker run -d $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG'

                }
            }
        }

        stage('Test') {
            steps {
                echo "Ejecutando las pruebas"
                // Aquí puedes ejecutar tus pruebas unitarias o de integración. Ejemplo:
                sh 'npm test' // Si es una app Node.js
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    echo "Desplegando a entorno de pruebas"
                    // Usamos docker-compose para lanzar los contenedores, facilitando la gestión de servicios múltiples
                    sh 'docker-compose -f docker-compose.yml up -d'
                    // O si estás empujando a un registro de Docker:
                    // sh 'docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG .'
                    // sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Clean up Docker resources') {
            steps {
                echo "Limpiando los recursos de Docker..."
                sh 'docker system prune -f'  // Limpia recursos no utilizados, como imágenes y contenedores parados.
            }
        }
    }

    post {
        always {
            echo "Finalizando el pipeline..."
        }
        success {
            echo "Pipeline completado exitosamente"
        }
        failure {
            echo "Hubo un error en el pipeline"
        }
    }
}
