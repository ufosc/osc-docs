---
title: Bash Guide
description: Club Archive Resources Bash Guide
sidebar_position: 0
---

Bash is the most common shell for Unix and Unix like (such as Linux) platforms. The name comes from abbreviating "Bourne Again SHell". It allows a user to "talk" to a computer with a command line (as opposed to the normal GUI) and can be very powerful for scripting tasks.

It takes advantage of many small utilities (like `grep`, `curl`, or `find`) that each perform a specific task. You can navigate your files, download a video, or delete your entire operating system (ProTip: don't try that last one)! In many cases, you can chain together the output of one utility to be the input of another. This can be very powerful.

In addition to using the terminal, you can write bash scripts. They are similar to programs you make in other programming languages. It can ve very useful for automating repetitive task.

For Windows users, a useful application for emulating a bash terminal and using many of it's utilities is Windows Subsystem for Linux (usually seen as WSL). For more infomation, check the link in Resources below. Also, if you would prefer a distro other than Ubuntu, consider looking into if your machine is compatible with WSL2.

<iframe width="500" height="300" src="https://www.youtube.com/embed/I4EWvMFj37g" title="Bash in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Useful Commands

`pwd` - "Present Working Directory" - Displays the current directory. Useful for relative pathing.

`cd [directory]` - "Change Directory" - Changes to the specified directory. Most of the time, you will be using a relative path, but you can also specify an absolute path. Use ".." to go up a level in the filesystem.

`grep "[pattern]"` - "Global Regular Expression Print" - Searches the current and lower directories' files for a given pattern. For example, if you're looking for a function definition, you could use `grep "functionName"` in the project directory.

`cat [filename(s)]` - "Concatenate" - Outputs the contents of the specified file(s). If multiple files are given, their contents will be concatenated together. It's often useful to [pipe](https://askubuntu.com/questions/420981/how-do-i-save-terminal-output-to-a-file) the output of this command to other commands or files.

## Editing Files in Bash

There are many editors that can be used in bash shells. One of the more commonly found editors in linux distros is GNU nano. If you are used to working on Windows machines, you can think of nano as a much more advanced notepad. It has many useful shortcuts which are displayed at the bottom of the window. If nano is installed in your distro, you can open files with `nano [filename]` if this file does not exist, nano will create a new file with that name. Once you've completed your changes, you can write and quit nano with `Ctrl + x`.

While nano is well suited for smaller edits, a more advanced editor can be found in [Vim (Vi Improved)](https://www.vim.org/). This editor may be confusing for newer users as it has multiple modes and shortcuts that may not be apparent. You can find a good cheatsheet in Resources below. Once Vim is installed on your machine, you can open files similarly to nano with `vim [filename]`. This will put you in at the first line of the file in cursor mode. Be aware, you cannot directly type in the file in this mode. You can navigate to where you'd like to with the arrow keys and from there you can press `i` to begin inserting into the file. Once you've completed your changes, you can write and quit with `esc` to get back to cursor mode and then typing `:wq`.

## Resources

- [Terminal and Bash Fundamentals](http://tldp.org/LDP/Bash-Beginners-Guide/html/)
- [Bash Examples](https://github.com/OSUOSC/command-line-introduction)
- [Bash Scripting](https://linuxconfig.org/bash-scripting-tutorial)
- [Comprehensive Overview of Bash and Unix](http://info.ee.surrey.ac.uk/Teaching/Unix/index.html)
- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [WSL2](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)
- [Vim Cheatsheet](https://vim.rtorr.com/)
