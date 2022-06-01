node{

  // Necessary packages to run cypress
  // sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

    stage('Get a changes'){
      git url:'https://github.com/canojuanpa800/Cypress-Front-Praxis', branch:'main'
    }

    stage('Build'){
      
      /*
      echo 'Cache clear'
      sh 'npm cache clear'
      */

      echo "Install dependencies"
      sh "sudo -s apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
      sh 'npm install cypress --save-dev'
      
    }

    stage('Testing') {
      echo 'Run test'
      sh "npm test"

    }
        
    stage('Deploy'){

      echo "Deploying"

    }
    
}