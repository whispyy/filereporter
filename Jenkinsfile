pipeline {
  agent any

  environment {
    GIT_BRANCH = getBranchName()
  }

  stages {
    stage('Clone Sources') {
      steps {
        git url: 'git@github.com:whispyy/filereporter.git', branch: env.GIT_BRANCH
      }
    }

    stage('API') {
      parallel {
        stage('Docker build') {
          steps {
            sh 'docker-compose up -d'
          }
        }
        stage('Unit') {
          steps {
            sh 'cd api && npm install && npm run test'
          }
        }
      }
    }

    stage('APP') {
      parallel {
        stage('Production build') {
          steps {
            sh 'cd app && npm install && npm run build'
          }
        }
        stage('Unit') {
          steps {
            sh 'cd app && npm install && npm run test'
          }
        }
      }
    }

  }

}

def getBranchName() {
  return env.BRANCH_NAME;
}