pipeline {
    agent any

    environment {
        // Añadir la ruta de Docker y docker-compose a PATH en Windows
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/jhonyGri/IntegracionPro.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Run test'
            }
        }

        stage('Despliegue a entorno de pruebasss') {
            steps {
                script {
                    // Usar bat en lugar de sh para Windows
                    bat 'docker-compose -f docker-compose.yml up -d --build'
                }
            }
        }
    }

    post {
        always {
            echo 'Limpiando los recursos de Docker...'
            // Limpiar los recursos de Docker después de la ejecución
            bat 'docker-compose down --volumes'
        }
    }
}
