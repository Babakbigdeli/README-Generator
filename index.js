// Declaring the dependencies and variables
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require("./utils/generateMarkdown");

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
      message: "Please enter git hub usernames of all the contributor (If there's more than one, seperate names with comma without spaces.)",
      name: "contributors",
    },
  
    {
      type: "input",
      message: "Provide examples on how to run tests.",
      name: "test",
    },

    {
        type: "input",
        message: "Provide your email address.",
        name: "email",
      },

    {
    type: "list",
    message: "Choose a license for your project.",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    name: "license"
    },
 ];

// the callback function and write file function 
 function init() {
    inquirer.prompt(userPrompts).then(userInput => {
      console.log(userInput);
          fs.writeFile("README.md", generateMarkdown(userInput), function(err) {
            if (err) {
              throw err;
            }
          });
        });
    };

  
  init();