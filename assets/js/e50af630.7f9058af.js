"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[7041],{8612:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=t(4848),n=t(8453);const i={title:"Rust Guide",description:"Club Archive Resources Rust Guide",sidebar_position:5},o=void 0,a={id:"resources/rust",title:"Rust Guide",description:"Club Archive Resources Rust Guide",source:"@site/docs/club/resources/rust.md",sourceDirName:"resources",slug:"/resources/rust",permalink:"/docs/club/resources/rust",draft:!1,unlisted:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/club/resources/rust.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Rust Guide",description:"Club Archive Resources Rust Guide",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Working on Open Source Projects",permalink:"/docs/club/resources/old_presentations/working-on-open-source"},next:{title:"Python Guide",permalink:"/docs/club/resources/python"}},l={},h=[{value:"Getting Started",id:"getting-started",level:2},{value:"Note on Installation",id:"note-on-installation",level:3},{value:"Resources",id:"resources",level:2},{value:"Good Rust Talks",id:"good-rust-talks",level:3},{value:"Game Libraries",id:"game-libraries",level:3},{value:"WebAssembly",id:"webassembly",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Benchmarking Rust",id:"benchmarking-rust",level:3},{value:"Operating Systems",id:"operating-systems",level:3},{value:"Text Parsers",id:"text-parsers",level:3},{value:"Other Neat Crates",id:"other-neat-crates",level:3},{value:"&quot;Are we ___ yet?&quot;",id:"are-we-___-yet",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.rust-lang.org/",children:"Rust"})," is a systems level programming language with an emphasis on performance, reliability, productivity, and readability.\nIt has the low level performance of C or C++ without the danger of pointer problems.\nIt is able to do this, because it's compiler ensures any potential errors aren't added (you can think of it as having a garbage collector at the compile stage)."]}),"\n",(0,r.jsxs)(s.p,{children:["Rust can be used for server side software, embedded devices, websites (via WebAssembly), and much more as the community continues to grow.\nThe ",(0,r.jsx)(s.a,{href:"https://doc.rust-lang.org/book/",children:"official documentation"})," (a.k.a. ",(0,r.jsx)(s.em,{children:"The Book"}),") does an excellent job at introducing someone familiar with programming to Rust."]}),"\n",(0,r.jsx)("iframe",{width:"500",height:"300",src:"https://www.youtube.com/embed/5C_HPTJg5ek",title:"Rust in 100 Seconds",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,r.jsx)(s.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(s.p,{children:["Rust is known for having a steep learning curve.\nAs with any programming language, the best way to learn Rust is by doing a Rust.\nFollowing along with ",(0,r.jsx)(s.em,{children:"The Book"})," and attempt each exercise.\nIf you can make it to Chapter 12, you should be well on your way to learning Rust.\nAttempt to make simple applications in Rust, like the Unix ",(0,r.jsx)(s.code,{children:"head"})," utility."]}),"\n",(0,r.jsxs)(s.p,{children:["If you have issues, feel free to ask other members.\n(We love any chance to talk about Rust.)\nAbove all else, remember that the Rust compiler is the best kind of friend;\nwhen other compilers would turn a blind eye and let you hurt yourself, ",(0,r.jsx)(s.code,{children:"rustc"}),' will jump in and say, "Woah buddy! Have you thought this through?"\nFriends like ',(0,r.jsx)(s.code,{children:"rustc"})," can be annoying at times, but they're the friends you want to be with."]}),"\n",(0,r.jsxs)(s.p,{children:["Beyond ",(0,r.jsx)(s.em,{children:"The Book"}),", there are a number of great Rust resources for developers of all skill levels.\nSee ",(0,r.jsx)(s.a,{href:"#resources",children:"Resources"})," below."]}),"\n",(0,r.jsx)(s.h3,{id:"note-on-installation",children:"Note on Installation"}),"\n",(0,r.jsxs)(s.p,{children:["We recommend that you install the Rust toolchain via ",(0,r.jsx)(s.a,{href:"https://www.rust-lang.org/tools/install",children:"rustup"}),".\nWhile many Linux distributions offer Rust packages, these pacakges can often be outdated.\nInstalling ",(0,r.jsx)(s.code,{children:"rustup"})," circumvents this problem entirely."]}),"\n",(0,r.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.rust-lang.org/",children:"Official Website"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.a,{href:"https://doc.rust-lang.org/book/",children:["Official Documentation (",(0,r.jsx)(s.em,{children:"The Book"}),")"]})," - We can't mention this one enough. Go-to resource for Rustaceans of all skill levels."]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.rust-lang.org/tools",children:"Setting up your editor"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://doc.rust-lang.org/cargo/",children:"Official Cargo Documentation"})," - Rust has a mature package manager / build system that combines the best of ",(0,r.jsx)(s.code,{children:"npm"})," and ",(0,r.jsx)(s.code,{children:"make"}),". Once you use ",(0,r.jsx)(s.code,{children:"cargo"}),", you'll never look at project management the same way."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://doc.rust-lang.org/rust-by-example/",children:"Rust by Example"})," - Similar to ",(0,r.jsx)(s.em,{children:"The Book"}),", but with less talk and more code."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rust-unofficial.github.io/too-many-lists/",children:"Learn Rust with Entirely Too Many Linked Lists"})," - A great (and humorous) introduction to Rust's memory management scheme. Highly recommended for anyone who knows the basics of Rust, but hasn't gotten a handle on lifetimes and the ownership model."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rust-lang-nursery.github.io/rust-cookbook/intro.html",children:"Rust Cookbook"}),' - "How do I do ___ in Rust?" (also shows off a number of community standard crates)']}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"good-rust-talks",children:"Good Rust Talks"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=A3AdN7U24iU",children:"Rust: A Language for the Next 40 Years"})," - Explanation of the Rust's safety guarantees and the goals of the Rust project."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=g4SYTOc8fL0",children:"Procedural Macros"})," - Good introduction to procedural macros."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://youtu.be/skos4B5x7qE",children:"Zero Cost Async IO"})," - Review on the current state of asynchronous Rust in 2019. (See also: tokio)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=GCsxYAxw3JQ",children:"I Convinced the World's Largest Package Manager to Use Rust, and So Can You"})," - how npm began using Rust"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"game-libraries",children:"Game Libraries"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.piston.rs/",children:"piston"})," - Most popular Rust library for game development."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://book.amethyst.rs/stable/",children:"amethyst"})," - The second most popular Rust library."]}),"\n",(0,r.jsxs)(s.li,{children:["Bonus: ",(0,r.jsx)(s.a,{href:"https://github.com/rust-lang/prev.rust-lang.org/blob/master/pdfs/Rust-Chucklefish-Whitepaper.pdf",children:"Rust at Chucklefish"})," - Developers of ",(0,r.jsx)(s.em,{children:"Starbound"})," and ",(0,r.jsx)(s.em,{children:"Stardew Valley"}),' published this whitepaper, explaining why they chose to develop their next title with Rust. Well, a former developer later stated that they moved from Rust back to their C++ engine, since, "it just didn\'t make much sense for a small company to be developing two engines in parallel, instead of re-using existing code and knowledge." Understandable.']}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'See also: "Are we ___ yet? section below.'}),"\n",(0,r.jsx)(s.h3,{id:"webassembly",children:"WebAssembly"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"rustc"})," is based on LLVM, meaning that it can generate WebAssembly (WASM) code with relative ease.\nAdd in the ",(0,r.jsx)(s.code,{children:"wasm-bindgen"})," crate, and you have all the safety of Rust, with the speed of WASM, and the convenience of JavaScript."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/",children:"Tensor Programming - Intro to Rust Web Asssembly"})," - Great YouTube tutorial explaining how to compile Rust to WASM from start to finish."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rustwasm.github.io/docs/wasm-bindgen/introduction.html",children:"wasm-bindgen Documentation"})," - Official documentation for the wasm-bindgen crate. Includes instructions for compiling Rust to WASM, and instructions for calling JavaScript functions from Rust using ",(0,r.jsx)(s.code,{children:"web-sys"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://youtu.be/YDQICTKlr9g",children:"WebAssembly with Rust"})," - Excellent talk from Kevin Hoffman, who ",(0,r.jsx)(s.a,{href:"https://pragprog.com/book/khrust/programming-webassembly-with-rust",children:"literally wrote the book on Rust+WASM"}),". Explains many WASM fundamentals well."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://yew.rs/docs/",children:"Yew"})," - A Rust framework for front-end web development inspired by Elm."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"graphics",children:"Graphics"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rust-tutorials.github.io/learn-gfx-hal/",children:"gfx-hal"})," - An ambitious, low-level Rust library that based in part on Vulkan. Not for the faint of heart."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://wiki.alopex.li/AGuideToRustGraphicsLibraries2019",children:"Review of Rust Graphics Libraries (2019)"})," - Review of graphics libraries in Rust."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'See also: the "Are we ___ yet?" section below.'}),"\n",(0,r.jsx)(s.h3,{id:"benchmarking-rust",children:"Benchmarking Rust"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://perf.wiki.kernel.org/index.php/Tutorial",children:"Perf"})," - If you're a Linux user you should consider using ",(0,r.jsx)(s.code,{children:"perf"}),". Based on a Linux kernel interface, ",(0,r.jsx)(s.code,{children:"perf"})," directly tracks different events like cache misses, cpu-cycles, and branches. Thus, ",(0,r.jsx)(s.code,{children:"perf"})," gives you a hardware-independent profile of your program's performance."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://doc.rust-lang.org/cargo/commands/cargo-bench.html",children:"cargo-bench"}),' - Official documentation on the "cargo bench" command. Note that the stable toolchain does not include a benchmarking crate by default, so you will need to add a crate to your project (see below).']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://bheisler.github.io/criterion.rs/book/index.html",children:"criterion.rs"})," - A Rust crate offering sophisticated benchmarking, based on Haskell's Criterion library. At the time of writing, this library seems poised to become the standard."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.youtube.com/watch?v=d2ZQ9-4ZJmQ",children:"Paul Mason - Benchmarking and Optimization of Rust Libraries"})," - Relevant talk from RustConf 2018."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"operating-systems",children:"Operating Systems"}),"\n",(0,r.jsx)(s.p,{children:"Remember that part about Rust being 'low level'?"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.redox-os.org/",children:"Redox"})," - Unix-like operating system rocking a custom libc and microkernel design."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://os.phil-opp.com/",children:"Writing an OS in Rust"})," - Great blog series with code snippets and explanations of common OS concepts."]}),"\n",(0,r.jsxs)(s.li,{children:["Relevant: ",(0,r.jsx)(s.a,{href:"https://rust-embedded.github.io/book/",children:"The Embedded Systems Book"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"text-parsers",children:"Text Parsers"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/Geal/nom",children:"nom"})," - High-performance text parsing crate with a bottom-up approach. (See also: ",(0,r.jsx)(s.a,{href:"https://stevedonovan.github.io/rust-gentle-intro/4-modules.html",children:"unofficial tutorial"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://pest.rs/",children:"pest"}),' - "the elegant parser" emphasizing accessibility. Similar in spirit to ',(0,r.jsx)(s.a,{href:"https://www.antlr.org/",children:"ANTLR"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/antlr/antlr4/issues/1839",children:"antlr4-backend: coming soon???"})," - The king of all parser-generators might have a Rust target soon. Stay posted."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"other-neat-crates",children:"Other Neat Crates"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://rust-random.github.io/book/",children:"rand"})," - Rust's standard library does not include any random number generators. ",(0,r.jsx)(s.code,{children:"rand"})," is the ",(0,r.jsx)(s.em,{children:"de facto"})," standard for RNGs."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/clap-rs/clap",children:"clap"})," - Extremely versatile command-line argument parser."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://serde.rs/",children:"serde"})," - Efficient serialization framework for Rust."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://github.com/BurntSushi/ripgrep",children:"ripgrep"}),' - Took the title for "fastest grep" from the long-reigning champion GNU grep.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://rust-bio.github.io/",children:"rust-bio"})," - library of common bioinformatic alogrithms and data structures"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.rs/flate2/",children:"flate2"})," - library for compression / decompression (gzip and zlib formats)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tokio.rs/",children:"tokio"})," - reliable, high-performance asynchronous runtime for Rust"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.rs/futures/",children:"futures"})," - zero-cost asynchronous Rust"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"are-we-___-yet",children:'"Are we ___ yet?"'}),"\n",(0,r.jsx)(s.p,{children:"Rust has a small standard library, but a big community that grows every day.\nThese pages track Rust's development in different domains of interest."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://areweasyncyet.rs/",children:"Are we async yet?"})," - Stablized syntax, robust ecosystem, more features coming every day (Feb 2020)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.arewewebyet.org/",children:"Are we web yet?"})," - Can we build a backend in Rust? (Spoiler: yes.)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://arewegameyet.com/",children:"Are we game yet?"})," - Libraries relevant to game developers."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://areweguiyet.com/",children:"Are we GUI yet?"})," - Cross platform GUIs in Rust are still in development."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://www.arewelearningyet.com/",children:"Are we learning yet?"})," - Current state of machine learning in Rust."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var r=t(6540);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);