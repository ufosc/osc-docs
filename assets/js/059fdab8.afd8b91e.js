"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[2920],{8236:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=i(4848),r=i(8453);const n={title:"Accessing Resources",description:"OWS Resource API",sidebar_position:1},o="Accessing Authenticated Resources",c={id:"usage/resources",title:"Accessing Resources",description:"OWS Resource API",source:"@site/docs/ows/usage/resources.md",sourceDirName:"usage",slug:"/usage/resources",permalink:"/docs/ows/usage/resources",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/ows/usage/resources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Accessing Resources",description:"OWS Resource API",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Integrating with OAuth2",permalink:"/docs/ows/usage/oauth2"},next:{title:"Kubernetes",permalink:"/docs/ows/kubernetes"}},a={},d=[{value:"Note on Permissions",id:"note-on-permissions",level:2},{value:"Authorization Header",id:"authorization-header",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"accessing-authenticated-resources",children:"Accessing Authenticated Resources"}),"\n",(0,t.jsxs)(s.p,{children:["Accessing authenticated resources using the OWS API is quite easy, provided that you've set up a sufficiently permissioned client. This article assumes that you're familiar with the ",(0,t.jsx)(s.a,{href:"/docs/ows/usage/oauth2",children:"Integrating with OAuth2"})," section. Accessing authenticated resources essentially comes down to including the user's access token in an ",(0,t.jsx)(s.code,{children:"Authorization"})," header."]}),"\n",(0,t.jsx)(s.admonition,{title:"Prerequisites",type:"tip",children:(0,t.jsxs)(s.p,{children:["This section assumes that you've registered a client and have retrieved a user's access token. For more information, consult the ",(0,t.jsx)(s.a,{href:"/docs/ows/usage/oauth2",children:"Integrating with OAuth2"})," article."]})}),"\n",(0,t.jsx)(s.h2,{id:"note-on-permissions",children:"Note on Permissions"}),"\n",(0,t.jsxs)(s.p,{children:["As mentioned in ",(0,t.jsx)(s.a,{href:"/docs/ows/usage/oauth2",children:"Integrating with OAuth2"}),', your client application may have greater or fewer privileges according to whether it is a confidential or public client - authorization grant or implicit grant scheme, respectively. Additionally, each client may only access as much data as is granted to it by the user. This is configured by the "permissions" section in the client signup process.']}),"\n",(0,t.jsx)(s.p,{children:"Modifying a client's permissions is prohibited for security reasons. If you'd like to modify permissions, you'll need to create a new client and ask your users to authorize themselves once more."}),"\n",(0,t.jsx)(s.h2,{id:"authorization-header",children:"Authorization Header"}),"\n",(0,t.jsxs)(s.p,{children:["To access a resource on behalf of a user, you'll need to have an ",(0,t.jsx)(s.a,{href:"/docs/ows/usage/oauth2",children:"access token"}),". The access token is attached to an authorization header according to the ",(0,t.jsx)(s.a,{href:"https://datatracker.ietf.org/doc/html/rfc6750",children:"RFC 6750 bearer token"})," specification."]}),"\n",(0,t.jsx)(s.p,{children:"The Authorization Header is an HTTP header. It is constructed as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Authorization: Bearer <ACCESS_TOKEN>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"<ACCESS_TOKEN>"})," is the access token received from the user. The access token and ",(0,t.jsx)(s.code,{children:"Bearer"})," keywords must be separated by a single space character."]}),"\n",(0,t.jsxs)(s.p,{children:["You'll need to check for errors after each request. Errors are returned in JSON format, as well as in the ",(0,t.jsx)(s.code,{children:"WWW-Authenticate"})," format specified in RFC6750. The JSON format is included in the body, and assumes the following form:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n    "error": "<ERROR_TYPE>",\n    "error_description": "<ERROR_MSG>",\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"<ERROR_TYPE>"})," is one of ",(0,t.jsx)(s.code,{children:"invalid_request"}),", ",(0,t.jsx)(s.code,{children:"invalid_token"}),", or ",(0,t.jsx)(s.code,{children:"insufficient_scope"}),", and ",(0,t.jsx)(s.code,{children:"<ERROR_MSG>"})," is a human-readable description of the error. The error will likewise be attached to the ",(0,t.jsx)(s.code,{children:"WWW-Authenticate"})," header, which should be received as part of the response. It will assume the format below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'WWW-Authenticate: Bearer scope="<SCOPES>" realms="<REALMS>" error="<ERROR>" error_description="<ERROR_MSG>"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Where ",(0,t.jsx)(s.code,{children:"<SCOPES>"})," specifies the client permissions required to access this route, ",(0,t.jsx)(s.code,{children:"<REALMS>"})," specifies the user permissions for the route, and the rest of the parameters are equivalent to the JSON example."]}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(s.admonition,{title:"UNSTABLE",type:"warning",children:(0,t.jsx)(s.p,{children:"OWS is currently unstable. There is no guarantee that the resources below will be consistent across future releases.."})}),"\n",(0,t.jsx)(s.p,{children:"This section lists some of the resources accessible from the OWS API. In the future, this section will be replaced by a detailed API reference."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["(GET) /client/",":id"," -- Get information on a client by referencing its Client ID."]}),"\n",(0,t.jsx)(s.li,{children:"(GET) /user -- Get information on the user whose access token is specified in the Authorization header."}),"\n",(0,t.jsx)(s.li,{children:"(PUT) /user -- Modify the user whose access token is currently being used."}),"\n",(0,t.jsx)(s.li,{children:"(GET) /users -- Get a paginated list of users."}),"\n",(0,t.jsxs)(s.li,{children:["(DELETE) /user/",":id"," -- Delete the user with the specified ID."]}),"\n",(0,t.jsx)(s.li,{children:"(GET) /clients -- Get a paginated list of clients."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To retrieve the user's information and finalize authentication, a client simply needs to call the ",(0,t.jsx)(s.code,{children:"/user"})," route, which will return all private user information that the client is authorized to access."]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var t=i(6540);const r={},n=t.createContext(r);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);