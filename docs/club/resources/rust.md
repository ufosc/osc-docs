---
title: Rust Guide
description: Club Archive Resources Rust Guide
sidebar_position: 5
---

[Rust](https://www.rust-lang.org/) is a systems level programming language with an emphasis on performance, reliability, productivity, and readability.
It has the low level performance of C or C++ without the danger of pointer problems.
It is able to do this, because it's compiler ensures any potential errors aren't added (you can think of it as having a garbage collector at the compile stage).

Rust can be used for server side software, embedded devices, websites (via WebAssembly), and much more as the community continues to grow.
The [official documentation](https://doc.rust-lang.org/book/) (a.k.a. *The Book*) does an excellent job at introducing someone familiar with programming to Rust.

<iframe width="500" height="300" src="https://www.youtube.com/embed/5C_HPTJg5ek" title="Rust in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Getting Started
Rust is known for having a steep learning curve.
As with any programming language, the best way to learn Rust is by doing a Rust.
Following along with *The Book* and attempt each exercise.
If you can make it to Chapter 12, you should be well on your way to learning Rust.
Attempt to make simple applications in Rust, like the Unix `head` utility.

If you have issues, feel free to ask other members.
(We love any chance to talk about Rust.)
Above all else, remember that the Rust compiler is the best kind of friend;
when other compilers would turn a blind eye and let you hurt yourself, `rustc` will jump in and say, "Woah buddy! Have you thought this through?"
Friends like `rustc` can be annoying at times, but they're the friends you want to be with.

Beyond *The Book*, there are a number of great Rust resources for developers of all skill levels.
See [Resources](#resources) below.

### Note on Installation
We recommend that you install the Rust toolchain via [rustup](https://www.rust-lang.org/tools/install).
While many Linux distributions offer Rust packages, these pacakges can often be outdated.
Installing `rustup` circumvents this problem entirely.

## Resources
- [Official Website](https://www.rust-lang.org/)
- [Official Documentation (*The Book*)](https://doc.rust-lang.org/book/) - We can't mention this one enough. Go-to resource for Rustaceans of all skill levels.
- [Setting up your editor](https://www.rust-lang.org/tools)
- [Official Cargo Documentation](https://doc.rust-lang.org/cargo/) - Rust has a mature package manager / build system that combines the best of `npm` and `make`. Once you use `cargo`, you'll never look at project management the same way.
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - Similar to *The Book*, but with less talk and more code.
- [Learn Rust with Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/) - A great (and humorous) introduction to Rust's memory management scheme. Highly recommended for anyone who knows the basics of Rust, but hasn't gotten a handle on lifetimes and the ownership model.
- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html) - "How do I do ___ in Rust?" (also shows off a number of community standard crates)

### Good Rust Talks
- [Rust: A Language for the Next 40 Years](https://www.youtube.com/watch?v=A3AdN7U24iU) - Explanation of the Rust's safety guarantees and the goals of the Rust project.
- [Procedural Macros](https://www.youtube.com/watch?v=g4SYTOc8fL0) - Good introduction to procedural macros.
- [Zero Cost Async IO](https://youtu.be/skos4B5x7qE) - Review on the current state of asynchronous Rust in 2019. (See also: tokio)
- [I Convinced the World's Largest Package Manager to Use Rust, and So Can You](https://www.youtube.com/watch?v=GCsxYAxw3JQ) - how npm began using Rust

### Game Libraries
- [piston](https://www.piston.rs/) - Most popular Rust library for game development.
- [amethyst](https://book.amethyst.rs/stable/) - The second most popular Rust library.
- Bonus: [Rust at Chucklefish](https://github.com/rust-lang/prev.rust-lang.org/blob/master/pdfs/Rust-Chucklefish-Whitepaper.pdf) - Developers of *Starbound* and *Stardew Valley* published this whitepaper, explaining why they chose to develop their next title with Rust. Well, a former developer later stated that they moved from Rust back to their C++ engine, since, "it just didn't make much sense for a small company to be developing two engines in parallel, instead of re-using existing code and knowledge." Understandable.

See also: "Are we ___ yet? section below.

### WebAssembly
`rustc` is based on LLVM, meaning that it can generate WebAssembly (WASM) code with relative ease.
Add in the `wasm-bindgen` crate, and you have all the safety of Rust, with the speed of WASM, and the convenience of JavaScript.

- [Tensor Programming - Intro to Rust Web Asssembly](https://rustwasm.github.io/docs/wasm-bindgen/) - Great YouTube tutorial explaining how to compile Rust to WASM from start to finish.
- [wasm-bindgen Documentation](https://rustwasm.github.io/docs/wasm-bindgen/introduction.html) - Official documentation for the wasm-bindgen crate. Includes instructions for compiling Rust to WASM, and instructions for calling JavaScript functions from Rust using `web-sys`.
- [WebAssembly with Rust](https://youtu.be/YDQICTKlr9g) - Excellent talk from Kevin Hoffman, who [literally wrote the book on Rust+WASM](https://pragprog.com/book/khrust/programming-webassembly-with-rust). Explains many WASM fundamentals well.
- [Yew](https://yew.rs/docs/) - A Rust framework for front-end web development inspired by Elm.

### Graphics
- [gfx-hal](https://rust-tutorials.github.io/learn-gfx-hal/) - An ambitious, low-level Rust library that based in part on Vulkan. Not for the faint of heart.
- [Review of Rust Graphics Libraries (2019)](https://wiki.alopex.li/AGuideToRustGraphicsLibraries2019) - Review of graphics libraries in Rust.

See also: the "Are we ___ yet?" section below.

### Benchmarking Rust
- [Perf](https://perf.wiki.kernel.org/index.php/Tutorial) - If you're a Linux user you should consider using `perf`. Based on a Linux kernel interface, `perf` directly tracks different events like cache misses, cpu-cycles, and branches. Thus, `perf` gives you a hardware-independent profile of your program's performance.
- [cargo-bench](https://doc.rust-lang.org/cargo/commands/cargo-bench.html) - Official documentation on the "cargo bench" command. Note that the stable toolchain does not include a benchmarking crate by default, so you will need to add a crate to your project (see below).
- [criterion.rs](https://bheisler.github.io/criterion.rs/book/index.html) - A Rust crate offering sophisticated benchmarking, based on Haskell's Criterion library. At the time of writing, this library seems poised to become the standard.
- [Paul Mason - Benchmarking and Optimization of Rust Libraries](https://www.youtube.com/watch?v=d2ZQ9-4ZJmQ) - Relevant talk from RustConf 2018.

### Operating Systems
Remember that part about Rust being 'low level'?
- [Redox](https://www.redox-os.org/) - Unix-like operating system rocking a custom libc and microkernel design.
- [Writing an OS in Rust](https://os.phil-opp.com/) - Great blog series with code snippets and explanations of common OS concepts.
- Relevant: [The Embedded Systems Book](https://rust-embedded.github.io/book/)

### Text Parsers
- [nom](https://github.com/Geal/nom) - High-performance text parsing crate with a bottom-up approach. (See also: [unofficial tutorial](https://stevedonovan.github.io/rust-gentle-intro/4-modules.html))
- [pest](https://pest.rs/) - "the elegant parser" emphasizing accessibility. Similar in spirit to [ANTLR](https://www.antlr.org/).
- [antlr4-backend: coming soon???](https://github.com/antlr/antlr4/issues/1839) - The king of all parser-generators might have a Rust target soon. Stay posted.

### Other Neat Crates
- [rand](https://rust-random.github.io/book/) - Rust's standard library does not include any random number generators. `rand` is the *de facto* standard for RNGs.
- [clap](https://github.com/clap-rs/clap) - Extremely versatile command-line argument parser.
- [serde](https://serde.rs/) - Efficient serialization framework for Rust.
- [ripgrep](https://github.com/BurntSushi/ripgrep) - Took the title for "fastest grep" from the long-reigning champion GNU grep.
- [rust-bio](http://rust-bio.github.io/) - library of common bioinformatic alogrithms and data structures
- [flate2](https://docs.rs/flate2/) - library for compression / decompression (gzip and zlib formats)
- [tokio](https://tokio.rs/) - reliable, high-performance asynchronous runtime for Rust
- [futures](https://docs.rs/futures/) - zero-cost asynchronous Rust

### "Are we ___ yet?"
Rust has a small standard library, but a big community that grows every day.
These pages track Rust's development in different domains of interest.

- [Are we async yet?](https://areweasyncyet.rs/) - Stablized syntax, robust ecosystem, more features coming every day (Feb 2020).
- [Are we web yet?](https://www.arewewebyet.org/) - Can we build a backend in Rust? (Spoiler: yes.)
- [Are we game yet?](https://arewegameyet.com/) - Libraries relevant to game developers.
- [Are we GUI yet?](https://areweguiyet.com/) - Cross platform GUIs in Rust are still in development.
- [Are we learning yet?](http://www.arewelearningyet.com/) - Current state of machine learning in Rust.
