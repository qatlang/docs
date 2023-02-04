---
title: Custom Bitwidth Integers
slug: /types_advanced/custom_bitwidth_integers
sidebar_position: 1
---

The integer types you saw [previously](/types_basic/signed_and_unsigned_integers) are not the only integer types in the language. `qat` supports arbitrary bitwidth integers. Meaning that, if you append some random number you want to the letter `i`, like `i68`, that is a valid integer in the language. Similarly, `u68` is also a valid integer. Therefore, identifiers (names of functions, variables, modules) in the language are not allowed to follow this naming pattern.

### Bringing custom integer types to module

However, allowing arbitrary bitwidths freely can cause a lot of typos and problems in codebases. So, if you must use arbitrary bitwidth integers (which is not recommended in normal circumstances), you have to `bring` the bitwidth to the current module.

```qat
bring i68, u68, u256.
```

You just added `i68`, `u68` and `u256` as valid integer types to the current module. Now you can freely use these integer bitwidths inside the current module (only that module), without having any errors or issues. You have to do this in every module you want to use the custom integer type in. That way, the modules that use these integer types are explicitly and easily understood.

