node{

    stage('Get a changes'){
        git url:'https://github.com/canojuanpa800/Cypress-Front-Praxis', branch:'main'
    }

    stage('Build'){
      
      /*
      echo 'Cache clear'
      sh 'npm cache clear'
      */

      echo "Install dependencies"
      sh 'npm install'
      sh 'npm install cypress --save-dev'
      
    }

    stage('Testing') {
      echo 'Run test'
      sh "npm run test"

    }
        
    stage('Deploy'){

      echo "Deploying"

    }
    
}