node{

    stage('Get a changes'){
        git url:'https://github.com/canojuanpa800/Cypress-Front-Praxis', branch:'main'
    }

    stage('Build'){
      /*
      echo 'Cache clear'
      sh 'npm cache clear'
      */

      echo 'get dependencies'
      sh 'sudo apt-get install xvfb'
      
      sh 'sudo apt-get update'

      echo "Building the application"
      sh 'npm install'
    }

    stage('Testing') {
      echo 'Run test'
      sh "npm run test"

    }
        
    stage('Deploy'){

      echo "Deploying"

    }
    
}