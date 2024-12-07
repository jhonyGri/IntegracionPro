pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "my-docker-registry"
        DOCKER_IMAGE = "my-docker-image"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Checkout') {
            steps {
                script {
                    // Aquí puedes añadir el código necesario para el checkout si es necesario.
                    echo "Checkout en progreso"
                }
            }
        }

        stage('Build') {
            steps {
                echo "Run build"
                // Aquí puedes agregar los pasos de build.
            }
        }

        stage('Test') {
            steps {
                echo "Run test"
                // Aquí puedes agregar los pasos de prueba.
            }
        }

        stage('Despliegue a entorno de pruebas') {
            steps {
                script {
                    // Usar 'sh' en lugar de 'bat' para comandos de Linux
                    echo "Desplegando a entorno de pruebas"
                    sh '''
                    # Comandos de despliegue en el entorno de pruebas
                    docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG .
                    docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG
                    '''
                }
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                echo "Limpiando los recursos de Docker..."
                // Limpiar recursos con 'sh'
                sh '''
                docker system prune -f
                '''
            }
        }
    }
}
