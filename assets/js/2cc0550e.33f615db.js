"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Contact Route",description:"Club Website Developer API",sidebar_position:3},i="Contact Route",s={unversionedId:"Developers/API/contact",id:"Developers/API/contact",title:"Contact Route",description:"Club Website Developer API",source:"@site/docs/website/Developers/API/contact.md",sourceDirName:"Developers/API",slug:"/Developers/API/contact",permalink:"/docs/website/Developers/API/contact",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/API/contact.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Contact Route",description:"Club Website Developer API",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Blog Route",permalink:"/docs/website/Developers/API/blog"},next:{title:"Edit Route",permalink:"/docs/website/Developers/API/edit"}},l={},c=[{value:"Submit Contact Form: (POST) /api/contact/",id:"submit-contact-form-post-apicontact",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Sample Response",id:"sample-response",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contact-route"},"Contact Route"),(0,a.kt)("p",null,"The contact route manages the website contact form. It validates email addresses and form input fields, and (if applicable) sends emails to both the OSC and form-user's email addresses."),(0,a.kt)("admonition",{title:"routes/contact.js",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The contact route is defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/contact.js"},"/routes/contact.js")," and operates on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/edit")," API path.")),(0,a.kt)("h2",{id:"submit-contact-form-post-apicontact"},"Submit Contact Form: (POST) /api/contact/"),(0,a.kt)("p",null,"This route expects the contact form's field data (as JSON). If the data is successfully validated, it sends an email to the admin account notifying it of the new message, whilst also sending a receipt of the submitted form to the specified email address of the submitter."),(0,a.kt)("p",null,"Email protocol interfacing is achieved via an SMTP server, which receives and processes outgoing server mail. For configuration instructions, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/website/Developers/configuration"},"configuration"),"."),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FirstName (JSON, body)"),(0,a.kt)("td",{parentName:"tr",align:null},"The sender's first name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LastName (JSON, body)"),(0,a.kt)("td",{parentName:"tr",align:null},"The sender's last name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Email (JSON, body)"),(0,a.kt)("td",{parentName:"tr",align:null},"The sender's email address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message (JSON, body)"),(0,a.kt)("td",{parentName:"tr",align:null},"The sender's message")))),(0,a.kt)("h3",{id:"sample-response"},"Sample Response"),(0,a.kt)("p",null,"If the request succeeded, a single 'Success' string will be returned."))}d.isMDXComponent=!0}}]);