pipeline {
  agent any
  stages {
    stage ('checkout') {
      steps {
        checkout scm
      }
    }
    stage ('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage ('Build-Image') {
      steps {
        sh 'docker build -t my-react-project:3.0.1 .'
      }
    }
  }
}
