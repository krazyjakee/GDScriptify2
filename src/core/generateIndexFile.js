const config = require('../config')
const fs = require('fs')
const path = require('path')
const mkdirpSync = require('../utils/mkdirpSync')
const generateMarkdownFile = require('./generateMarkdownFile')

let icon_store = {}

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
    outputString += `# ${titleCase(key)}\n\n`;

    sections[key].forEach(file => {
      outputString += buildCard(file)
    });
  }

  for (const key in sections) {
    sections[key].forEach(file => {
      var cleanFileName = cleanUpFileName(file.name)
      outputString = outputString.replace(`[ICON_${cleanFileName}]`, addIcon(file))
    });
  }

  outputString += '\n'

  let outputFilePath = path.join(config.outputDir, 'index.md')

  mkdirpSync(config.outputDir)

  fs.writeFileSync(outputFilePath, outputString)
}

const getContainingFolder = (file) => {
  const splitString = file.path.split(path.join("a", "b").split("")[1])
  return splitString[splitString.length - 2]
}

const buildCard = (file) => {
  var contents = generateMarkdownFile(file)
  var icon = ""

  if (file.icon) {
    file.icon = file.icon.replace('res://', '')

    let iconPath = path.dirname(file.icon).split(path.sep)
    let iconBaseName = path.basename(file.icon)
    let iconPathArray = []

    for (let index = 0; index < iconPath.length; index++) {
      const element = iconPath[index]
      if (!config.projectDir.split(path.sep).includes(element)) {
        iconPathArray.push(element)
      }
    }

    icon = `![icon](${path.join(
      iconPathArray.join(path.sep),
      iconBaseName
    )})`
  }

  var cleanFileName = cleanUpFileName(file.name)

  return `## [ICON_${cleanFileName}] ${cleanFileName}\n${contents}`
}

const addIcon = (file) => {
  if (file.icon) {
    file.icon = file.icon.replace('res://', '')

    let iconPath = path.dirname(file.icon).split(path.sep)
    let iconBaseName = path.basename(file.icon)
    let iconPathArray = []

    for (let index = 0; index < iconPath.length; index++) {
      const element = iconPath[index]
      if (!config.projectDir.split(path.sep).includes(element)) {
        iconPathArray.push(element)
      }
    }
    
    const icon_text = `![icon](${path.join(
      iconPathArray.join(path.sep),
      iconBaseName
      )})`
    
    const cleanFileName = cleanUpFileName(file.name)
    icon_store[cleanFileName] = icon_text

    return icon_text
  } else if (file.name.includes("extends")) {
    const splitString  = file.name.split("extends")
    const extention = splitString[1].trim()
    const icon_text = icon_store[extention]
    if (icon_text) {
      return icon_text
    }
  }

  return ""
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
