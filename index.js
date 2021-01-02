// Declaring the dependencies and variables
const inquirer = require('inquirer');
const fs = require ('fs');

// User Prompts questions 
const userPrompts = [
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
  
    {
      type: "input",
      message: "What is your Project Title?",
      name: "title",
      default: "Generate a ReadMe.md file "
    },
  
    {
      type: "input",
      message: "What is your repository called?",
      name: "repo",
    },
  
    {
      type: "input",
      message: "How do you describe your Project?.",
      name: "desc",
    },
  
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "install",
      default: "Step1: Run npm install Step2: Run node index.js"
    },
  
    {
      type: "input",
      message: "Write instructions for using your project.",
      name: "usage",
    },
  
    {
      type: "input",
      message: "please enter git hub usernames of all the contributor (If there's more than one, seperate names with comma without spaces.)",
      name: "contributors",
    },
  
    {
      type: "input",
      message: "Provide examples on how to run tests.",
      name: "test",
    },

    {
    type: "list",
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: "license"
    },
    ];