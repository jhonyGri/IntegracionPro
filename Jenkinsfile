pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;$PATH"  // Añadir la ruta de docker-compose a PATH en Windows
    }

    stages {
        stage('checkout') {
            steps {
                git branch:'master', url: 'https://github.com/jhonyGri/IntegracionPro.git'
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

        stage('Despliegue a entorno de pruebas') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.yml up -d --build'
                }
            }
        }
    }

    post {
        always {
            echo 'Limpiando los recursos de Docker......'
            sh 'docker-compose down --volumes'
        }
    }
}
