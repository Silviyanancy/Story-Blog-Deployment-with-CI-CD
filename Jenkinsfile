pipeline {
   agent any
   //nodejs will be downloaded on jenkins instance
   //can run npm commands
   tools {nodejs "node"}

   //environment setup for the image
   environment{
    //imageName = "nancysilviya/storyreactapp" //docker_usrname/any_name
    imageName = "nancysilviya/storyreactapp-version1"
    registryCredential = 'nancysilviya' //for credential
    dockerImage = '' //palceholder_hold the instance of the docker image
   }
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
     /*  stage ("Test"){
           steps {
               //Package.json - have SCRIPTS - which runs test for react application - it will run at this stage
               sh 'npm test'
           }
       }*/
       //It is built on docker whch is already in jenkins container
       stage ("Building Image"){
        steps{
            script{
                //installed plugins like docker & docker pipeline will be utilized to build a docker image
                dockerImage = docker.build imageName
            }
        }
       }
       stage ("Pushing Image to DockerHub"){
        steps{
            script{
                //push it to the github registry
                docker.withRegistry("https://registry.hub.docker.com", 'dockerhub-creds'){
                    //to increment the number of builds
                    dockerImage.push("${env.BUILD_NUMBER}") //build number of the pipeline will be push with dockerimage
                }
            }
        }
       }
       stage ("Deploying React Story App container to Kubernetes"){
        steps{
            script{
                kubernetesDeploy (configs: 'deploymentservice.yaml', kubeconfigId: 'kubernetes')                               
                }
            }
        }
       
   }
}
