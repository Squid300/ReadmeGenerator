// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( license === 'Attribution-ShareAlike 4.0 International'){
    return '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)]'
  }else if ( license === 'Mozilla Public License 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  }else if ( license === 'The Do What the Fuck You Want to Public License'){
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license === 'Attribution-ShareAlike 4.0 International'){
    return '(https://creativecommons.org/licenses/by-sa/4.0/)'
  }else if ( license === 'Mozilla Public License 2.0'){
    return '(https://opensource.org/licenses/MPL-2.0)'
  }else if ( license === 'The Do What the Fuck You Want to Public License'){
    return '(http://www.wtfpl.net/about/)'
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license === 'Attribution-ShareAlike 4.0 International'){
    return 'You are free to: Share — copy and redistribute the material in any medium or format Adapt — remix, transform, and build upon the material for any purpose, even commercially.'
  }else if ( license === 'Mozilla Public License 2.0'){
    return 'Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license: under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.'
  }else if ( license === 'The Do What the Fuck You Want to Public License'){
    return 'DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.'
  }else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);

  return `# ${data.name} ${badge}${link}  
  ##Table of Contents
  - [About The Project](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributing)
  - [License](#License)
  - [Questions](#Questions)

  ## Description  
  ${data.description}

  ## Installation  
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage  
  ${data.usage}.    

  ## Contributing  
  ${data.contribute}  

  ## License    
  ${section}  
  
  ## Tests  
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions  
  Have any questions? Feel free to reach out at:  
  [github](https://github.com/${data.github})  
  or email me at:  
  ${data.email}
`;
}

module.exports = generateMarkdown;
