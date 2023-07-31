---
title: Rendering Pages
description: Club Website Rendering Pages
sidebar_position: 3
---

# Rendering Pages

The OSC website uses EJS to dynamically render HTML pages. EJS stands for "embedded JavaScript templates," and allows developers to write HTML with JavaScript code that gets executed prior to the user's request. It is simillar to PHP in the sense that the server will process the file, replace each EJS JavaScript template with HTML, and ultimately return an HTML page.

For documentation on EJS, see [EJS](https://ejs.co/).

## EJS Basics

EJS files accept standard HTML, with the exception of certain tags which will accept server-side JavaScript. For example:

```html title="myEJSTemplate.ejs"
<h1> My H1 HTML Title </h1>

<!-- This will be replaced by a single value. -->
<%= myVariable %>

<!-- This will be replaced by the outcome of the executed code -->
<% if (myVariable2) { %>
  <h2><%= myVariable3 %></h2>
<% } %>
```

The template may then be renderred by the following JavaScript code:
```js
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	return res.render('myEJSTemplate', {
		myVariable: "value 1",
		myVariable2: "value 2",
		myVariable3: "value 3"
	})
})
```

## Website Views & Components

The OSC website organizes EJS templates into two categories: views (which are usually entire pages/sites) and components (standalone HTML templates used alongside views). All of the source code's views are stored in [/views](https://github.com/ufosc/Club_Website_2/tree/main/views), and all components in [/views/components](https://github.com/ufosc/Club_Website_2/tree/main/views/components).

An example of a reusable component is the navigation bar:
```html title="views/components/navbar.ejs"
<div id="navigation-bar-parent">
    <ul id="navigation-bar">
        <li class="navbar-item" id="navbar-title">
            <a href="/">UF OSC</a>
        </li>
        <div class="menu">
            <hr />
            <li class="navbar-item">
                <a href="/">ABOUT</a>
            </li>
            <li class="navbar-item">
                <a href="/#portfolio">PORTFOLIO</a>
            </li>
            <li class="navbar-item">
                <a href="/blog">BLOG</a>
            </li>
            <li class="navbar-item">
                <a href="/#contact">CONTACT</a>
            </li>
            <li id="navbar-member-item">
                <a href="/#join">BECOME<br /> A MEMBER</a>
            </li>
            <hr />
        </div>
        <button class="menu-btn">
            <img src="/assets/hb-menu.png" alt="menu">
        </button>
    </ul>
</div>
```

The navbar does not take in any EJS parameters, but it can be imported by other views. For example:

```html
<!DOCTYPE html>
<html lang="en">

	<!-- The navbar will be loaded and placed here. -->
	<%- include('./components/navbar.ejs') %>

	<h1> My other content... </h2>

</html>
```
