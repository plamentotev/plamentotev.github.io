---
hide_table_of_contents: true
image: /images/og/2022-04-26-delete-ds_store-files.png
---
# How to delete all `.DS_Store` files

If you have ever received zip file created on MacOS, then you know all those annoying `.DS_Store` files popping up all over the place. The good news is that you can delete all  `.DS_Store` files recursively with a simple one liner. <!--truncate-->

```bash
find -name '.DS_Store' -type f -delete
```

## How it works

[find](https://man7.org/linux/man-pages/man1/find.1.html) iterates recursively over a directory tree. By default it start from the current directory. The rest of the command line is the expression. It is composed of different things. `-name` and `-type` are tests. Tests are used to match files. In this case all files (`-type f`, `f` is for file) named `.DS_Store` (`-name '.DS_Store'`). Actions are used to do something with the matched files. `-delete` is action that, as the name suggests, deletes the matched files. Keep in mind that the expression is evaluated from left to right, so if you put `-delete` first it will delete all files and directories.
