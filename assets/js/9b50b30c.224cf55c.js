"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[9197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const s={title:"Using MongoDB",description:"Club Website Developer Database",sidebar_position:1},r="Using MongoDB",i={unversionedId:"Developers/Databases/mongodb",id:"Developers/Databases/mongodb",title:"Using MongoDB",description:"Club Website Developer Database",source:"@site/docs/website/Developers/Databases/mongodb.md",sourceDirName:"Developers/Databases",slug:"/Developers/Databases/mongodb",permalink:"/docs/website/Developers/Databases/mongodb",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/Databases/mongodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using MongoDB",description:"Club Website Developer Database",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Rendering Pages",permalink:"/docs/website/Developers/rendering"},next:{title:"Database Models",permalink:"/docs/website/Developers/Databases/models"}},l={},c=[{value:"Mongoose Basics",id:"mongoose-basics",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Database.js",id:"databasejs",level:2},{value:"Setting up your own database",id:"setting-up-your-own-database",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-mongodb"},"Using MongoDB"),(0,o.kt)("p",null,"The website uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),", a document-oriented database program, to fetch and serve information for the backend. When running in a development environment, the backend is automatically configured to connect to a public OSC testing database. This section documents the basic prolegomena of operating and managing the OSC Website database."),(0,o.kt)("p",null,"For the OSC testing URI, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js#L3"},"here")," (note that the database is public and volatile, and not meant for production environments). For instructions on changing environments or configuring your own Mongo connection URI, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/website/Developers/configuration"},"here"),"."),(0,o.kt)("h2",{id:"mongoose-basics"},"Mongoose Basics"),(0,o.kt)("p",null,"The project uses the ",(0,o.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"Mongoose")," library as an abstraction over the default MongoDB NodeJS package. Mongoose organizes database structures into schemas and models (analogous to schemas in SQL) that automatically validate and enforce rules on database entries. For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="model/images.js"',title:'"model/images.js"'},"const mongoose = require('mongoose')\n\nconst ImageSchema = new mongoose.Schema({\n  filename: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  path: {\n    type: String,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true,\n    default: Date.now\n  }\n})\n\nconst ImageModel = mongoose.model('image', ImageSchema)\nmodule.exports = { ImageSchema, ImageModel }\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/model/images.js"},"source above"),", an ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSchema")," is defined. The schema defines ",(0,o.kt)("inlineCode",{parentName:"p"},"filename, description, path, and date")," as properties of the 'Image' object. Similarly, it enforces certain rules over these properties: that 'filename' is a required string, that 'date' is a required JavaScript 'Date' object with a default value, etc."),(0,o.kt)("p",null,"Furthermore, Mongoose allows us to formalize a 'model' from this schema, in this case, it is named ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageModel"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageModel")," acts as a driver to our database's 'Image' collection (collections are structures similar to tables in SQL). Once the model is created, it is exported and ready to be used in other files. What follows is a series of code examples drawn from the website sourcecode that illustrate what models are capable of:"),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/images.js:32"',title:'"routes/images.js:32"'},"const images = await ImageModel.find().sort({ date: -1 })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js#L32"},"example")," above fetches all images in the database and sorts them in descending (-1) date order."),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/images.js:68"',title:'"routes/images.js:68"'},"const image = new ImageModel({\n    filename: req.file.filename,\n    description: req.body.Description,\n    path: req.file.path\n})\n\nimage.save((err) => {\n    if (err) return res.status(500).send({ error: 'Internal Server Error' })\n})\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/images.js#L68C3-L76C5"},"example")," above, a new ",(0,o.kt)("ins",null,"instance")," of an ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageModel")," with some given data, automatically validates it to make sure it matches the schema we've defined, and then attempts to save it to the database."),(0,o.kt)("admonition",{title:"Further Reading",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about Mongoose and MongoDB, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/index.html"},"Mongoose Documentation")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/languages/mongodb-with-nodejs"},"MongoDB NodeJS documentation"),".")),(0,o.kt)("h2",{id:"databasejs"},"Database.js"),(0,o.kt)("p",null,"The database connection URI is configured in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/utils/config.js"},"utils/config.js"),", whilst the effective database connection configuration happens in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/utils/database.js"},"utils/database.js"),". The database utility modularizes the connection (allowing us to handle the connection in multiple files simultaneously), whilst also implementing various event listeners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="utils/database.js"',title:'"utils/database.js"'},"mongoose.connection.on('connected', () => {\n    // CONNECTION SUCCEEDED...\n})\n\nmongoose.connection.on('error', (error) => {\n    // CONNECTION FAILED...\n})\n\nmongoose.connection.on('disconnected', () => {\n    // DISCONNECTED...\n})\n\nprocess.on('SIGINT', (error, data) => {\n    // SIGINT: User stopped the program.\n})\n")),(0,o.kt)("p",null,"Database.js is imported, and a database connection is subsequently opened in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/app.js#L81"},"main.js"),"."),(0,o.kt)("h2",{id:"setting-up-your-own-database"},"Setting up your own database"),(0,o.kt)("p",null,"If you're interested in hosting your own instance of the website, you'll need to set up your own MongoDB node. The MongoDB team currently offers free (but limited) database hosting on their ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/atlas"},"MongoDB Atlas")," platform. Alternatively, you can set up MongoDB ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community"},"community edition"),' on your machine and host your own instance for "free."'))}d.isMDXComponent=!0}}]);