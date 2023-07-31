---
title: Getting Started
description: Club Website Developer Introduction
sidebar_position: 1
---

The OSC Club Website is built in NodeJS, using EJS as a frontend framework and ExpressJS for backend hosting. Our objective was to maximize resource-loading performance and consequently minimise resource sizes and overhead. For this reason, we opted against modern front-end frameworks (React, Angular, etc.) and instead built a dynamic full-stack site - essentially relying on the backend for processing, rather than serving a resource-heavy frontend that pulls data via APIs.

Moreover, we hoped that this approach would better support beginner programmers at the University of Florida in learning the fundamentals of web development: HTML, CSS, and vanilla JavaScript.

We've tried to make this guide as beginner-friendly as possible, however this <ins>is not a tutorial of the various frameworks/libraries used</ins>. For beginner-friendly resources, refer to the [resources](#beginner-resources) section.

## Prerequisites

The OSC website project requires certain dependencies to be installed on the user's machine.

### System Development Libraries

If you are using macOS, you will need to install Xcode Command Line Tools. These tools provide essential development libraries and utilities, including Git, which is required for the OSC website project and other development tasks.

#### Installing Xcode Command Line Tools:

1. Open Terminal, which can be found in the Utilities folder within the Applications folder, or you can use Spotlight search (Cmd + Space) and type "Terminal" to open it.
2. Enter the following command:
```bash
xcode-select --install
```
3. A dialog will pop up asking you to install the Xcode Command Line Tools. Click "Install" and follow the on-screen instructions.

#### Build Essential (for Linux)

If you are using a Linux distribution, you'll need to ensure you have the `build-essential` package installed. This package includes essential tools for building software on a Linux system, such as compilers and libraries.

For Debian-based distributions (e.g., Ubuntu):
```bash
sudo apt update
sudo apt install build-essential
```

For Red Hat-based distributions (e.g., Fedora):
```bash
sudo dnf groupinstall "Development Tools"
```

For Arch Linux:
```bash
sudo pacman -S base-devel
```

The installation process will depend on your specific Linux distribution. Once build-essential is installed, you'll have the necessary tools for development on your Linux system.

### Git

Git is a version control system that's necessary for installing the project and collaborating with others.

1. Visit the official Git website: https://git-scm.com/downloads
2. Download the installer for your operating system (Windows, macOS, or Linux).
3. Run the installer and follow the on-screen instructions to install Git.

### NodeJS & NPM

The OSC website website is built using NodeJS, so you'll need to have it installed prior to running the site.

1. Visit the official Node.js website: https://nodejs.org/
2. Download the LTS (Long-Term Support) version for your operating system.
3. Run the installer and follow the installation instructions.
4. After installation, open your command line (Terminal on macOS/Linux, Command Prompt on Windows) and run the following commands to verify that Node.js and NPM are installed:
```bash
node -v
npm -v
```

### Text Editor

You'll need a text editor to write and modify your Docusaurus project files. Many developers prefer using code editors with syntax highlighting and other useful features.

Some popular text editors and Integrated Development Environments (IDEs) for web development include:

1. Visual Studio Code: https://code.visualstudio.com/
2. Sublime Text: https://www.sublimetext.com/
3. Atom: https://atom.io/
4. JetBrains WebStorm: https://www.jetbrains.com/webstorm/
5. Emacs https://www.gnu.org/software/emacs/ (requires IQ > 160).

Choose the one that suits your preferences and install it on your system.

## Installation

1. Clone the Github Repository.
```bash
git clone https://github.com/ufosc/Club_Website_2.git
```
2. Navigate to the downloaded directory.
```bash
cd Club_Website_2
```

3. Install NodeJS dependencies
```bash
npm i
```

## Contributing

The OSC Website is distributed under the [AGPL-3.0-or-later](https://github.com/ufosc/Club_Website_2/blob/main/LICENSE.md) license. Aside from being open-source, the license asserts that anyone is free to run, modify, redistribute exact copies, and distribute modified versions of the project (in accordance with the [AGPL-3.0-or-later license](https://github.com/ufosc/Club_Website_2/blob/main/LICENSE.md)).

To contribute or download the source code, refer to the [Github Repository](https://github.com/ufosc/Club_Website_2).

Contributions must adhere to the [contributing guide](https://github.com/ufosc/Club_Website_2/blob/main/CONTRIBUTING.md).

## Beginner Resources

 * [HTML Tutorial](https://www.w3schools.com/html/) by W3Schools (interactive text).
 * [Learn HTML by building a website](https://www.youtube.com/watch?v=pQN-pnXPaVg) by freeCodeCamp.org (youtube).
 * [NodeJS & ExpressJS Full Course](https://www.youtube.com/watch?v=Oe421EPjeBE) by freeCodeCamp.org (youtube).
 * [Build a Zoom Clone with NodeJS](https://www.youtube.com/watch?v=DvlyzDZDEq4) Basic NodeJS and EJS by Web Dev Simplified (youtube).
