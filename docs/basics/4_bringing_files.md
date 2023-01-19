---
title: Bringing other files
slug: /basics/bringing_files
sidebar_position: 4
---

When you created the file `first.qat`, and ran the `qat run first.qat` command, a module is created by the compiler and it is associated with the file. You can create another file called `second.qat` in the same directory/folder with the following contents.

```qat title="second.qat"
other() [
   say "Other function".
]
```

You just created another function, with the name `other`. But there is a catch. The function you created is only accessible within the file. The files `first.qat` and `second.qat` are represented as modules in the compiler. So when you create a function in the file, the function by default is private to the file module. So what can you do to make the function public to other files? Simple. Just add the `pub` keyword before the name of the function.

```qat title="second.qat"
pub other() [
	say "Other function".
]
```

The keyword `pub` means "public" in this case, and in general it means "public to". By adding `pub`, you made the `other` function public outside its parent module (the file).

Now in the first file, add the line `bring "./second.qat".` to the top of the file, like this.

```qat title="first.qat"
bring "./second.qat".

main() [
   say "Hello, World!".
]
```

You just brought (added as an import) the `second.qat` file into the `first.qat` file. `bring` is the equivalent of `import`/`include` in other languages.

Now, we should call the `other` function in `second.qat` file. To do this, add `other().` as the last line of the main function, like this.

```qat title="first.qat"
bring "./second.qat".

main() [
   say "Hello, World!".
   other().
]
```

Now run,

```
qat run first.qat
```

You should see the following output on the screen:

```
Hello, World!
Other function
```

