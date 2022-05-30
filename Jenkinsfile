pipeline{

  stages {
    stage('Build'){
    //The steps section defines a series of one or more steps to be executed in a given stage directive.
      steps {
        echo "Building the application"
      }
    }

    stage('Testing') {
      steps {
        sh "npm i"
        sh "npm run test"
      }
    }
        
    stage('Deploy'){
      steps {
        echo "Deploying"
      }
    }
    
    
  }
}