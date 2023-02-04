---
title: Floating Point Numbers
slug: /types_basic/floating_point_numbers
sidebar_position: 4
---

- `f32`, `f64`, `f80`, `f128`, `f128ppc`, `fhalf` and `fbrain` are the all floating point types

- Unlike, integer types, appending the bitwidth to `f` does not give a floating point number with that bitwidth

#### Why this many kinds of floating point numbers?

Well, LLVM supports these floating point datatypes by default, so these are exposed in the language too, to make it convenient for niche users. However, most users are going to be fine with the `f32` and `f64` types.

Unlike integer types, there is more to the different kinds of floating point types than the bitwidth. Different kinds offer different levels of precision and dynamic range, and can yield different results in calculations.

|  **Type** | **Description**                                                                                                                                                                                                                                                              |
| --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `fhalf` | 16-bit floating point                                                                                                                                                                                                                                                        |
|  `fbrain` | 16-bit “brain” floating-point value (7-bit significand). Provides the same number of exponent bits as float, so that it matches its dynamic range, but with greatly reduced precision. Used in Intel’s AVX-512 BF16 extensions and Arm’s ARMv8.6-A extensions, among others. |
|     `f32` | 32-bit floating point                                                                                                                                                                                                                                                        |
|     `f64` | 64-bit floating point                                                                                                                                                                                                                                                        |
|    `f128` | 128-bit floating point value with 113-bit significand                                                                                                                                                                                                                        |
|     `f80` | 80-bit floating point (X87)                                                                                                                                                                                                                                                  |
| `f128ppc` | 128-bit PowerPC floating point (two 64 bits)                                                                                                                                                                                                                                 |

