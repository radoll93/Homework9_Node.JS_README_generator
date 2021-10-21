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
  }
}

const fs = require('fs');

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badgeLink = renderLicenseBadge(license) + ' ' + renderLicenseLink(license);
  fs.appendFile('README.md', badgeLink, (err) =>
  err ? console.error('badge error'): console.log('badge success'))
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseSection(data.license);

  return `
  \n

  #${data.project}

  ##Description 

  ${data.description}

  ##Table of Contents 

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Question](#Question)

  ##Installation

    ---
    To install necessary depedencies, run the following command :
    
    ${data.installation}\n
    ---

  ##Usage
    ${data.usage}\n

  ##License
    This project is licensed under the ${data.license}\n

  ##Contributing
  ${data.contributing}\n

  ##Test

    ---
    To run the test, run the following command:
    
    ${data.test}\n
    ---

  ##Question

  If you have any question about the repo, open an issue or contact me directly at ${data.question}. You can find more of my work at https://github.com/${data.name}.
  \n

  `;
    

}


module.exports = generateMarkdown;
