---
title: 'Understanding rebase and how I use vscodes merge editor'
date: '2025-01-04'
topics: 'Rebase'
---

### How I use vscode's merge editor and some words on rebase

Your organization probably has some guidelines how they want their code added to the main branch. Of those options git rebase has been my favorite as it gives the developer the most flexibility and is a great tool to understand. When I was a junior developer I ran into the perfect storm of a huge feature with over 20 commits which I was told I needed to rebase onto the main branch. This feature took weeks and during that time other developers had merged their changes in using merge commits and the overall status of the repo was very unclean. When rebasing I used no other tool other than the command line to approach this and didn't understand why I was seeing the same changes over and over again as I interactively ran through each commit I had made. This approach would have been avoided if I had constantly rebased as my changes occurred and now we have some pretty nice visualizations which show what exactly is going on with your history and how to approach rebasing. So lets jump into it.

### What is rebase

Rebasing is a git technique which allows your git commits to be placed 'on top of' the existing commit stack even if those commits occurred previously to the commits in the stack. To break it down further lets say Jennifer a front end developer is working on a feature and you are too. You and Jennifer are working for a few days, each with your own commits. She commits her work to main after a PR review. When you go to commit your work we see that the commits will be intersperced with yours since you both committed on Tuesday and Wednesday of that week. This can be difficult to see which commits belong to one feature or the other.

Enter rebase. Rebase allows you to rewrite history in such a way as to put your commits all in the same spot at the top of the commit history. This allows others in the code base to see a clean history of what occurred without getting confused with other features in the git stack. This aproach means you need to walk every commit through each other commit on main. This can be easily done when there are no git conflicts. If there are conflicts then you walk through each one of those one by one until you have gone through all of the commits.

###
