"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={title:"Getting Started",description:"Club Website Developer Introduction",sidebar_position:1},a=void 0,l={unversionedId:"Developers/introduction",id:"Developers/introduction",title:"Getting Started",description:"Club Website Developer Introduction",source:"@site/docs/website/Developers/introduction.md",sourceDirName:"Developers",slug:"/Developers/introduction",permalink:"/docs/website/Developers/introduction",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started",description:"Club Website Developer Introduction",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Admin Dashboard",permalink:"/docs/website/admin"},next:{title:"Usage & Configuration",permalink:"/docs/website/Developers/configuration"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"System Development Libraries",id:"system-development-libraries",level:3},{value:"Installing Xcode Command Line Tools:",id:"installing-xcode-command-line-tools",level:4},{value:"Build Essential (for Linux)",id:"build-essential-for-linux",level:4},{value:"Git",id:"git",level:3},{value:"NodeJS &amp; NPM",id:"nodejs--npm",level:3},{value:"Text Editor",id:"text-editor",level:3},{value:"Installation",id:"installation",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Beginner Resources",id:"beginner-resources",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The OSC Club Website is built in NodeJS, using EJS as a frontend framework and ExpressJS for backend hosting. Our objective was to maximize resource-loading performance and consequently minimise resource sizes and overhead. For this reason, we opted against modern front-end frameworks (React, Angular, etc.) and instead built a dynamic full-stack site - essentially relying on the backend for processing, rather than serving a resource-heavy frontend that pulls data via APIs."),(0,i.kt)("p",null,"Moreover, we hoped that this approach would better support beginner programmers at the University of Florida in learning the fundamentals of web development: HTML, CSS, and vanilla JavaScript."),(0,i.kt)("p",null,"We've tried to make this guide as beginner-friendly as possible, however this ",(0,i.kt)("ins",null,"is not a tutorial of the various frameworks/libraries used"),". For beginner-friendly resources, refer to the ",(0,i.kt)("a",{parentName:"p",href:"#beginner-resources"},"resources")," section."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The OSC website project requires certain dependencies to be installed on the user's machine."),(0,i.kt)("h3",{id:"system-development-libraries"},"System Development Libraries"),(0,i.kt)("p",null,"If you are using macOS, you will need to install Xcode Command Line Tools. These tools provide essential development libraries and utilities, including Git, which is required for the OSC website project and other development tasks."),(0,i.kt)("h4",{id:"installing-xcode-command-line-tools"},"Installing Xcode Command Line Tools:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Open Terminal, which can be found in the Utilities folder within the Applications folder, or you can use Spotlight search (Cmd + Space) and type "Terminal" to open it.'),(0,i.kt)("li",{parentName:"ol"},"Enter the following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},'A dialog will pop up asking you to install the Xcode Command Line Tools. Click "Install" and follow the on-screen instructions.')),(0,i.kt)("h4",{id:"build-essential-for-linux"},"Build Essential (for Linux)"),(0,i.kt)("p",null,"If you are using a Linux distribution, you'll need to ensure you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"build-essential")," package installed. This package includes essential tools for building software on a Linux system, such as compilers and libraries."),(0,i.kt)("p",null,"For Debian-based distributions (e.g., Ubuntu):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install build-essential\n")),(0,i.kt)("p",null,"For Red Hat-based distributions (e.g., Fedora):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo dnf groupinstall "Development Tools"\n')),(0,i.kt)("p",null,"For Arch Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S base-devel\n")),(0,i.kt)("p",null,"The installation process will depend on your specific Linux distribution. Once build-essential is installed, you'll have the necessary tools for development on your Linux system."),(0,i.kt)("h3",{id:"git"},"Git"),(0,i.kt)("p",null,"Git is a version control system that's necessary for installing the project and collaborating with others."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the official Git website: ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")),(0,i.kt)("li",{parentName:"ol"},"Download the installer for your operating system (Windows, macOS, or Linux)."),(0,i.kt)("li",{parentName:"ol"},"Run the installer and follow the on-screen instructions to install Git.")),(0,i.kt)("h3",{id:"nodejs--npm"},"NodeJS & NPM"),(0,i.kt)("p",null,"The OSC website website is built using NodeJS, so you'll need to have it installed prior to running the site."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the official Node.js website: ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"https://nodejs.org/")),(0,i.kt)("li",{parentName:"ol"},"Download the LTS (Long-Term Support) version for your operating system."),(0,i.kt)("li",{parentName:"ol"},"Run the installer and follow the installation instructions."),(0,i.kt)("li",{parentName:"ol"},"After installation, open your command line (Terminal on macOS/Linux, Command Prompt on Windows) and run the following commands to verify that Node.js and NPM are installed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,i.kt)("h3",{id:"text-editor"},"Text Editor"),(0,i.kt)("p",null,"You'll need a text editor to write and modify your Docusaurus project files. Many developers prefer using code editors with syntax highlighting and other useful features."),(0,i.kt)("p",null,"Some popular text editors and Integrated Development Environments (IDEs) for web development include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visual Studio Code: ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/")),(0,i.kt)("li",{parentName:"ol"},"Sublime Text: ",(0,i.kt)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"https://www.sublimetext.com/")),(0,i.kt)("li",{parentName:"ol"},"Atom: ",(0,i.kt)("a",{parentName:"li",href:"https://atom.io/"},"https://atom.io/")),(0,i.kt)("li",{parentName:"ol"},"JetBrains WebStorm: ",(0,i.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/webstorm/"},"https://www.jetbrains.com/webstorm/")),(0,i.kt)("li",{parentName:"ol"},"Emacs ",(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/emacs/"},"https://www.gnu.org/software/emacs/")," (requires IQ > 160).")),(0,i.kt)("p",null,"Choose the one that suits your preferences and install it on your system."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the Github Repository.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ufosc/Club_Website_2.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Navigate to the downloaded directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd Club_Website_2\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Install NodeJS dependencies")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"The OSC Website is distributed under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/LICENSE.md"},"AGPL-3.0-or-later")," license. Aside from being open-source, the license asserts that anyone is free to run, modify, redistribute exact copies, and distribute modified versions of the project (in accordance with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/LICENSE.md"},"AGPL-3.0-or-later license"),")."),(0,i.kt)("p",null,"To contribute or download the source code, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2"},"Github Repository"),"."),(0,i.kt)("p",null,"Contributions must adhere to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/CONTRIBUTING.md"},"contributing guide"),"."),(0,i.kt)("h2",{id:"beginner-resources"},"Beginner Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/html/"},"HTML Tutorial")," by W3Schools (interactive text)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=pQN-pnXPaVg"},"Learn HTML by building a website")," by freeCodeCamp.org (youtube)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Oe421EPjeBE"},"NodeJS & ExpressJS Full Course")," by freeCodeCamp.org (youtube)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DvlyzDZDEq4"},"Build a Zoom Clone with NodeJS")," Basic NodeJS and EJS by Web Dev Simplified (youtube).")))}c.isMDXComponent=!0}}]);