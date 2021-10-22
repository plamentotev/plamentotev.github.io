# Using `git interpret-trailers` to parse keywords in commit message

While playing around with Git hooks I found one not very popular, but useful, command - `interpret-trailers`.
Turns out keywords and metadata added (usually) at the end of the commit message are called `trailers`. <!--more-->
For example in

```
Commit title

Commit body

JIRA:  PRJ-1234
Signed-off-by:  Alice <alice@example.com>
```

and

```
Commit title

Commit body

Fixes #2
```

`JIRA: PRJ-1234`, `Signed-off-by:  Alice <alice@example.com>` and `Fixes #2` are all trailers.
Key-value pairs separated with empty line from the free-form commit message.
`interpret-trailers` can read, add or replace the trailers from given commit message.
It is quite useful for Git hooks or in automation such as GitHub Actions.
I've used it to create [simple commit hook](https://gist.github.com/plamentotev/87ce0110bb7b438d91d27e6c5e0b006c) that adds `JIRA: NA` to commit message if no JIRA is referenced.

The [official documentation](https://git-scm.com/docs/git-interpret-trailers) gives more details and several nice examples that show different usages of the command.
