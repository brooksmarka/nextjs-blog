---
title: 'Vscodes merge editor is confusing.  Here is how I work around it.'
date: '2026-01-13'
topics: 'Rebase'
---

### How I use vscode's merge editor and some words on rebase

Your organization probably has some guidelines how they want their code added to the main branch. Of those options git rebase has been my favorite as it gives the developer the most flexibility and is a great tool to understand. When I was a junior developer I ran into the perfect storm of a huge feature with over 20 commits which I was told I needed to rebase onto the main branch. This feature took weeks and during that time other developers had merged their changes in using merge commits and the overall status of the repo was very unclean. When rebasing I used no other tool other than the command line to approach this and didn't understand why I was seeing the same changes over and over again as I interactively ran through each commit I had made. This approach would have been avoided if I had constantly rebased as my changes occurred and now we have some pretty nice visualizations which show what exactly is going on with your history and how to approach rebasing. So lets jump into it.

### What is rebase

Rebasing is a git technique which allows your git commits to be placed 'on top of' the existing commit stack even if those commits occurred previously to the commits in the stack. To break it down further lets say Jennifer a front end developer is working on a feature and you are too. You and Jennifer are working for a few days, each with your own commits. She commits her work to main after a PR review. When you go to commit your work we see that the commits will be intersperced with yours since you both committed on Tuesday and Wednesday of that week. This can be difficult to see which commits belong to one feature or the other.

Enter rebase. Rebase allows you to rewrite history in such a way as to put your commits all in the same spot at the top of the commit history. This allows others in the code base to see a clean history of what occurred without getting confused with other features in the git stack. This aproach means you need to walk every commit through each other commit on main. This can be easily done when there are no git conflicts. If there are conflicts then you walk through each one of those one by one until you have gone through all of the commits.

### Merge Conflicts

So you've started your rebase and git is telling you there are conflicts. If you're in VS Code, you'll likely see a prompt asking if you want to open the merge editor. Click yes and suddenly you're staring at a three-panel view that looks like mission control at NASA. Don't panic.

## The 3-Panel Merge Editor Explained

VS Code's merge editor shows you three panels:

1. **Incoming (left panel)** - This is the code from the branch you're rebasing onto (usually main). These are the changes that other developers have made.

2. **Current (right panel)** - This is your code. The changes you made in your feature branch that you're trying to keep.

3. **Result (bottom panel)** - This is what the final merged file will look like. This is where the magic happens and what will actually be saved.

The confusing part is understanding which changes to accept. Here's how I think about it: you're essentially choosing which pieces of code should end up in that bottom result panel. You can accept incoming changes, accept current changes, accept both, or manually edit the result panel directly.

### Working Through Conflicts

For each conflict, you have a few options. VS Code shows checkboxes next to each conflicting section. You can:

- **Accept Incoming** - Use the code from main, throwing away your changes for this section
- **Accept Current** - Keep your changes, ignoring what's on main
- **Accept Both** - Include both versions (useful when both added new code that doesn't overlap)
- **Edit manually** - Sometimes neither option is right and you need to write something new

My approach is to look at the result panel first. What do I actually want this code to look like when I'm done? Then I use the checkboxes as helpers to get me there, often finishing with manual edits in the result panel to make sure everything is correct.

Once you've resolved all conflicts in a file, save it and stage the file. Then continue the rebase with:

```bash
git rebase --continue
```

If things go sideways and you want to start over, you can always abort:

```bash
git rebase --abort
```

This brings you back to where you were before the rebase started. No harm done.

## Interactive Rebase Commands

Interactive rebase is where you get real control over your commit history. To start an interactive rebase, use:

```bash
git rebase -i HEAD~n
```

Where `n` is the number of commits you want to go back. So if you want to work with your last 5 commits:

```bash
git rebase -i HEAD~5
```

Or if you want to rebase onto a specific branch:

```bash
git rebase -i main
```

This opens an editor showing your commits with the word `pick` next to each one. Here are the commands you can use:

- **pick** (p) - Keep the commit as is
- **reword** (r) - Keep the commit but edit the commit message
- **edit** (e) - Stop at this commit to amend it
- **squash** (s) - Combine this commit with the previous one, keeping both messages
- **fixup** (f) - Like squash, but discard this commit's message
- **drop** (d) - Delete the commit entirely

## Squashing Commits: Clean Up Before You Push

Here's the scenario I mentioned earlier. You've been working on a feature for a week. You have 15 commits with messages like "WIP", "fix typo", "actually fix the bug", "okay now it works", and "final final version". Before pushing to main, you want to squash all of these into one clean commit.

Here's how:

```bash
git rebase -i HEAD~15
```

This opens your editor with something like:

```
pick abc1234 Start feature work
pick def5678 WIP
pick ghi9012 fix typo
pick jkl3456 actually fix the bug
pick mno7890 okay now it works
... and so on
```

Change all the `pick` commands to `squash` (or just `s`) except for the first one:

```
pick abc1234 Start feature work
squash def5678 WIP
squash ghi9012 fix typo
squash jkl3456 actually fix the bug
squash mno7890 okay now it works
... and so on
```

Save and close the editor. Git will then open another editor showing all the commit messages combined. Delete everything and write one clean message that describes what the feature actually does. Save and close.

Now you have one commit instead of 15. Your git history is clean and your PR reviewer will thank you.

### A Word of Caution

Interactive rebase rewrites history. If you've already pushed your commits to a remote branch, you'll need to force push after rebasing:

```bash
git push --force-with-lease
```

Use `--force-with-lease` instead of `--force` because it's safer. It will fail if someone else has pushed to the branch, preventing you from accidentally overwriting their work.

Never rebase commits that have already been merged to main or that other people are working on. Rewriting shared history causes headaches for everyone on the team.

### Final Thoughts

The VS Code merge editor takes some getting used to, but once you understand those three panels it becomes a powerful tool. Combined with interactive rebase and squashing, you can keep your git history clean and meaningful. Your future self (and your teammates) will appreciate being able to look at the git log and actually understand what happened.

Feel free to reach out via my contact section if you have questions about rebasing or git workflows. Happy coding!
