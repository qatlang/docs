---
title: Integers
slug: /types/signed_and_unsigned_integers
sidebar_position: 1
---

Integers are numbers without the fractional part like `1`, `-3534`,`75783`, `2340`, `-10`... Signed Integers can represent all whole numbers, and their negative equivalent. Unsigned Integer can represent all whole numbers. When I say all whole numbers, obviously, only all numbers that falls within the upper & lower bound of that integer type.

`i1`, `i8`, `i16`, `i32` and `i64` are signed integers & `u1`, `u8`, `u16`, `u32` and `u64` are unsigned integers.

The bitwidth of the integer is appended to the letter `i` to get a signed integer, and the bitwidth is appended to the letter `u` to get an unsigned integer

#### Why so many bitwidths?

Many high-level languages offer a single integer datatype for most use cases (very commonly named as `int`, `Int`, `int32` or `int64`), and a specialised big-integer datatype for advanced use cases and calculations. `qat` is a systems language, so the programmer has access to integers of multiple bitwidths. This helps in making sure that the programmer can express logic that is aware of the advantages and disadvantages of the platform. Usually to achieve the maximum performance, the integer size is often the same as the register size. But register size is not the same between platforms & architectures. 32-bit & 64-bit integers are very commonly used to suit most popular platforms. So if you don't have a specialised use or if you are a beginner, these types (`i64`, `i32`, `u64`, `u32`) can be used without doubt.

:::tip
If you are a beginner, the standard bitwidth integers should be enough for most use cases. But if you want other bitwidths, `qat` has a very convenient system for those, and is present in the [**Advanced Types**](/types/custom_bitwidth_integers) section.
:::

