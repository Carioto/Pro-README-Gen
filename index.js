const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'projTitle',
        message: "What is the name of your project?",
      },
    {
        type: 'editor',
        name: 'projDesc',
        message: "Please give a short description of your project:",
      },
    {
        type: 'input',
        name: 'projInstall',
        message: "What are the steps to install your project?",
      },
    {
        type: 'input',
        name: 'projUsage',
        message: "How does someone use your project?",
      },
    {
        type: 'input',
        name: 'projCredits',
        message: "Who contributed to the project?",
      },
    {
        type: 'input',
        name: 'projLic',
        message: "What license are your using for the project?",
      },
    {
        type: 'input',
        name: 'projTest',
        message: "What test data do you offer?",
      },
      {
        type: 'input',
        name: 'projContact',
        message: "How's does someone contact you with question?",
      },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
          console.log(JSON.stringify(answers))
})};

// Function call to initialize app
init();
