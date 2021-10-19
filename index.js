// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is your Github username?', c
'What is your email address?',
"What is your project's name?",
'Please write a short description of your project',
'What kind you license should your project have?',
'What command should be run to install dependencies?',
'What command should be run to run tests?',
'What does the user need to know about using the repo?',
'What doew the user need to know about contributing to the repo?'
];

// TODO: Create a function to write README file
inquirer
.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'Name'
    },
    {
        type: 'input',
        message: questions[1],
        name: 'Question'
    },
    {
        type: 'input',
        message: questions[2],
        name: 'Project'
    },
    {
        type: 'input',
        message: questions[3],
        name: 'Description'
    },
    {
        type: 'input', 
        // type -> change to choose
        message: questions[4],
        name: 'License'
    },
    {
        type: 'input',
        message: questions[5],
        name: 'Installation'
    },
    {
        type: 'input',
        message: questions[6],
        name: 'Test'
    },
    {
        type: 'input',
        message: questions[7],
        name: 'Usage'
    },
    {
        type: 'input',
        message: questions[8],
        name: 'Contributing'
    }
    
])

.then((response) => writeToFile('README.md', response));

function writeToFile(fileName, data) {
    fs.appendFile(fileName, `${generateMarkdown(data)}`, (err) => {
        
    }
    )

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
