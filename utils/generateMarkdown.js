// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return `![License:${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`
}

  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data.license) {
    case 'GNU':
      return `This software is covered under the following license
      GNU General Public License version 3
      [View license](https://opensource.org/license/gpl-3-0/)`;
    case 'Apache':
      return`Apache License, Version 2.0
      [View license](https://opensource.org/license/apache-2-0/)`;
    case 'Mozilla':
      return `Mozilla Public License 2.0
      [View license](https://opensource.org/license/mpl-2-0/)`;
    case 'MIT':
      return`MIT No Attribution License
      [View license](https://opensource.org/license/mit-0/)`;
    case 'Boost':
      return`Boost Software License 1.0
      [View license](https://opensource.org/license/bsl-1-0/)`;
    case 'Unlicense':
      return`The Unlicense
       [View license](https://opensource.org/license/unlicense/)`;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const badge =  renderLicenseBadge(data);
 const liceLink = renderLicenseSection(data);
  return `# ${data.projTitle}
${badge}

## Description
${data.projDesc}

## Table of Contents

-[Installation](#installation)\n
-[Usage](#usage)\n
-[Credits](#credits)\n
-[License](#license)\n
-[Tests](#tests)\n
-[Questions](#questions)\n


## Installation

${data.projInstall}

## Usage

${data.projUsage}

## Credits

${data.projCredits}

## License

${liceLink}


## Tests

${data.projTest}

## Questions

Contact me by email at ${data.userEmail}\n
or visit my GitHub repository: [${data.usernameGitHub}](https://github.com/${data.usernameGitHub})
`;
}

module.exports = 
generateMarkdown;

  
