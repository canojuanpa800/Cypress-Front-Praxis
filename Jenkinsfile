pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('Build and test'){
      sh 'npm run test'
    }
  }
}