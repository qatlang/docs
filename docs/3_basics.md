---
title: Basics
slug: /basics
sidebar_position: 3
---

## Language details

The extension of source code files of the language is `.qat` - while technically the extension of a file does not guarantee the legitimacy of the contents or accurate intention of the file, it is **highly recommended** to use the same extension for all qat language files.

## Your first function

Create a file called `main.qat`. You are free to change the name of the file to anything else, but just make sure that you use the same name when you run commands. Inside the file, write the following snippet of code.

```qat
main() [
    say "Hello, World!".
]
```

Now, in the terminal, make sure that your current path is the parent directory of the above file and run the following command

```
qat run main.qat
```

You should see the output `Hello, World!`. Congrats, you just completed your first function
