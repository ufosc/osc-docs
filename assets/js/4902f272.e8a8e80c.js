"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[1383],{5520:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(4848),t=i(8453);const s={title:"Git & Github Guide",description:"Club Archive Resources Git Guide",sidebar_position:7},a=void 0,r={id:"resources/git",title:"Git & Github Guide",description:"Club Archive Resources Git Guide",source:"@site/docs/club/resources/git.md",sourceDirName:"resources",slug:"/resources/git",permalink:"/docs/club/resources/git",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/club/resources/git.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Git & Github Guide",description:"Club Archive Resources Git Guide",sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Python Guide",permalink:"/docs/club/resources/python"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Linux systems",id:"linux-systems",level:3},{value:"Debian, Ubuntu, etc.",id:"debian-ubuntu-etc",level:4},{value:"Arch, Manjaro, etc.",id:"arch-manjaro-etc",level:4},{value:"Mac0S",id:"mac0s",level:3},{value:"Windows",id:"windows",level:3},{value:"Installing Git",id:"installing-git",level:2},{value:"Contributing to a project",id:"contributing-to-a-project",level:2},{value:"Recommended Workflow",id:"recommended-workflow",level:3},{value:"Navigating Github (steps 1-3)",id:"navigating-github-steps-1-3",level:3},{value:"Contributing with the command line (steps 4-8)",id:"contributing-with-the-command-line-steps-4-8",level:3},{value:"Fetching &amp; pulling",id:"fetching--pulling",level:4},{value:"Creating a branch",id:"creating-a-branch",level:4},{value:"Making and committing changes",id:"making-and-committing-changes",level:4},{value:"Contributing with VSCode (steps 4-8)",id:"contributing-with-vscode-steps-4-8",level:3},{value:"Making a pull request (merging with main)",id:"making-a-pull-request-merging-with-main",level:3},{value:"Keeping your fork up to date",id:"keeping-your-fork-up-to-date",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Using any development tool on your system will require an installation of your OSs relevant dev tools. On MacOS or Linux, this is easily achieved by running one of the following on your command line:"}),"\n",(0,o.jsx)(n.h3,{id:"linux-systems",children:"Linux systems"}),"\n",(0,o.jsx)(n.h4,{id:"debian-ubuntu-etc",children:"Debian, Ubuntu, etc."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt install build-essential\n"})}),"\n",(0,o.jsx)(n.h4,{id:"arch-manjaro-etc",children:"Arch, Manjaro, etc."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Sy base-devel\n"})}),"\n",(0,o.jsx)(n.h3,{id:"mac0s",children:"Mac0S"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"xcode-select --install\n"})}),"\n",(0,o.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsx)(n.p,{children:"No prerequisites required"}),"\n",(0,o.jsx)(n.h2,{id:"installing-git",children:"Installing Git"}),"\n",(0,o.jsxs)(n.p,{children:["Git can be installed via its installer ",(0,o.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"here"}),". Alternatively, Mac0S and Linux users can install git via ",(0,o.jsx)(n.a,{href:"https://brew.sh",children:"Homebrew"})," or via their respective linux package manager (see ",(0,o.jsx)(n.a,{href:"https://git-scm.com/download/linux",children:"instructions"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"contributing-to-a-project",children:"Contributing to a project"}),"\n",(0,o.jsx)(n.h3,{id:"recommended-workflow",children:"Recommended Workflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"(Optional) Fork a repository"}),"\n",(0,o.jsx)(n.li,{children:"Clone repository"}),"\n",(0,o.jsx)(n.li,{children:"Navigate to repository files via your command line."}),"\n",(0,o.jsx)(n.li,{children:"Create a branch."}),"\n",(0,o.jsx)(n.li,{children:"Navigate to branch."}),"\n",(0,o.jsx)(n.li,{children:"Make & commit changes"}),"\n",(0,o.jsx)(n.li,{children:"Push changes"}),"\n",(0,o.jsx)(n.li,{children:"Repeate steps 6-7 as many times as necessary"}),"\n",(0,o.jsx)(n.li,{children:"Open a github pull request"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"navigating-github-steps-1-3",children:"Navigating Github (steps 1-3)"}),"\n",(0,o.jsx)(n.p,{children:"Forking a repository:\nIf you're working on your own repository or have explicit permission to modify the source repository, then you can skip this step. Otherwise, forking will allow you to create branches and push changes to a personal copy before you can open a pull request (you most likely wont be able to do directly on the original repo without special permissions)."}),"\n",(0,o.jsx)("img",{title:"forking",alt:"Screenshot of forking a repo",src:"/img/club/git-guide/forking.png"}),"\n",(0,o.jsx)(n.p,{children:"Cloning a repository:\nIf you've just forked a repo, make sure you are cloning your fork and not the original. Github should redirect you automatically; if it doesn't,  you can navigate to your Profile>Repositories and select the fork from there."}),"\n",(0,o.jsx)(n.p,{children:"To clone, click on the Code button and copy the HTTPS source:"}),"\n",(0,o.jsx)("img",{title:"copying source",alt:"Screenshot of copying git source",src:"/img/club/git-guide/copying-src.jpg"}),"\n",(0,o.jsx)(n.p,{children:"Then, open up your terminal and type:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd [desktop/downloads, wherever you want to copy to]\ngit clone [source you've just copied]\ncd [Name of your project]\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"git clone"})," will copy the project onto your desired directory, whilst ",(0,o.jsx)(n.code,{children:"cd"})," will allow you to navigate between directories. At this point, you should be in your project's main folder. To show a list of all available files, you can run:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ls\n"})}),"\n",(0,o.jsx)(n.h3,{id:"contributing-with-the-command-line-steps-4-8",children:"Contributing with the command line (steps 4-8)"}),"\n",(0,o.jsx)(n.p,{children:"To follow steps 4-8 in the command line,"}),"\n",(0,o.jsx)(n.h4,{id:"fetching--pulling",children:"Fetching & pulling"}),"\n",(0,o.jsx)(n.p,{children:"If you've just cloned a repository then there's (probably) no need to do this. However, you'll want to run these commands before you start working on new contributions to make sure your main branch is up-to-date with your source - you dont want to start making changes to an old version of the codebase."}),"\n",(0,o.jsx)(n.p,{children:"First of all, make sure you're on the main branch:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git checkout main\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, fetch:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git fetch\n"})}),"\n",(0,o.jsx)(n.p,{children:"Fetching will ping the github server and download new changes. However, Git doesn't automatically apply these changes because in case you're still working on something - you'll need to do this yourself."}),"\n",(0,o.jsx)(n.p,{children:"At this point, if you've made any changes you should save them before pulling using. Pulling might also give you an error if you have uncommited changes - even if you dont want to keep them. You can resolve these errors (and save your uncommited work) by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git stash\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, load the new changes with pull:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git pull\n"})}),"\n",(0,o.jsx)(n.p,{children:"If at this point you want to discard your old uncommited changes, then skip the following step. Otherwise, you can restore your changes with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git stash pop\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you ever want to see an organized list of all your changes and staged work, you can run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git status\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will also show you the uncommitted work you may (or may not) want to save before pulling."}),"\n",(0,o.jsx)(n.h4,{id:"creating-a-branch",children:"Creating a branch"}),"\n",(0,o.jsx)(n.p,{children:"Branching allows you to maintain a fresh, isolated copy of the codebase for you to implement new features in. Once you've made sure you're on main (ALWAYS branch from main, unless otherwise instructed), you can create a new branch with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git branch [your_branch_name]\n"})}),"\n",(0,o.jsx)(n.p,{children:"At this point, you're still on main, so you want to navigate to your new branch with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git checkout [your_branch_name]\n"})}),"\n",(0,o.jsx)(n.h4,{id:"making-and-committing-changes",children:"Making and committing changes"}),"\n",(0,o.jsx)(n.p,{children:'Commits are the changes that you\'re "committed" to, meaning you are certain about wanting to keep and push them to the original source of your project. Once you are done working on your code, you can view all your changes with:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git status\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will show you a list of staged, uncommited and untracked files. New files are always untracked because git has never heard of them before - you'll want to treat these the same as uncommitted changes. Uncommited changes are changes made to files that git knows about, but said changes haven't yet been committed. Finally, staged changes are the changes that will be saved to a commit once you commit your work."}),"\n",(0,o.jsxs)(n.p,{children:["Your goal is to move all the changes you are happy with to the 'staged' portion in ",(0,o.jsx)(n.code,{children:"git status"}),". Before doing this, make sure to review all your uncommited and untracked changes and decide which of those you want to keep or discard."]}),"\n",(0,o.jsx)(n.p,{children:"Then, begin staging your desired changes with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git add [file_name]\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can add multiple files at once with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git add [file_name] [file_name2] [file_name3] ...\n"})}),"\n",(0,o.jsx)(n.p,{children:'Once youre ready, you can commit (i.e. "finalize/save") these changes using:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'git commit -m "enter a message describing your changes"\n'})}),"\n",(0,o.jsx)(n.p,{children:"You dont have to add all your changes into a single commit - and its probably best if you dont. You can repeat these steps as many times as you want: making changes, staging, and committing as many times as necessary. Its always a good idea to separate your work into multiple commits, just make sure to use descriptive and detailed messages."}),"\n",(0,o.jsx)(n.p,{children:"Once you've made your changes, you can sync with github using:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git push origin [name of your current branch]\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you open up your fork page on github, you'll probably see a message alerting you of these new changes. These are not final yet, you'll need to merge your fork before they'll appear on the main branch (more on that later)."}),"\n",(0,o.jsx)(n.p,{children:"Though you can technically push as often and as many times as you want, it's probably a good idea to wait until you're all done with your work. In the event that you want to remove or backtrack one of your commits, it'll be easier to do so when they haven't yet been synced with github."}),"\n",(0,o.jsx)(n.h3,{id:"contributing-with-vscode-steps-4-8",children:"Contributing with VSCode (steps 4-8)"}),"\n",(0,o.jsx)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/TUYt4oXLxQs",title:"Source Control Tip 4: Source Control View in VS Code",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,o.jsx)(n.p,{children:"It's still a good idea to be familiar with the command line, as VSCode will sometimes prompt you with errors that can only be resolved by manually operating your terminal."}),"\n",(0,o.jsx)(n.h3,{id:"making-a-pull-request-merging-with-main",children:"Making a pull request (merging with main)"}),"\n",(0,o.jsx)(n.p,{children:"Opening pull requests is how you share your work with your project maintainers. It organizes your local work and opens a request to merge this work into the original repository. Once you've committed and pushed your changes, navigate back to your fork:"}),"\n",(0,o.jsx)("img",{title:"changes made",alt:"Screenshot of github",src:"/img/club/git-guide/compare.png"}),"\n",(0,o.jsx)(n.p,{children:'You\'ll want to click on "Compare & pull request".'}),"\n",(0,o.jsx)(n.p,{children:"Finally:"}),"\n",(0,o.jsx)("img",{title:"opening a pull request",alt:"Screenshot of github",src:"/img/club/git-guide/opening_pull_requests.png"}),"\n",(0,o.jsx)(n.h2,{id:"keeping-your-fork-up-to-date",children:"Keeping your fork up to date"}),"\n",(0,o.jsx)(n.p,{children:"You'll want to stay up to date with new changes so that you're always starting your work on the latest version of the codebase. To do this, you'll need to regularly sync your fork. An option should appear on your fork's page to sync with original repo. You'll need to sync it regularly and then update the copy on your laptop with:"}),"\n",(0,o.jsx)(n.p,{children:"(make sure you're on main):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git checkout main\n"})}),"\n",(0,o.jsx)(n.p,{children:"Download changes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git fetch\n"})}),"\n",(0,o.jsx)(n.p,{children:"Load changes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git pull\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(6540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);