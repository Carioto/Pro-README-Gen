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
        type: 'input',
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
        type: 'list',
        name: 'license',
        message: "What license are your using for the project?",
        choices: [
            {
                name:'GNU',
            },
            {
                name:'Mozilla',
            },
            {
                name:'Apache',
            },
            {
                name:'MIT',
            },
            {
                name:'Boost',
            },
            {
                name:'Unlicense',
            }
        ]
      },
    {
        type: 'input',
        name: 'projTest',
        message: "What test data do you offer?",
      },
    {
        type: 'input',
        name: 'usernameGitHub',
        message: "What is your GitHub username?",
      },
    {
        type: 'input',
        name: 'userEmail',
        message: "What is your email address?",
      },
];


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => err ? console.error(err) : console.log('Thanks for using my README file generator.  Your file is created is the COMPLETE directory.'));
}

// writeToFile();

function init() {
 inquirer.prompt(questions).then((answers) => {
        const data = answers;
       const fileData = generateMarkdown(data);
        writeToFile("./complete/README.md", fileData);
    })};

init();
        
        
        
        
        
        // TODO: Create a function to initialize app
        // Function call to initialize app
        