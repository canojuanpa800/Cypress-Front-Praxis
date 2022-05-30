node{

    stage('Get a changes'){
        git url:'https://github.com/canojuanpa800/Cypress-Front-Praxis', branch:'main'
    }

    stage('Build'){
    //The steps section defines a series of one or more steps to be executed in a given stage directive.
      echo "Building the application"
      sh 'curl -s https://deb.nodesource.com/setup_16.x | sudo bash'
      echo 'Install Node v-16'
      sh 'sudo apt install nodejs -y'
      echo 'Install dependencies'
    }

    stage('Testing') {
      echo 'Run test'
      sh "npm run test"

    }
        
    stage('Deploy'){

      echo "Deploying"

    }
    
}