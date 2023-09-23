"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"Rust Guide",description:"Club Archive Resources Rust Guide",sidebar_position:5},i=void 0,s={unversionedId:"resources/rust",id:"resources/rust",title:"Rust Guide",description:"Club Archive Resources Rust Guide",source:"@site/docs/club/resources/rust.md",sourceDirName:"resources",slug:"/resources/rust",permalink:"/docs/club/resources/rust",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/club/resources/rust.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Rust Guide",description:"Club Archive Resources Rust Guide",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Versioning Guide",permalink:"/docs/club/resources/versioning"},next:{title:"Python Guide",permalink:"/docs/club/resources/python"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Note on Installation",id:"note-on-installation",level:3},{value:"Resources",id:"resources",level:2},{value:"Good Rust Talks",id:"good-rust-talks",level:3},{value:"Game Libraries",id:"game-libraries",level:3},{value:"WebAssembly",id:"webassembly",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Benchmarking Rust",id:"benchmarking-rust",level:3},{value:"Operating Systems",id:"operating-systems",level:3},{value:"Text Parsers",id:"text-parsers",level:3},{value:"Other Neat Crates",id:"other-neat-crates",level:3},{value:"&quot;Are we ___ yet?&quot;",id:"are-we-___-yet",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," is a systems level programming language with an emphasis on performance, reliability, productivity, and readability.\nIt has the low level performance of C or C++ without the danger of pointer problems.\nIt is able to do this, because it's compiler ensures any potential errors aren't added (you can think of it as having a garbage collector at the compile stage)."),(0,n.kt)("p",null,"Rust can be used for server side software, embedded devices, websites (via WebAssembly), and much more as the community continues to grow.\nThe ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/"},"official documentation")," (a.k.a. ",(0,n.kt)("em",{parentName:"p"},"The Book"),") does an excellent job at introducing someone familiar with programming to Rust."),(0,n.kt)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/5C_HPTJg5ek",title:"Rust in 100 Seconds",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Rust is known for having a steep learning curve.\nAs with any programming language, the best way to learn Rust is by doing a Rust.\nFollowing along with ",(0,n.kt)("em",{parentName:"p"},"The Book")," and attempt each exercise.\nIf you can make it to Chapter 12, you should be well on your way to learning Rust.\nAttempt to make simple applications in Rust, like the Unix ",(0,n.kt)("inlineCode",{parentName:"p"},"head")," utility."),(0,n.kt)("p",null,"If you have issues, feel free to ask other members.\n(We love any chance to talk about Rust.)\nAbove all else, remember that the Rust compiler is the best kind of friend;\nwhen other compilers would turn a blind eye and let you hurt yourself, ",(0,n.kt)("inlineCode",{parentName:"p"},"rustc"),' will jump in and say, "Woah buddy! Have you thought this through?"\nFriends like ',(0,n.kt)("inlineCode",{parentName:"p"},"rustc")," can be annoying at times, but they're the friends you want to be with."),(0,n.kt)("p",null,"Beyond ",(0,n.kt)("em",{parentName:"p"},"The Book"),", there are a number of great Rust resources for developers of all skill levels.\nSee ",(0,n.kt)("a",{parentName:"p",href:"#resources"},"Resources")," below."),(0,n.kt)("h3",{id:"note-on-installation"},"Note on Installation"),(0,n.kt)("p",null,"We recommend that you install the Rust toolchain via ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"rustup"),".\nWhile many Linux distributions offer Rust packages, these pacakges can often be outdated.\nInstalling ",(0,n.kt)("inlineCode",{parentName:"p"},"rustup")," circumvents this problem entirely."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Official Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"Official Documentation (",(0,n.kt)("em",{parentName:"a"},"The Book"),")")," - We can't mention this one enough. Go-to resource for Rustaceans of all skill levels."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools"},"Setting up your editor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"Official Cargo Documentation")," - Rust has a mature package manager / build system that combines the best of ",(0,n.kt)("inlineCode",{parentName:"li"},"npm")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"make"),". Once you use ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo"),", you'll never look at project management the same way."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/rust-by-example/"},"Rust by Example")," - Similar to ",(0,n.kt)("em",{parentName:"li"},"The Book"),", but with less talk and more code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rust-unofficial.github.io/too-many-lists/"},"Learn Rust with Entirely Too Many Linked Lists")," - A great (and humorous) introduction to Rust's memory management scheme. Highly recommended for anyone who knows the basics of Rust, but hasn't gotten a handle on lifetimes and the ownership model."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rust-lang-nursery.github.io/rust-cookbook/intro.html"},"Rust Cookbook"),' - "How do I do ___ in Rust?" (also shows off a number of community standard crates)')),(0,n.kt)("h3",{id:"good-rust-talks"},"Good Rust Talks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=A3AdN7U24iU"},"Rust: A Language for the Next 40 Years")," - Explanation of the Rust's safety guarantees and the goals of the Rust project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=g4SYTOc8fL0"},"Procedural Macros")," - Good introduction to procedural macros."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/skos4B5x7qE"},"Zero Cost Async IO")," - Review on the current state of asynchronous Rust in 2019. (See also: tokio)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GCsxYAxw3JQ"},"I Convinced the World's Largest Package Manager to Use Rust, and So Can You")," - how npm began using Rust")),(0,n.kt)("h3",{id:"game-libraries"},"Game Libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.piston.rs/"},"piston")," - Most popular Rust library for game development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://book.amethyst.rs/stable/"},"amethyst")," - The second most popular Rust library."),(0,n.kt)("li",{parentName:"ul"},"Bonus: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rust-lang/prev.rust-lang.org/blob/master/pdfs/Rust-Chucklefish-Whitepaper.pdf"},"Rust at Chucklefish")," - Developers of ",(0,n.kt)("em",{parentName:"li"},"Starbound")," and ",(0,n.kt)("em",{parentName:"li"},"Stardew Valley"),' published this whitepaper, explaining why they chose to develop their next title with Rust. Well, a former developer later stated that they moved from Rust back to their C++ engine, since, "it just didn\'t make much sense for a small company to be developing two engines in parallel, instead of re-using existing code and knowledge." Understandable.')),(0,n.kt)("p",null,'See also: "Are we ___ yet? section below.'),(0,n.kt)("h3",{id:"webassembly"},"WebAssembly"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"rustc")," is based on LLVM, meaning that it can generate WebAssembly (WASM) code with relative ease.\nAdd in the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasm-bindgen")," crate, and you have all the safety of Rust, with the speed of WASM, and the convenience of JavaScript."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/wasm-bindgen/"},"Tensor Programming - Intro to Rust Web Asssembly")," - Great YouTube tutorial explaining how to compile Rust to WASM from start to finish."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/docs/wasm-bindgen/introduction.html"},"wasm-bindgen Documentation")," - Official documentation for the wasm-bindgen crate. Includes instructions for compiling Rust to WASM, and instructions for calling JavaScript functions from Rust using ",(0,n.kt)("inlineCode",{parentName:"li"},"web-sys"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/YDQICTKlr9g"},"WebAssembly with Rust")," - Excellent talk from Kevin Hoffman, who ",(0,n.kt)("a",{parentName:"li",href:"https://pragprog.com/book/khrust/programming-webassembly-with-rust"},"literally wrote the book on Rust+WASM"),". Explains many WASM fundamentals well."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yew.rs/docs/"},"Yew")," - A Rust framework for front-end web development inspired by Elm.")),(0,n.kt)("h3",{id:"graphics"},"Graphics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rust-tutorials.github.io/learn-gfx-hal/"},"gfx-hal")," - An ambitious, low-level Rust library that based in part on Vulkan. Not for the faint of heart."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.alopex.li/AGuideToRustGraphicsLibraries2019"},"Review of Rust Graphics Libraries (2019)")," - Review of graphics libraries in Rust.")),(0,n.kt)("p",null,'See also: the "Are we ___ yet?" section below.'),(0,n.kt)("h3",{id:"benchmarking-rust"},"Benchmarking Rust"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://perf.wiki.kernel.org/index.php/Tutorial"},"Perf")," - If you're a Linux user you should consider using ",(0,n.kt)("inlineCode",{parentName:"li"},"perf"),". Based on a Linux kernel interface, ",(0,n.kt)("inlineCode",{parentName:"li"},"perf")," directly tracks different events like cache misses, cpu-cycles, and branches. Thus, ",(0,n.kt)("inlineCode",{parentName:"li"},"perf")," gives you a hardware-independent profile of your program's performance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/commands/cargo-bench.html"},"cargo-bench"),' - Official documentation on the "cargo bench" command. Note that the stable toolchain does not include a benchmarking crate by default, so you will need to add a crate to your project (see below).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bheisler.github.io/criterion.rs/book/index.html"},"criterion.rs")," - A Rust crate offering sophisticated benchmarking, based on Haskell's Criterion library. At the time of writing, this library seems poised to become the standard."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=d2ZQ9-4ZJmQ"},"Paul Mason - Benchmarking and Optimization of Rust Libraries")," - Relevant talk from RustConf 2018.")),(0,n.kt)("h3",{id:"operating-systems"},"Operating Systems"),(0,n.kt)("p",null,"Remember that part about Rust being 'low level'?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.redox-os.org/"},"Redox")," - Unix-like operating system rocking a custom libc and microkernel design."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://os.phil-opp.com/"},"Writing an OS in Rust")," - Great blog series with code snippets and explanations of common OS concepts."),(0,n.kt)("li",{parentName:"ul"},"Relevant: ",(0,n.kt)("a",{parentName:"li",href:"https://rust-embedded.github.io/book/"},"The Embedded Systems Book"))),(0,n.kt)("h3",{id:"text-parsers"},"Text Parsers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Geal/nom"},"nom")," - High-performance text parsing crate with a bottom-up approach. (See also: ",(0,n.kt)("a",{parentName:"li",href:"https://stevedonovan.github.io/rust-gentle-intro/4-modules.html"},"unofficial tutorial"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pest.rs/"},"pest"),' - "the elegant parser" emphasizing accessibility. Similar in spirit to ',(0,n.kt)("a",{parentName:"li",href:"https://www.antlr.org/"},"ANTLR"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/antlr/antlr4/issues/1839"},"antlr4-backend: coming soon???")," - The king of all parser-generators might have a Rust target soon. Stay posted.")),(0,n.kt)("h3",{id:"other-neat-crates"},"Other Neat Crates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rust-random.github.io/book/"},"rand")," - Rust's standard library does not include any random number generators. ",(0,n.kt)("inlineCode",{parentName:"li"},"rand")," is the ",(0,n.kt)("em",{parentName:"li"},"de facto")," standard for RNGs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/clap-rs/clap"},"clap")," - Extremely versatile command-line argument parser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://serde.rs/"},"serde")," - Efficient serialization framework for Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep"),' - Took the title for "fastest grep" from the long-reigning champion GNU grep.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://rust-bio.github.io/"},"rust-bio")," - library of common bioinformatic alogrithms and data structures"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/flate2/"},"flate2")," - library for compression / decompression (gzip and zlib formats)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tokio.rs/"},"tokio")," - reliable, high-performance asynchronous runtime for Rust"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/futures/"},"futures")," - zero-cost asynchronous Rust")),(0,n.kt)("h3",{id:"are-we-___-yet"},'"Are we ___ yet?"'),(0,n.kt)("p",null,"Rust has a small standard library, but a big community that grows every day.\nThese pages track Rust's development in different domains of interest."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://areweasyncyet.rs/"},"Are we async yet?")," - Stablized syntax, robust ecosystem, more features coming every day (Feb 2020)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.arewewebyet.org/"},"Are we web yet?")," - Can we build a backend in Rust? (Spoiler: yes.)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arewegameyet.com/"},"Are we game yet?")," - Libraries relevant to game developers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://areweguiyet.com/"},"Are we GUI yet?")," - Cross platform GUIs in Rust are still in development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.arewelearningyet.com/"},"Are we learning yet?")," - Current state of machine learning in Rust.")))}c.isMDXComponent=!0}}]);