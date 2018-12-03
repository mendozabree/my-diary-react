# my-diary-react
[![Build Status](https://travis-ci.org/mendozabree/my-diary-react.svg?branch=develop)](https://travis-ci.org/mendozabree/my-diary-react)
[![Maintainability](https://api.codeclimate.com/v1/badges/5a36f8ea97d453cb1691/maintainability)](https://codeclimate.com/github/mendozabree/my-diary-react/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5a36f8ea97d453cb1691/test_coverage)](https://codeclimate.com/github/mendozabree/my-diary-react/test_coverage)


This is a web application where one can write down their thoughts , feelings. Day to Day activities, it's a personal diary.
### Getting Started
## Prerequisites

* Node.js

  
  [Here](https://nodejs.org/en/) is how to get Node.js up and running
  
  

## Setting Up for Development
These are instructions for setting up the app in a development enivornment.

* Make a directory on your computer and a virtual environment
  ```
  $ mkdir my-diary
  $ cd ~/myDiary
  ```

* Clone the project repo
  ```
  $ git clone https://github.com/mendozabree/my-diary-react.git
  ```
  

* Install necessary dependencies and start app
  ```
  $ npm run-script pr
  ```
  
This site should now be running at http://localhost:3000 


### File structure
  ```
.
├── .circleci
│   └── config.yml
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── App.test.js
    ├── actions
    │   ├── actionCreators.js
    │   ├── types.js
    │   └── userActions.js
    ├── assests
    │   ├── App.css
    │   └── images
    │       ├── bckgnd.jpg
    │       ├── bckgnd1.jpg
    │       └── dashboard.jpg
    ├── components
    │   ├── landingPage
    │   │   ├── LandingPage.js
    │   │   └── NavBar.js
    │   ├── login
    │   │   └── Login.js
    │   ├── notFound
    │   │   └── NotFound.js
    │   ├── register
    │   │   └── Register.js
    │   └── routes
    │       └── index.js
    ├── config
    │   └── index.js
    ├── index.css
    ├── index.js
    ├── reducers
    │   ├── rootReducer.js
    │   └── userReducer.js
    ├── setupTests.js
    ├── store.js
    └── tests
        ├── Index.test.js
        ├── actions
        │   └── userActions.test.js
        ├── components
        │   ├── LandingPage.test.js
        │   ├── Login.test.js
        │   ├── NotFound.test.js
        │   ├── Register.test.js
        │   └── routes.test.js
        └── reducers
            └── userReducer.test.js
  ```

## Deployment sites
A live demo of the application can be found here https://mydiarystaging.herokuapp.com/


