pipeline{
  agent any

  parameters {
    string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
  }

  options {
    ansiColor('xterm')
  }
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