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
      sh 'sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
      
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