---
title: Your first function
slug: /basics/your_first_function
sidebar_position: 3
---

Create a file called `first.qat`. You are free to change the name of the file to anything else, but just make sure that you use the same name when you run commands. Inside the file, write the following snippet of code.

```qat title="first.qat"
main() [
    say "Hello, World!".
]
```

You created a function called **main**. **main** is a special function, which is used by the language as the entry point. Basically, If you have a **main** function, the program starts execution with that function.

Now, in the terminal, make sure that your current path is the parent directory of the above file and run the following command

```
qat run first.qat
```

You should see the output `Hello, World!`. Congrats, you just completed your first function
