"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[6958],{425:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);const r={title:"Introduction",description:"OWS Introduction",sidebar_position:1},o="Introduction",c={id:"index",title:"Introduction",description:"OWS Introduction",source:"@site/docs/ows/index.md",sourceDirName:".",slug:"/",permalink:"/docs/ows/",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/ows/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"OWS Introduction",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Integrating with OAuth2",permalink:"/docs/ows/usage/oauth2"}},a={},l=[{value:"Install",id:"install",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Maintainers",id:"maintainers",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)("img",{alt:"GitHub Actions Workflow Status",src:"https://img.shields.io/github/actions/workflow/status/ufosc/OpenWebServices/node.js.yml?label=NodeJS%20Build"}),"\n",(0,t.jsx)("img",{alt:"GitHub Actions Workflow Status",src:"https://img.shields.io/github/actions/workflow/status/ufosc/OpenWebServices/go.yml?label=Go%20Build"}),"\n",(0,t.jsx)("img",{alt:"GitHub License",src:"https://img.shields.io/github/license/ufosc/OpenWebServices"}),"\n",(0,t.jsx)("img",{alt:"GitHub issues",src:"https://img.shields.io/github/issues/ufosc/OpenWebServices"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("img",{src:"https://i.imgur.com/SpaZ5j2.png",width:700}),"\n",(0,t.jsx)(n.p,{children:"OpenWebServices is the UF Open Source Club's Microservices project. It currently implements a custom OAuth2 server, SMTP relay, and account management dashboard. It hopes to establish a common set of developer and project infrastructure services for use across the Open Source Club's projects. All microservices integrate with Kubernetes."}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(n.p,{children:["This project uses the ",(0,t.jsx)(n.a,{href:"https://go.dev/",children:"Go compiler"})," and ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en",children:"NodeJS"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ufosc/OpenWebServices.git\ncd OpenWebservices/dashboard\nnpm i\n"})}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:"The project consists of three components: the authentication (Oauth2) server, the dashboard frontend, and the websmtp relay server. To get started, begin by launching the auth server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd oauth2\ngo run ./...\n"})}),"\n",(0,t.jsx)(n.p,{children:"In a separate terminal, launch the NextJS dashboard:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd dashboard\nnpm run dev\n"})}),"\n",(0,t.jsx)(n.h2,{id:"maintainers",children:"Maintainers"}),"\n",(0,t.jsxs)(n.p,{children:["Maintained by the UF Open Source Club, can be contacted via ",(0,t.jsx)(n.a,{href:"https://discord.gg/j9g5dqSVD8",children:"Discord"})]}),"\n",(0,t.jsx)(n.p,{children:"Current Maintainers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Michail Zeipekki @zeim839"}),"\n",(0,t.jsx)(n.li,{children:"Daniel Wildsmith @danielwildsmith"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/ufosc/OpenWebServices/blob/main/LICENSE",children:"AGPL-3.0"})}),"\n",(0,t.jsx)(n.p,{children:"Copyright (C) 2024 Open Source Club"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);