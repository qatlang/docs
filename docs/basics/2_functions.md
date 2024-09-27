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

