node{

    stage('Get a changes'){
        git url:'https://github.com/canojuanpa800/Cypress-Front-Praxis', branch:'main'
    }

    stage('Build'){
    //The steps section defines a series of one or more steps to be executed in a given stage directive.
        echo "Building the application"
    }

    stage('Testing') {

        sh "npm i"
        sh "npm run test"

    }
        
    stage('Deploy'){

        echo "Deploying"

    }
    
}