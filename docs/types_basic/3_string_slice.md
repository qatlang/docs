---
title: String Slice
slug: /types_basic/string_slice
sidebar_position: 3
---

`str` is the representation of a string slice type in the language. When you did your first function previously, you might have noticed the contents after the `say` keyword. `"Hello, World!"` is a string literal, that is, the type of that data in the language is `str`. A string literal is the simplest & compact way to represent text in the language without sacrificing any information about the data.

- Length of the slice is stored alongside the data
- Internal null values (`\0`) are supported
- This text representation is encoding agnostic. It uses an unsigned 8-bit integer array to represent the text data. This makes it convenient to consider each byte (8 bits) as an individual character, which is a common approach in C and C++, but this system is open to interpretation.
- Easily compatible with C-style strings as you can obtain the underlying buffer that points to the integer data

#### Safer than C-style strings

While it is necessary for a language to have support for C-style strings, to integrate FFI or to call C functions, it doesn't make sense to have that as the default behaviour for a new systems language, especially because C-style strings loses information about the length of the buffer. Not in all cases though, it can be retrieved later in most cases. That is, as long as the original string doesn't contain the null character `\0` in the middle. C-style strings expect the null character at the end, so you can iterate over the buffer to find the length programmatically. However this system can easily be fooled by creating an array without a trailing null.

#### Underlying LLVM Type

```llvm
type str = { i8*, i64 }
```

The `str` type is represented using a struct with 2 fields. The first is a pointer to the first element of the data array. The second is an integer that represents the length of the string. The first field can be null if the length of the string is zero. There is no distinction between signed and unsigned integer types in the LLVM IR, so the second field is interpreted as an unsigned integer.

