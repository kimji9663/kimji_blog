---
title: '[Github] Commit 이력 관리하기'
date: "2022-01-07"
---

## pull request 없이 master에 올리기
<br>

다른 브랜치를 생성하여 작업을 하고, 마스터에 pull request없이 올리는 방법이다.

1. 브랜치를 생성하고,
```
git branch jihye
```

2. 작업을 한 후 커밋을 한다.
```
git add .
git commit -m'commit message...'
```

3. git reflog를 하면 커밋 hash가 있는 커밋 리스트를 볼 수 있다. (hash값 복사)
```
git reflog
```

4. master로 이동
``
git checkout master
```

5. 복사한 hash값으로 cherry-pick
```
git cherry-pick afb172a
```

6. 로그를 확인하면 커밋이 들어온 것을 확인할 수 있다. 푸시한다.
```
git push
```

7. 브랜치는 삭제한다.
```
git checkout 다른브랜치
git branch -D 다른브랜치
```

항상 이와 같은 방식으로 하면 커밋이력이 깔끔하게 유지된다.
