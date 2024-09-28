---
title: Functions
slug: /basics/functions
sidebar_position: 2
---

### What is a function?

Ultimately, it is a sequentially ordered list of instructions to the compiler. You are asking the compiler to do things one after the other. But functions also makes your programming journey so much easier. A function can be called wherever you want, how many times you want, without making multiple copies of the sentences inside it. You can also make a function receive arguments and give a resultant value. For example, if you want to calculate the square of a number, you can write a function that calculates the value and gives it back.

The following is the syntax of the most basic function in `qat`. Let's name the function `hello`

```qat
hello() [

]
```

What does this function do? Absolutely nothing! That is because we haven't added any sentences inside the function body. `()` means that the function `hello` accepts no arguments. The function body is the area that is enclosed by `[` and `]`. In general, a group of sentences in `qat` is always enclosed within `[` and `]`. Such an enclosure of sentences is called a block.

:::info
The choice of `[` and `]` to represent a block of sentences/statements in the language might seem to be weird for people coming from other popular languages where `{` and `}` are used, or where there are enclosing for statements. The reasoning I had while choosing these was that `[` and `]` are used to represent lists or arrays in popular languages. A block is essentially a list of sentences. And I felt that these were visually simpler for functions.
:::

### The `main` function

How do you write a simple program in qat? Simple, you write a `main` function. A program or an executable written in the language is required to have one and only one main function. Just a function named `main`. The reason for this is that it is a commonly followed convention in many programming languages. The `main` function is the entrypoint of the program. That is, flow of execution starts with this function in your program. This function also helps in providing a status of the program at the end of its execution, by giving a value back to the operating system. Here is the simplest form of the main function:

```qat
pub main -> int
() [
	give 0.
]
```

What does the above code mean?

- `pub` is used to indicate that the function is public. Meaning that it can be accessed from anywhere. The `main` function is always required to be public. This might feel redundant since main function has special meaning in the language. But it is there to indicate that the function is going to be called by the language/operating system.
- The `-> int` after `main` means that the function gives a value of type `int` at the end of its execution. The `main` function is always required to give a resultant value of type `int`. Here `int` is a signed integer type - that is, it is used to represent a positive or negative number without any decimals. We will talk more about `int` later. _Why does main function need to give a value?_ Simple, the value given by the main function is used by the operating system to recognise the status of the program/execution. It is useful for the operating system and can also have specific meaning depending on the platform.
- `give` is a keyword in the language. It is used to indicate a sentence that provides a resultant value for the function it is in.
- The value `0` is universally recognised as a successful status for the program. Giving `0` in the main function is the programmer's way of telling the operating system that the program completed successfully.
- If you don't know what status to give in the main function, just use `0`. It is not required to follow the convention of the status of the program. However, it is recommended to do so, if you are trying to integrate your program with the rest of the operating system, toolchain or ecosystem. Some popular programs/tools expect programs to give a status according to the conventions of the platform.

You can clean up the above code a little bit and get the following:

```qat
pub main -> int [
	give 0.
]
```

Why is it possible to remove the `()`? The `()` means that the function receives no arguments. Well, qat allows you to skip it since you have provided a given type for the function. While parsing, there are two ways for qat to know that something is a function. First is the format `functionName()` which means that the function does not accept any arguments and does not have any given value. Second is the format `functionName -> int` which means that it has a given value. In both these cases, qat recognises this entity as a function. So if you already provided a given type, and the function accepts no arguments, then `()` is not necessary.

### Your first function

Remember the `say` sentence mentioned previously? Let's use that in our main function.

```qat
pub main -> int [
	say "Hello, World!".
	give 0.
]
```

Save the code in a file. Let's say that the file is named `main.qat`. Make sure that you have followed all the installation instructions. Now open the terminal and run the command `qat run main.qat`

You should see the following output in the terminal:

```
Hello, World!
```

You can change `"Hello, World!"` to any other message and run the code again using the command to see your message being output to the terminal.

:::info
Even though the `main` function is universally recognised as the starting point of a program in most languages (at least static or conventional languages), the actual entrypoint is dependent on the operating system or the implementation or toolchain of the programming language. For example, before the logic of the main function is executed, global variables in the program might have to be initialised or constructed in some languages. When you compile C using gcc on linux, `_start` is actually the entrypoint, which calls main within itself. Basically, you can say that `main` is the entrypoint of the language or of the logic of the program.
:::
