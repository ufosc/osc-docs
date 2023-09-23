---
title: Python Guide
description: Club Archive Resources Python Guide
sidebar_position: 6
---

## Introduction
Python is a powerful language, despite its reputation for being amateurish and slow.
True, Python stresses readability and ease of use, making it an excellent choice for beginners.
Yet, Python's large standard library and [even larger package index](https://pypi.org/) make it a good choice for developers from all sorts of backgrounds.
Pick your paradigm--functional, procedural, or object-oriented--Python supports them all with its own Pythonic flair.
And while Python may be knocked for being an _interpreted_ language, the Python interpreter is the dynamo behind Python's dynamic features.
Entire classes, functions, can be constructed at runtime by even a novice programmer.

<iframe width="500" height="300" src="https://www.youtube.com/embed/x7X9w_GIm1s" title="Python in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Python 2 vs. Python 3

Python 2 will no longer be supported in 2020, and should be avoided.

## Style

Style is important!
Poor style can destroy the beauty of your Python program and hamper collaboration.

PEP 8 provides the definitive guide to Python style: https://www.python.org/dev/peps/pep-0008/

We highly recommend that you check out the [Little Book of Python Anti-Patterns](https://docs.quantifiedcode.com/python-anti-patterns/index.html).
(It's a quick read.)
Many people--including experts--make these mistakes.
By learning about these anti-patterns, not only will you make fewer mistakes, but you'll also learn about nifty shortcuts in Python.

## Resources

Python is extremely well documented.
Make a habit of reading the documentation, and you will be able to quickly solve most of your challenges.
(Checking documentation is not "cheating"! Good programmers care about ideas, not syntax.)

[Official Documentation here.](https://docs.python.org/3/)

### "I'm a Complete Beginner"

Thank you for making it this far, and welcome to the fabulous world of Computer Science!
As I said above, Python is a great place to start.
The best way to learn programming is to practice.
I personally learned many moons ago from Codecademy.com, though this teaches Python 2 instead of Python 3.
I have heard very good things about https://learnpython.org
Wherever you choose, get in there and start tinkering.


### "I know Java/C++, but not Python."

Here's a few quick tips:
- **Whitespace matters**. No ugly braces for if statements or loops.
- Python uses dynamic typing, meaning identifiers are not bound to a specific type.
- Functions do not have a return type (see previous).
- Built-in types include Strings, Lists (think ArrayList or std::vector), Dictionaries (think HashMap).
Virtually eveything in python is composed of these types (plus primatives).

Because Python is so **readable**, you can learn a lot simply by reading it.
Refer to [the official tutorial](https://docs.python.org/3/tutorial/index.html) as needed.
I don't recommend going through each section entirely, just pick at is as you see fit.

The following sections are especially relevant:
  * [3. An Informal Introduction to Python](https://docs.python.org/3/tutorial/introduction.html)
  * [5. Data Structures](https://docs.python.org/3/tutorial/datastructures.html)

Once you feel like you have a grasp on built-in functions and built-in types, you should start making classes:
  * [9. Classes](https://docs.python.org/3/tutorial/classes.html)

### "Okay, I can make a class in Python, but I want to become the very best."

First, watch this: [James Powell - So you want to be a Python expert?](https://youtu.be/cKPlPJyQrt4)
I  watched this video probably 2 or 3 times, and it really opened my eyes to a higher level of Python--the data model.

Remember how `__init__()` methods look so weird?
Learn the true power of double underscore ("dunder") methods here: https://docs.python.org/3.7/reference/datamodel.html
