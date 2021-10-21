// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = [ '![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)', 
  '![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)',
  '![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)']

  if(license === 'MIT') {
    return licenseBadge[0];
  } else if(license === 'GPLv3') {
    return licenseBadge[1];
  } else if(license === 'AGPL') {
    return licenseBadge[2];
  } else {
    return ' ';
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = ['https://opensource.org/licenses/MIT', 
  'https://opensource.org/licenses/gpl-license', 
  'https://www.gnu.org/licenses/agpl-3.0']

  if(license === 'MIT') {
    return licenseLink[0];
  } else if(license === 'GPLv3') {
    return licenseLink[1];
  } else if(license === 'AGPL') {
    return licenseLink[2];
  } else {
    return ' ';
  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);

  if (link === ' ') {
    return `## License\n
    There is no license here.
    `
  } else {
    return `## License\n
  This project is licensed under the ${license}. ${link}

  `
    
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
const badge = renderLicenseBadge(data.license);
const licensesection = renderLicenseSection(data.license);


return `
# ${data.project}\n  
${badge}
\n
## Description 

${data.description}\n


## Table of Contents 

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Question](#Question)
\n

## Installation

  ---
  To install necessary depedencies, run the following command :
  
  **${data.installation}**\n
  ---

## Usage\n
  ${data.usage}\n


${licensesection}

## Contributing\n
${data.contributing}\n

## Test

  ---
  To run the test, run the following command:
  
  **${data.test}**\n
  ---

## Question

If you have any question about the repo, open an issue or contact me directly at ${data.question}. You can find more of my work at https://github.com/${data.name}.
\n
\n

  `;
    

}


module.exports = generateMarkdown;
