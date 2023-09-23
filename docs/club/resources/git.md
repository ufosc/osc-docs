---
title: Git & Github Guide
description: Club Archive Resources Git Guide
sidebar_position: 7
---
## Prerequisites
Using any development tool on your system will require an installation of your OSs relevant dev tools. On MacOS or Linux, this is easily achieved by running one of the following on your command line:

### Linux systems
#### Debian, Ubuntu, etc.
```bash
sudo apt install build-essential
```
#### Arch, Manjaro, etc.
```bash
sudo pacman -Sy base-devel
```
### Mac0S
```bash
xcode-select --install
```
### Windows
No prerequisites required

## Installing Git
Git can be installed via its installer [here](https://git-scm.com/downloads). Alternatively, Mac0S and Linux users can install git via [Homebrew](https://brew.sh) or via their respective linux package manager (see [instructions](https://git-scm.com/download/linux)).

## Contributing to a project

### Recommended Workflow
1. (Optional) Fork a repository
2. Clone repository
3. Navigate to repository files via your command line.
4. Create a branch.
5. Navigate to branch.
6. Make & commit changes
7. Push changes
8. Repeate steps 6-7 as many times as necessary
9. Open a github pull request

### Navigating Github (steps 1-3)
Forking a repository:
If you're working on your own repository or have explicit permission to modify the source repository, then you can skip this step. Otherwise, forking will allow you to create branches and push changes to a personal copy before you can open a pull request (you most likely wont be able to do directly on the original repo without special permissions).

<img title="forking" alt="Screenshot of forking a repo" src="/img/club/git-guide/forking.png" />

Cloning a repository:
If you've just forked a repo, make sure you are cloning your fork and not the original. Github should redirect you automatically; if it doesn't,  you can navigate to your Profile>Repositories and select the fork from there.

To clone, click on the Code button and copy the HTTPS source:
<img title="copying source" alt="Screenshot of copying git source" src="/img/club/git-guide/copying-src.jpg" />

Then, open up your terminal and type:

```bash
cd [desktop/downloads, wherever you want to copy to]
git clone [source you've just copied]
cd [Name of your project]
```

`git clone` will copy the project onto your desired directory, whilst `cd` will allow you to navigate between directories. At this point, you should be in your project's main folder. To show a list of all available files, you can run:
```bash
ls
```

### Contributing with the command line (steps 4-8)
To follow steps 4-8 in the command line,

#### Fetching & pulling
If you've just cloned a repository then there's (probably) no need to do this. However, you'll want to run these commands before you start working on new contributions to make sure your main branch is up-to-date with your source - you dont want to start making changes to an old version of the codebase.

First of all, make sure you're on the main branch:
```bash
git checkout main
```

Then, fetch:
```bash
git fetch
```
Fetching will ping the github server and download new changes. However, Git doesn't automatically apply these changes because in case you're still working on something - you'll need to do this yourself.

At this point, if you've made any changes you should save them before pulling using. Pulling might also give you an error if you have uncommited changes - even if you dont want to keep them. You can resolve these errors (and save your uncommited work) by running:
```bash
git stash
```

Then, load the new changes with pull:
```bash
git pull
```

If at this point you want to discard your old uncommited changes, then skip the following step. Otherwise, you can restore your changes with:
```bash
git stash pop
```

If you ever want to see an organized list of all your changes and staged work, you can run:
```bash
git status
```
This will also show you the uncommitted work you may (or may not) want to save before pulling.

#### Creating a branch
Branching allows you to maintain a fresh, isolated copy of the codebase for you to implement new features in. Once you've made sure you're on main (ALWAYS branch from main, unless otherwise instructed), you can create a new branch with:
```bash
git branch [your_branch_name]
```

At this point, you're still on main, so you want to navigate to your new branch with:
```bash
git checkout [your_branch_name]
```

#### Making and committing changes
Commits are the changes that you're "committed" to, meaning you are certain about wanting to keep and push them to the original source of your project. Once you are done working on your code, you can view all your changes with:
```bash
git status
```
This will show you a list of staged, uncommited and untracked files. New files are always untracked because git has never heard of them before - you'll want to treat these the same as uncommitted changes. Uncommited changes are changes made to files that git knows about, but said changes haven't yet been committed. Finally, staged changes are the changes that will be saved to a commit once you commit your work.

Your goal is to move all the changes you are happy with to the 'staged' portion in `git status`. Before doing this, make sure to review all your uncommited and untracked changes and decide which of those you want to keep or discard.

Then, begin staging your desired changes with:
```bash
git add [file_name]
```

You can add multiple files at once with:
```bash
git add [file_name] [file_name2] [file_name3] ...
```

Once youre ready, you can commit (i.e. "finalize/save") these changes using:
```bash
git commit -m "enter a message describing your changes"
```

You dont have to add all your changes into a single commit - and its probably best if you dont. You can repeat these steps as many times as you want: making changes, staging, and committing as many times as necessary. Its always a good idea to separate your work into multiple commits, just make sure to use descriptive and detailed messages.

Once you've made your changes, you can sync with github using:
```bash
git push origin [name of your current branch]
```
If you open up your fork page on github, you'll probably see a message alerting you of these new changes. These are not final yet, you'll need to merge your fork before they'll appear on the main branch (more on that later).

Though you can technically push as often and as many times as you want, it's probably a good idea to wait until you're all done with your work. In the event that you want to remove or backtrack one of your commits, it'll be easier to do so when they haven't yet been synced with github.

### Contributing with VSCode (steps 4-8)
<iframe width="500" height="300" src="https://www.youtube.com/embed/TUYt4oXLxQs" title="Source Control Tip 4: Source Control View in VS Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

It's still a good idea to be familiar with the command line, as VSCode will sometimes prompt you with errors that can only be resolved by manually operating your terminal.

### Making a pull request (merging with main)
Opening pull requests is how you share your work with your project maintainers. It organizes your local work and opens a request to merge this work into the original repository. Once you've committed and pushed your changes, navigate back to your fork:
<img title="changes made" alt="Screenshot of github" src="/img/club/git-guide/compare.png" />

You'll want to click on "Compare & pull request".

Finally:
<img title="opening a pull request" alt="Screenshot of github" src="/img/club/git-guide/opening_pull_requests.png" />

## Keeping your fork up to date
You'll want to stay up to date with new changes so that you're always starting your work on the latest version of the codebase. To do this, you'll need to regularly sync your fork. An option should appear on your fork's page to sync with original repo. You'll need to sync it regularly and then update the copy on your laptop with:

(make sure you're on main):
```bash
git checkout main
```

Download changes:
```bash
git fetch
```

Load changes:
```bash
git pull
```
