// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const keys = Object.keys(data)
  console.log(generateMarkdown);
  return `#${data.Project}\n ##Description \n 
  ##Table of Contents \n ${keys[5]}\n ${keys[7]}\n ${keys[4]}\n ${keys[8]}\n ${keys[6]}\n ${keys[1]}\n 
  ##${keys[5]}\n
    To install necessary depedencies, run the following command : \n
    ${data.Installation}\n

  ##${keys[7]}\n
    ${data.Usage}\n

  ##${keys[4]}\n 
    This project is licensed under the ${data.License}\n

  ##${keys[8]}\n 
  ${data.Contributing}\n

  ##${keys[6]}\n 
    To run the test, run the following command: 
    ${data.Test}\n

  ##${keys[1]}\n
  If you have any question about the repo, open an issue or contact me directly at ${data.Question}. You can find more of my work at https://github.com/${data.Name}.
  \n
  
  `;
    

}


module.exports = generateMarkdown;
