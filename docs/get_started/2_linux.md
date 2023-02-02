---
title: Linux
slug: /get_started/linux_installation
sidebar_position: 2
---

import Tabs from '@theme/Tabs'

The general idea is to update the PATH variable of the system to include the parent directory of the compiler executable. Let's assume that the path to the directory that contains the compiler is in the path `/path/to/qat/compiler`. Please don't use the same path in your installation. Change this to the actual path where the qat compiler is present in your system.

<Tabs>
<TabItem value="beginner" label="Beginner" default>

The following screenshots are taken in Ubuntu 20.04 LTS. The steps to follow should be very similar between popular linux distros.

Open the file explorer app and go to the `Home` directory
![File Explorer](/img/installation_beginner/1.png)
Click on the hamburger icon, or open the equivalent options menu
![File Explorer Hidden File Menu](/img/installation_beginner/2.png)
Make sure that the option that says **Show Hidden Files** or equivalent is **enabled**. This is important, because otherwise the relevant file will not be visible.

Scroll down and see if you can find the file named `.bashrc`.
![File Explorer bashrc file select](/img/installation_beginner/3.png)
Select the file, right click and open it in a text editor.
![File Explorer bashrc file open dialog](/img/installation_beginner/4.png)
You should see the default text editor for your operating system open up, with the `.bashrc` file.
![Bashrc opened in text editor](/img/installation_beginner/5.png)
If the file is empty, don't worry. If it is not empty, scroll down to the end of the file and see if you can find the word `export`.
![Bashrc export line](/img/installation_beginner/6.png)
If you can't find the word `export`, just do the following things at the very end of the file, to be safe.

Add the line `export PATH="$PATH:/path/to/qat/compiler"`. Don't forget to replace the path used here, with the actual path to the compiler in your case.
![Bashrc path line](/img/installation_beginner/7.png)
Save the file, and you are free to close it. Now please **RESTART** your system to make sure that the path variable is properly updated. Temporarily, you can get by without restarting, but you will have to make the terminal session source the path when you want to use the compiler. Having the path sourced doesn't make it available in another session. So to be sure, restart your computer and the path will be recognised properly.

</TabItem>
<TabItem value="experienced" label="Experienced">

- Open the `.bashrc` file or the equivalent in an editor of your choice
- Look for the last line that starts with the word `export`. This is usually near the very end of the file.
- Below that, add the following line, after changing that part that says `/path/to/qat/compiler` to the actual path to the directory containing the compiler
  ```
  EXPORT PATH="$PATH:/path/to/qat/compiler"
  ```
  Save and close the file.
- Source the updates to path using the command `source ~/.bashrc`. This only works for the current terminal session. If you want the path to be updated for all new sessions, please restart your computer.

</TabItem>
</Tabs>

#### Check the updates to PATH

Now to check if the path is properly updated, run this command in a terminal: `which qat`. If it was successful, you should see `/path/to/qat/compiler` (Or the path you used). Otherwise you will get no output, meaning that the updation of path failed.

