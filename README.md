# DevOps Story Blog with CI/CD Pipeline

A full-stack React blog application with Firebase integration, deployed using Jenkins CI/CD, Docker, and Kubernetes.

---

## Features
- React frontend with blog functionality
- Firebase Authentication (Google Sign-In)
- Firestore database integration
- Jenkins CI/CD pipeline with Docker builds
- Kubernetes deployment with Minikube
- Automated testing and Docker Hub deployment

---

## Architecture

React App → Jenkins Pipeline → Docker Image → Docker Hub → Kubernetes Cluster (Minikube)
│
└── Firebase (Auth + Firestore)

---

## Prerequisites
1. **Node.js v18+**: [Installation Guide](https://github.com/nodesource/distributions)
2. **Docker**: [Get Docker](https://docs.docker.com/get-docker/)
3. **Jenkins**: Running in Docker (see [Jenkins Setup](#jenkins-setup))
4. **Git**: 
   ```bash
   sudo apt-get install git-core git-gui
   ```
5. SSH Key (Added to GitHub/Docker Hub)
6. Firebase Account: Sign Up
7. Minikube (for local Kubernetes): Install Guide

### Setup
1. Clone Repository & Initialize React
```bash 
git clone <repo>
cd <repo>
npm install
```

2. SSH Key Configuration

```bash
ssh-keygen -t ed25519 -C <email>
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
Add public key to GitHub SSH Settings and Docker Hub

3. Git Configuration
```bash
git config --global user.name "username"
git config --global user.email "useremail"
```
Jenkins Pipeline
1. Run Jenkins in Docker

```bash
docker run -d -p 8080:8080 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v jenkins_home:/var/jenkins_home \
  --name jenkins_container \
  nancysilviya/storyapp
```

2. Jenkins Plugins
Install Docker Pipeline, NodeJS

3. Pipeline Configuration
- Add Docker Hub credentials in Jenkins
- Use the provided Jenkinsfile in your repository

Docker Configuration

Build & Push Image

```bash
docker build -t docker_username/app_name .
docker push docker_username/app_name
```

