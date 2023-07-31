---
title: Installation
description: OSC Docs Installation
sidebar_position: 2
---

# Installation

## Prerequisites

The OSC Docs project requires certain dependencies to be installed on the user's machine.

### System Development Libraries

If you are using macOS, you will need to install Xcode Command Line Tools. These tools provide essential development libraries and utilities, including Git, which is required for the OSC Docs project and other development tasks.

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

The OSC Docs website is built using NodeJS, so you'll need to have it installed prior to running the site.

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

## Cloning the Repository

Cloning the repository requires having Git installed. 'Cloning' will install a copy of the project. To install OSC Docs on your system, run:

```bash
git clone https://github.com/ufosc/osc-docs.git
```

## Installing Dependencies

To install the project's dependencies, run:

```bash
cd osc-docs
npm i
```

You're now ready to start using the OSC Docs website. Continue to the [Usage](/docs/osc-docs/usage) to start the development server.
