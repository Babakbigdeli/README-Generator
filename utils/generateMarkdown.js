// function to generate markdown for README
function generateMarkdown(data) {
return `
# Project Title : ${data.title}
\n![Badge](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor)
\n![Badge](https://img.shields.io/badge/license-${data.license}-brightgreen)


## Project Description:
${data.desc}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
- [Author] (#Author)

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Test
${data.test}

## Questions
If you have any questions, please email me on ${data.email}


## License
${data.license}


## Author 
${data.username}

`;
}

module.exports = generateMarkdown;
