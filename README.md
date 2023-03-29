# GDScriptify2

![release v2.0.0](https://img.shields.io/badge/release-v1.0.0-478cbf?style=flat-square) ![MIT license](https://img.shields.io/badge/license-MIT-478cbf?style=flat-square)

A magical documentation tool for GDScript 2.x.

![GDScriptify banner](/gdscriptify-banner.jpg)

## Introduction

GDScriptify is an API documentation generator tool for GDScript that converts comments you write alongside the code into Markdown documentation files.

It's great for documenting Godot plugins or frameworks. Even for just small one-script projects.

## Table of contents

- [GDScriptify2](#gdscriptify2)
  - [Introduction](#introduction)
  - [Table of contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Options](#options)
  - [Documentation](#documentation)
  - [Getting started](#getting-started)
  - [🗒️ Changelog](#️-changelog)
  - [👤 Author](#-author)
  - [🤝 Contributing](#-contributing)
  - [👏 Credits](#-credits)
  - [📝 Licenses](#-licenses)

## Prerequisites

- [Node.js](https://nodejs.org) installed on your computer.

## Installation

```bash
npm install gdscriptify -g
```

## Usage

```bash
gdscriptify [options]
```

## Options

- `-h, --help`: Show help menu.
- `-d, --directory path`: Path from which to generate the documentation.
  - It can be an absolute path.
  - It can be a relative path (has to start with `./`).
  - It must contain a `project.godot` file.
  - Default: `./`.
- `-o, --ouput path`: Path to store the documentation.
  - It must be a relative path to `--directory`.
  - Default: `docs`.
- `-c, --code {true|false}`: Generate a "Code Reference" JSON file to `--output`.
  - Default: `false`.
- `-m, --markdown {true|false}`: Generate Markdown files to `--output`.
  - Default: `true`.
- `-r, --readme false`: Prevent generating a `README` file.
  - Only has effect when there's 1 GDScript file.
  - Default: `true`.
- `-v, --version`: Show package version.

## Documentation

- [How to document GDScript files](/docs/how-to-document-gdscript-files.md).
- [Generate a README file](/docs/generate-a-readme-file.md).

## Getting started

First of all, you have to [document the GDScript files](/docs/how-to-document-gdscript-files.md).

Once that's done:

- Open a Terminal.
- Go to your Godot's project folder.
- Run `gdscriptify2`.

```bash
cd /path/to/your/godot/project
gdscriptify2
```

Or, if you don't want to have to go the folder, you can run `gdscriptify2` with `-d [path]` from anywhere.

```bash
gdscriptify2 -d /path/to/your/godot/project
```

Assuming GDScriptify2's default values are being used, a `docs` folder will be created in the root of your Godot's project (where `project.godot` or `plugin.cfg` is located) with the documentation files.

```
project
├── another_awesome_script.gd
├── awesome_script.gd
├── docs
│   ├── another_awesome_script.md
│   └── awesome_script.md
├── icon.png
└── project.godot
```

If there's **only 1 GDScript file** in the project, GDScriptify2 will create a `README.md` file in the root of your Godot's project.

```
project
├── awesome_script.gd
├── icon.png
├── project.godot
└── README.md
```

Check out the documentation on [generating a README file](/docs/generate-a-readme-file.md) to learn how to make it look better.

If you don't want that one file to be converted into a README file, run:

```
gdscriptify2 -r false
```

## 🗒️ Changelog

See [CHANGELOG](/CHANGELOG.md).

## 👤 Author

- krazyjakee
- hiulit

## 🤝 Contributing

Feel free to:

- [Open an issue](https://github.com/krazyjakee/GDScriptify2/issues) if you find a bug.
- [Create a pull request](https://github.com/krazyjakee/GDScriptify2/pulls) if you have a new cool feature to add to the project.

## 👏 Credits

Thanks to:

- **hiulit** - For creating the original GDScriptify.
- **Andrea Calabró** - For creating the Godot logo.
- [Twemoji](https://twemoji.twitter.com/) - For the emojis.

## 📝 Licenses

- Source code: [MIT License](/LICENSE).
- Godot logo: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- Emojis: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
