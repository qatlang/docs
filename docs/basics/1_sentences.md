---
title: Sentences
slug: /basics/sentences
sidebar_position: 1
---

A sentence in `qat` is the basic unit of instruction. It is equivalent to statements in other programming languages. By writing a sentence, you are asking the compiler to do something. All normal sentences in `qat` are terminated with the `.` (dot/period/fullstop) symbol. This is identical to termination of sentences in the English language. The following is a valid sentence in the language.

```qat
say "Hello, World!".
```

Here, `say` is a special word that means something specific to the compiler, and `"Hello, World!"` is a string literal - basically just text like what you are reading right now. Special words like `say` are what we call keywords in programming. Keywords are words that has a special meaning in the language. In this case, `say` is used to tell the compiler to output whatever comes after it to the console. So the above code outputs `Hello, World!` to the console. Notice the lack of `"` in the output. Enclosing the text with `"` is the way to tell the compiler that the contents inside the double quotes are the contents of the text.

We can write multiple sentences one after the other like:

```qat
say "Hello, World!".
say "My name is Aldrin".
```

Which outputs the following to the console:

```console
Hello, World!
My name is Aldrin
```

However, allowing to write sentences and run it as it is, makes the language clumsy and adds the concept of sequential ordering in places where there shouldn't be ordering like that. For this reason, you **CANNOT** run any of the code you saw above, as it is. Instead you have to put those inside a function to tell the compiler that you want the sentences to run in sequential order.

