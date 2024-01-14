pipeline {
  agent any
  stages {
    stage ('checkout') {
      steps {
        checkout scm
      }
    }
    stage ('test') {
      steps {
        sh 'apk add node' 
        sh 'apk add npm'
        sh 'npm install'
        sh 'npm test'
      }
    }
    stage ('Build') {
      steps {
        sh 'npm run build' 
        sh 'npm test'
      }
    }
  }
}
