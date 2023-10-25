// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What are your credits?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?',
    },
    ];

    function writeReadme(answers){
        return `
        ## ${answers.title}
        ## Description
        ${answers.description}
        ## Installation
        ${answers.installation}
        ## Usage
        ${answers.usage}
        ## Credits
        ${answers.credits}
        ## License
        ${answers.license}`
    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data, (err)=>{
        if (err){
            console.error(err);

            return
        }
        console.log(`'${fileName}' is saved!`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=> {
        const fileName = 'README.md'
        const readme = writeReadme(answers);
        writeToFile(fileName, readme);
    })
}

// Function call to initialize app
init();
