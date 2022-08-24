const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What's your project called?`
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project."
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use this project?"
    },
    {
        type: 'input',
        name: 'install',
        message: "How do you install this project?"
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your github username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email?"
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Whate are the guidelines to contribute to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does this project have?',
        choices: [
            'Attribution-ShareAlike 4.0 International',
            'Mozilla Public License 2.0',
            'The Do What the Fuck You Want to Public License'
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', data, err => {
        if(err) {
            console.error(err);
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully created README'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
