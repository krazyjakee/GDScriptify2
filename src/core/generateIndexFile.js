const config = require('../config')
const fs = require('fs')
const path = require('path')

module.exports = files => {
  let outputString = `# Index\n\n`

  const sections = {}

  files.forEach(file => {
    var folderName = getContainingFolder(file)
    if (sections[folderName]) {
      sections[folderName].push(file)
    } else {
      sections[folderName] = [file]
    }
  });

  for (const key in sections) {
    outputString += `## ${titleCase(key)}\n\n`;

    sections[key].forEach(file => {
      outputString += buildCard(file)
    });
  }

  outputString += '\n'

  let outputFilePath = path.join(config.outputDir, 'index.md')

  fs.writeFileSync(outputFilePath, outputString)
}

const getContainingFolder = (file) => {
  const splitString = file.path.split("\\")
  return splitString[splitString.length - 2]
}

const buildCard = (file) => {
  const filePath = getFilePath(file)
  const fileName = file.name

  return `- [${cleanUpFileName(fileName)}](./${filePath})\n`
}

const cleanUpFileName = (fileName) => {
  if (!fileName.includes("extends")) {
    return fileName
  }

  const splitString  = fileName.split("extends")
  return splitString[0].trim()
}

const getFilePath = (file) => {
  return file.path.replace('.gd', '.md').replace(path.sep, '/')
}

const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase())
  }).join(' ')
}
