---
title: Installation on Linux
slug: /get_started/linux_installation
sidebar_position: 1
---

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

