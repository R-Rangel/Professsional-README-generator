// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the purpose of the project? Give a detailed description.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does the user need to install?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use the app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeTemplate = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Questions
If you have any questions about the project, you can contact me at ${answers.email}.
`;
        writeToFile('README.md', readmeTemplate);
    });
}

init();
