# Git branching model

Odyssey follows git branching model that utilizes `master`, `release`, `hotfix`, `develop` and `feature` branch. This model assumes we have a linear progression on the production server, from 1.0 to 2.0 etc.

Here `master` and `develop` branches are unique.  `develop` points to the latest head while `master` points to the latest production. `master` and `develop` keep merging each other during their lifecycles through other branch type. In normal circumstances, there's no direct push to `master` and `develop`.

In order to release the right version of `develop` to `master`, we setup `release/1.x` before each release. We identify what needs to be build into the release and branch out to exclude commits that shouldn't be part of it, this remedies the fact that `develop` branch is singular. These release branches help setup branches for multiple business goals for the current sprint.

In order to support bug fixes for `master`, we create `hotfix/1.x` after each production release if needed. This allows urgent fix without interruption of daily development. 

Product can be non-linear business. When we update production, we merge changes from `release` and `hotfix` to `master`, and after the build is stable, we also need to merge changes back to `develop`. And the same time, `develop` is continously moving forward with lots of `feature` branches merging into it in daily basis. 

One edge case arise when you have a feature or release branch ex.  `release/1.6.2` which doesn't go to the production soon. The problem is that you have to be careful to determine if this branch can ever merge back to `develop`, since whatever goes into `develop` is difficult to be extracted out without cherrying pick. *Things in `release` but not in `master` (or `develop`) could be considered as detached code in this model.* 