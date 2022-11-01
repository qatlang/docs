---
slug: /installation
title: Getting Started
sidebar_position: 2
---

## Installing the compiler

https://qat.dev/downloads lists all the versions available for the compiler. It is recommended that you pick the latest version so as to get the latest features and to avoid bugs/problems.

Make sure that the folder/directory that contains the executable of the compiler is added to the PATH variable of your system. This makes it possible for you to invoke the compiler by using the `qat` command without specifying the full path to the executable. If you face issues that seems to unsolveable on your end, please open an issue [here](https://github.com/qatlang/docs/issues/new/choose) to seek help

### Linux

The general idea is to update the PATH variable of the system to include the parent directory of the compiler executable. The following instructions are provided if you have bash in your system

If you are using bash as your terminal, edit the `.bashrc` file present in the user directory. If the file does not exist, create the file by running the command `touch ~/.bashrc`, then open the file. You can run any one of the following commands to open your preferred text editor via the terminal, or just open any text editor and open the file:

```
gedit ~/.bashrc
vim ~/.bashrc
nvim ~/.bashrc
nano ~/.bashrc
```

Now, scroll down and check if you see any line starting with the word `EXPORT`. If you do, find the last one of such lines and add the following line after it, while changing the contents after the `$PATH:` with the path of your installation of the compiler. That is, the path to the parent directory of the compiler executable.

```
EXPORT PATH="$PATH:/path/to/qat/directory"
```

Now save the file being edited and run the following command

```
source ~/.bashrc
```

In some systems, you might have to restart in order for the path to be updated properly. So if you don't want to lose your sanity over an installation, restart the system just to be sure. After that, to make sure that the compiler is available on the PATH variable, run the following command

```
qat version
```

If you see an output similar to `qat v0.5.0`, then the installation is successful. Otherwise, it might not be completed properly, especially if you see an error message similar to `qat: command not found`. If you need further help, please file an issue [here](https://github.com/qatlang/docs/issues/new/choose)

### Windows

Add the path to the `PATH` system environment variable

## Tools

At the moment, the language only has minimal IDE integration support. If you are using VSCode
as your IDE, congrats, there is an official extension for the language available
[here](https://marketplace.visualstudio.com/items?itemName=aldrinsartfactory.qat)
which has code highlighting, and analysis support (errors & warnings)

