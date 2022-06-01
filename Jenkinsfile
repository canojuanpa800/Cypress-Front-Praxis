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
      // sh "sudo -S ./apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
      sh 'npm install cypress --save-dev'
      sh 'npm i --save-dev cypress-mochawesome-reporter'
      
    }

    stage('Testing') {
      echo 'Run test'
      sh "npm test"

    }
        
    stage('Generate report'){
        publishHTML (
            target : [allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'cypress/reports/html',
            reportFiles: 'index.html',
            reportName: 'UI test report',
            reportTitles: 'The Report'])
    }
    
}