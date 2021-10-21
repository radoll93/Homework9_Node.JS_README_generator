// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'question'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'rawlist', 
        message: 'What kind you license should your project have?',
        name: 'license',
        choices: [
            'MIT',
            'GPLv3',
            'AGPL'
          ]
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What doew the user need to know about contributing to the repo?',
        name: 'contributing'
    }
    
]

// TODO: Create a function to write README file
inquirer
.prompt(questions)

.then((response) => fs.appendFile('README.md', writeToFile(response), (err) => 
err ? console.error(err) : console.log('success')))

const writeToFile = (data) => generateMarkdown(data);

