"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[6428],{6959:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(4848),s=i(8453);const o={title:"Usage & Configuration",description:"Club Website Configuration",sidebar_position:2},r="Usage & Configuration",a={id:"legacy/Developers/configuration",title:"Usage & Configuration",description:"Club Website Configuration",source:"@site/docs/website/legacy/Developers/configuration.md",sourceDirName:"legacy/Developers",slug:"/legacy/Developers/configuration",permalink:"/docs/website/legacy/Developers/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/legacy/Developers/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Usage & Configuration",description:"Club Website Configuration",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/docs/website/legacy/Developers/introduction"},next:{title:"Rendering Pages",permalink:"/docs/website/legacy/Developers/rendering"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Starting the webserver:",id:"starting-the-webserver",level:3},{value:"Linting &amp; fixing:",id:"linting--fixing",level:3},{value:"Running tests:",id:"running-tests",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Node Environment",id:"node-environment",level:3},{value:"Database Connections",id:"database-connections",level:3},{value:"Server Port",id:"server-port",level:3},{value:"Admin Dashboard Endpoint",id:"admin-dashboard-endpoint",level:3},{value:"Rate Limiting",id:"rate-limiting",level:3},{value:"Caching",id:"caching",level:3},{value:"Secret",id:"secret",level:3},{value:"SMTP Contact Form",id:"smtp-contact-form",level:3},{value:"ADMIN_EMAIL",id:"admin_email",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"usage--configuration",children:"Usage & Configuration"}),"\n",(0,t.jsx)(n.admonition,{title:"OUTDATED",type:"danger",children:(0,t.jsxs)(n.p,{children:["This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See ",(0,t.jsx)(n.a,{href:"/docs/website/",children:"index"})," for the latest information."]})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"starting-the-webserver",children:"Starting the webserver:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Unless you've manually specified a port, you can access the website by visiting ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," on your browser."]}),"\n",(0,t.jsx)(n.h3,{id:"linting--fixing",children:"Linting & fixing:"}),"\n",(0,t.jsx)(n.p,{children:"This project adheres to the JavaScript Standard syntax style, use linting to show you a list of syntax errors that you'll need to correct."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n",(0,t.jsx)(n.p,{children:"To automatically fix these, you can run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run fix\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Keep in mind that some syntax issues cannot be automatically resolved, in which case you'll need to run ",(0,t.jsx)(n.code,{children:"npm run lint"})," again and resolve them manually."]}),"\n",(0,t.jsx)(n.h3,{id:"running-tests",children:"Running tests:"}),"\n",(0,t.jsx)(n.admonition,{title:"Volatile Data",type:"danger",children:(0,t.jsxs)(n.p,{children:["Tests are only meant to be ran on development environments. Do not use production databases in testing, their contents ",(0,t.jsx)("b",{children:"risk being deleted"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["All configurations are available in ",(0,t.jsx)(n.a,{href:"https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js",children:"config.js"})," and can be modified by creating a ",(0,t.jsx)(n.code,{children:".env"})," file in the root directory."]}),"\n",(0,t.jsx)(n.h3,{id:"node-environment",children:"Node Environment"}),"\n",(0,t.jsx)(n.p,{children:"NODE_ENV: Sets the working environment."}),"\n",(0,t.jsx)(n.p,{children:"Three options are available:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Development - for writing & testing new features."}),"\n",(0,t.jsx)(n.li,{children:"Staging - for testing features before deployment."}),"\n",(0,t.jsx)(n.li,{children:"Production - for finished features available to the public."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The working environment is set to 'development' by default. It can be changed by adding the following line to the ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'NODE_ENV = "development"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"database-connections",children:"Database Connections"}),"\n",(0,t.jsx)(n.p,{children:"MONGO_URI: Sets the connection URI for the MongoDB database."}),"\n",(0,t.jsxs)(n.p,{children:["It can be changed by adding the following line to the ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'MONGO_URI = "..."\n'})}),"\n",(0,t.jsx)(n.h3,{id:"server-port",children:"Server Port"}),"\n",(0,t.jsxs)(n.p,{children:["The port to run the server on. Set to 3000 by default. It can be changed by adding the following line to the ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SERVER_PORT = 3000\n"})}),"\n",(0,t.jsx)(n.h3,{id:"admin-dashboard-endpoint",children:"Admin Dashboard Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["Because generic admin routes are subject to directory scans by vulnerability analyzers, we've added the option to configure the route manually. It is set to 'admin' by default, but can be changed via the following option in ",(0,t.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ADMIN_ROUTE = "admin"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,t.jsx)(n.p,{children:"The limiter sets up a rate limiter that controls how many requests can be made by a user before they are timed-out. There are two available options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"RATE_LIMIT_TIMEOUT - the time interval (in minutes) where the user will be locked out of the site if they violate the rate limit."}),"\n",(0,t.jsx)(n.li,{children:"RATE_LIMIT_MAX - the maximum number of requests in one RATE_LIMIT_TIMEOUT interval."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"They can be modified as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"RATE_LIMIT_TIMEOUT = 5\nRATE_LIMIT_MAX = 1500\n"})}),"\n",(0,t.jsx)(n.h3,{id:"caching",children:"Caching"}),"\n",(0,t.jsx)(n.p,{children:"CACHE_INTERVAL: How long to cache static pages (blog, index, etc.) for."}),"\n",(0,t.jsx)(n.p,{children:"Instead of repeatedly querying the database for data, non-priority pages are cached. The cache interval (in minutes) can be modified like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CACHE_INTERVAL = 30\n"})}),"\n",(0,t.jsx)(n.h3,{id:"secret",children:"Secret"}),"\n",(0,t.jsx)(n.p,{children:"The secret is a key for encrypting JWTs. It can be modified like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'SECRET = "any string"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"smtp-contact-form",children:"SMTP Contact Form"}),"\n",(0,t.jsx)(n.p,{children:"Configurations for the SMTP mailer. This is disabled in development environments, but can be modified with the following options:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SMTP_HOST"}),": host address for the SMTP server (string)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SMTP_PORT"}),": port for the host (integer, see above)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SMTP_USER"}),": the server username (string)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SMTP_PASS"}),": the server password (string."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"admin_email",children:"ADMIN_EMAIL"}),"\n",(0,t.jsx)(n.p,{children:"The email address to send contact form confirmation emails from. Can be set to anything so long as it's a valid email address. Modified as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'ADMIN_EMAIL = "no-reply@ufosc.com"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);