//NOTE the user must pick a license to procede 
function renderLicenseBadge(data) {
    return `![License:${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`
  }
  
  function renderLicenseSection(data) {
    switch (data.license) {
      case 'GNU':
        return `GNU General Public License version 3 
        [View license](https://opensource.org/license/gpl-3-0)`;
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
        return`[View license](https://opensource.org/license/unlicense/)`;
      }
    }
              
// Begin construction 
function generateMarkdown(data) {              
//Create a badge from the input of the user.  
const badge =  renderLicenseBadge(data);
//Create link to selected license's webpage 
const liceLink = renderLicenseSection(data);
//Build the README file
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

## License

This software is covered under the following license:
${liceLink}

## Credits

${data.projCredits}

## Tests

${data.projTest}

## Questions

Contact me by email at ${data.userEmail}\n
or visit my GitHub repository: [github.com/${data.usernameGitHub}](https://github.com/${data.usernameGitHub})
`;
}

//allow generateMarkdown to be accessed by index.js
module.exports = 
generateMarkdown;

  
