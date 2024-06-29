"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[3970],{5716:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var s=i(4848),r=i(8453);const n={title:"Edit Route",description:"Club Website Developer API",sidebar_position:4},o="Edit Route",d={id:"legacy/Developers/API/edit",title:"Edit Route",description:"Club Website Developer API",source:"@site/docs/website/legacy/Developers/API/edit.md",sourceDirName:"legacy/Developers/API",slug:"/legacy/Developers/API/edit",permalink:"/docs/website/legacy/Developers/API/edit",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/legacy/Developers/API/edit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Edit Route",description:"Club Website Developer API",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Contact Route",permalink:"/docs/website/legacy/Developers/API/contact"},next:{title:"Users Route",permalink:"/docs/website/legacy/Developers/API/users"}},l={},a=[{value:"Create new Blog Entry: (GET) /api/edit/blog",id:"create-new-blog-entry-get-apieditblog",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Example",id:"example",level:3},{value:"Modify Existing Blog Entry: (GET) /api/edit/blog/",id:"modify-existing-blog-entry-get-apieditblog",level:2},{value:"Request Parameters",id:"request-parameters-1",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example-1",level:3},{value:"Create new User: (GET) /api/edit/user",id:"create-new-user-get-apiedituser",level:2},{value:"Request Parameters",id:"request-parameters-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Modify Existing User: (GET) /api/edit/user/",id:"modify-existing-user-get-apiedituser",level:2},{value:"Request Parameters",id:"request-parameters-3",level:3},{value:"Response",id:"response-1",level:3},{value:"Example",id:"example-3",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"edit-route",children:"Edit Route"}),"\n",(0,s.jsx)(t.admonition,{title:"OUTDATED",type:"danger",children:(0,s.jsxs)(t.p,{children:["This page is part of the documentation for release V1.0. This documentation is outdated and V1.0 is no longer maintained. See ",(0,s.jsx)(t.a,{href:"/docs/website/",children:"index"})," for the latest information."]})}),"\n",(0,s.jsx)(t.p,{children:"The edit route renders the 'edit' pages that enable admins to create and modify articles, and other users. They return templated EJS sites that automatically fetch the requested resource's data and render it into editable HTML forms."}),"\n",(0,s.jsx)(t.p,{children:"This set of routes is responsible for returning one of two possible options - both via the same EJS templates - for each form:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"An empty form for creating new object instances."}),"\n",(0,s.jsx)(t.li,{children:"A partially filled form for modifying existing instances."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"routes/edit.js",type:"tip",children:(0,s.jsxs)(t.p,{children:["The edit route is defined in ",(0,s.jsx)(t.a,{href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/edit.js",children:"/routes/edit.js"})," and operates on the ",(0,s.jsx)(t.code,{children:"/api/edit"})," API path."]})}),"\n",(0,s.jsx)(t.h2,{id:"create-new-blog-entry-get-apieditblog",children:"Create new Blog Entry: (GET) /api/edit/blog"}),"\n",(0,s.jsxs)(t.p,{children:["This route returns the blog entry creation form with no pre-filled fields. The form's template is implemented in ",(0,s.jsx)(t.a,{href:"https://github.com/ufosc/Club_Website_2/blob/main/views/edit-blog.ejs",children:"/views/edit-blog.ejs"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This route is authenticated. It responds with an HTML page."}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JWT (cookie)"}),(0,s.jsx)(t.td,{children:"(Required) Auth cookie"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/blog'\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"modify-existing-blog-entry-get-apieditblog",children:["Modify Existing Blog Entry: (GET) /api/edit/blog/",":id"]}),"\n",(0,s.jsx)(t.p,{children:"This route returns an HTML form, filled with pre-existing blog post data, that enables an admit to modify the specified blog post. This is an authenticated route. It responds with an HTML page."}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters-1",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ID (path)"}),(0,s.jsx)(t.td,{children:"ID of blog post to modify"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JWT (cookie)"}),(0,s.jsx)(t.td,{children:"(Required) Auth cookie"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.p,{children:"Responds with an HTML page of the blog modification form."}),"\n",(0,s.jsx)(t.p,{children:"If the object ID is invalid, the following JSON error is returned:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="application/json"',children:'{ "error": "The article you\'ve tried to access no longer exists" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the object ID is valid but cannot be found, the following JSON error is returned:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="application/json"',children:'{ "error": "Article not found" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the client is not authenticated, a 403 forbidden error will be returned."}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/blog/<BLOG ID HERE>'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"create-new-user-get-apiedituser",children:"Create new User: (GET) /api/edit/user"}),"\n",(0,s.jsxs)(t.p,{children:["This route returns the user creation form with no pre-filled fields. The form's template is implemented in ",(0,s.jsx)(t.a,{href:"https://github.com/ufosc/Club_Website_2/blob/main/views/edit-user.ejs",children:"/views/edit-user.ejs"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This route is authenticated. It responds with an HTML page."}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters-2",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JWT (cookie)"}),(0,s.jsx)(t.td,{children:"(Required) Auth cookie"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/user'\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"modify-existing-user-get-apiedituser",children:["Modify Existing User: (GET) /api/edit/user/",":id"]}),"\n",(0,s.jsx)(t.p,{children:"This route returns an HTML form, filled with pre-existing user data, that enables an admit to modify the specified user. This is an authenticated route. It responds with an HTML page."}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters-3",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ID (path)"}),(0,s.jsx)(t.td,{children:"ID of user to modify"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JWT (cookie)"}),(0,s.jsx)(t.td,{children:"(Required) Auth cookie"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsx)(t.p,{children:"Responds with an HTML page of the blog modification form."}),"\n",(0,s.jsx)(t.p,{children:"If the object ID is invalid, the following JSON error is returned:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="application/json"',children:'{ "error": "The user you\'ve tried to access no longer exists" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the object ID is valid but cannot be found, the following JSON error is returned:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="application/json"',children:'{ "error": "User not found" }\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the client is not authenticated, a 403 forbidden error will be returned."}),"\n",(0,s.jsx)(t.h3,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/user/<USER ID HERE>'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var s=i(6540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);