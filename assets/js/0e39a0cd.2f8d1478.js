"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[3290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,d=b["".concat(l,".").concat(u)]||b[u]||m[u]||s;return a?o.createElement(d,n(n({ref:t},c),{},{components:a})):o.createElement(d,n({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"==typeof e?e:r,n[1]=i;for(var p=2;p<s;p++)n[p]=a[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const s={title:"Database Models",description:"Club Website Developer Database",sidebar_position:2},n="Database Models",i={unversionedId:"Developers/Databases/models",id:"Developers/Databases/models",title:"Database Models",description:"Club Website Developer Database",source:"@site/docs/website/Developers/Databases/models.md",sourceDirName:"Developers/Databases",slug:"/Developers/Databases/models",permalink:"/docs/website/Developers/Databases/models",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/Databases/models.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Database Models",description:"Club Website Developer Database",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Using MongoDB",permalink:"/docs/website/Developers/Databases/mongodb"},next:{title:"Image Storage",permalink:"/docs/website/Developers/Databases/image-storage"}},l={},p=[],c={toc:p},b="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database-models"},"Database Models"),(0,r.kt)("p",null,"The database's structure is defined by the following collections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Blogs (defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/model/blog.js"},"model/blog.js"),")"),(0,r.kt)("li",{parentName:"ol"},"Images (defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/model/images.js"},"model/images.js"),")"),(0,r.kt)("li",{parentName:"ol"},"Users (defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/model/users.js"},"model/users.js"),")")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To learn more about using models with MongooseJS, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/website/Developers/Databases/mongodb"},"Using MongoDB"),".")),(0,r.kt)("p",null,"Model instances are created and saved to the database in each model's corresponding API route."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog posts are managed in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/blog.js"},"routes/blog.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Images are managed in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js"},"routes/images.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Users are managed in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/users.js"},"routes/users.js"),".")),(0,r.kt)("p",null,"To learn more about routes, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/website/Developers/API/"},"API & Routes"),"."),(0,r.kt)("admonition",{title:"Image Storage",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The images database collection only stores metadata. Physical images are stored on the hard disk to reduce latency. To learn more, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/website/Developers/Databases/image-storage"},"Image Storage"),".")))}m.isMDXComponent=!0}}]);