# Як робити хотфікси в реліз?

## **TLDR;**

1. checkout to `master`/`main` branch
2. create a hotfix branch
3. make a fix
4. PR to `main`, merge, ready to testing on test environment
5. checkout to target release branch
6. `cherry-pick` the hotfix commit
7. if cherry-picked commit conflicts and should be merged – resolve conflicts and merge
(if branch has no direct push restrictions. or make a new PR)
8. ready to test on production environment

## Хотфікс, але в лібі

Те саме, але перед оновленням проектів треба ще оновити версії ліби:
`main`-версію, і потім релізну версію.
