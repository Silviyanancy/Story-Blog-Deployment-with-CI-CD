pipeline {
   agent any
   //nodejs will be downloaded on jenkins instance
   //can run npm commands
   tools {nodejs "node"}
   stages {
       stage ("Install Dependencies"){
           steps {
               //command to install dependencies
               //npm install - downloads all the dependencies from and based on package.json
//then we will have all the dependencies to run the react application
               sh 'npm install'
           }
       }
       //stage to check whether we have all the dependencies installed
       stage ("Test"){
           steps {
               //Package.json - have SCRIPTS - which runs test for react application - it will run at this stage
               sh 'npm test'
           }
       }
   }
}
