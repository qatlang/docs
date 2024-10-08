---
title: Floating Point Numbers
slug: /types/floating_point_numbers
sidebar_position: 4
---

- `f16`, `f32`, `f64`, `f80`, `f128`, `f128ppc` and `fbrain` are the all floating point types supported in the language.

If you are a beginner, or if you are unsure which type to use, it is recommended to use `f32` as that should be more than enough. If you want more precision, then use `f64` (which is also known as `double` in other languages - as it offers double the precision of `f32`).

### Float Literals

These are numbers with a fractional part. `0.534`, `-7.34`, `46317.875`, `-8348.3`... are all float literals. By default, these values are of type `f32`. If you want the literal values to have a different type instead, suffix the desired type at the end of the value, like this: `0.06_f64`

### Why this many kinds of floating point numbers?

Well, LLVM supports these floating point datatypes by default, so these are exposed in the language too, to make it convenient for niche users. However, most users are going to be fine with the `f32` and `f64` types.

Unlike integer types, there is more to the different kinds of floating point types than the bitwidth. Different kinds offer different levels of precision and dynamic range, and can yield different results in calculations.

|  **Type** | **Description**                                                                                                                                                                                                                                                              |
| --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `f16` | 16-bit floating point                                                                                                                                                                                                                                                        |
|  `fbrain` | 16-bit “brain” floating-point value (7-bit significand). Provides the same number of exponent bits as float, so that it matches its dynamic range, but with greatly reduced precision. Used in Intel’s AVX-512 BF16 extensions and Arm’s ARMv8.6-A extensions, among others. |
|     `f32` | 32-bit floating point                                                                                                                                                                                                                                                        |
|     `f64` | 64-bit floating point                                                                                                                                                                                                                                                        |
|    `f128` | 128-bit floating point value with 113-bit significand                                                                                                                                                                                                                        |
|     `f80` | 80-bit floating point (X87)                                                                                                                                                                                                                                                  |
| `f128ppc` | 128-bit PowerPC floating point (two 64 bits)                                                                                                                                                                                                                                 |

