---
name: merge
description: Fetch the latest remote source and merge it into the current branch, resolving any conflicts. Use when the user asks to pull/merge the latest code, sync with origin, or resolve merge conflicts.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash(git *)
  - Bash(npm *)
  - Bash(node *)
---

# /merge — 최신 소스 머지 + 충돌 해결

현재 브랜치에 원격 최신 소스를 머지하고, 충돌이 나는 부분을 해결한다.

인자로 대상 브랜치를 넘길 수 있다 (예: `/merge develop`). 없으면 현재
브랜치의 upstream(없으면 `origin/main`)을 대상으로 한다.

## 절차

1. **사전 점검**
   - `git status --porcelain` 으로 워킹트리 확인. 커밋 안 된 변경이 있으면
     사용자에게 알리고, 계속할지(예: `git stash`) 확인받는다. 임의로
     stash/commit/reset 하지 않는다.
   - `git rev-parse --abbrev-ref HEAD` 로 현재 브랜치 확인.

2. **최신 소스 가져오기**
   - `git fetch --all --prune` 실행.
   - 머지 대상 결정: 인자 > `@{upstream}` > `origin/main`.
   - `git rev-list --left-right --count <target>...HEAD` 로 ahead/behind 계산.
     - behind=0 이면 이미 최신 → 머지 없이 그 사실만 보고하고 종료.

3. **머지 실행**
   - `git merge --no-edit <target>` 실행.
   - fast-forward 또는 클린 머지면 결과만 보고하고 종료.

4. **충돌 해결** (머지가 conflict 로 멈춘 경우)
   - `git diff --name-only --diff-filter=U` 로 충돌 파일 목록 확인.
   - 각 파일을 열어 `<<<<<<<` / `=======` / `>>>>>>>` 마커를 검토한다.
   - 해결 원칙:
     - 이 저장소는 서버 v2 핸들러에서 `tools/gen-v2-services.mjs` 로
       **자동 생성**되는 파일이 많다 (`src/services/v2/*`, `public/api-test.js`
       의 v2 섹션 등). 이런 파일은 손으로 마커만 지우지 말고, 가능하면 머지
       후 **생성기를 재실행**해서(`node tools/gen-v2-services.mjs`) 결과를
       정본으로 삼는다.
     - 그 외 파일은 양쪽 의도를 모두 보존하는 방향으로 병합한다. 한쪽을
       통째로 버리기 전에 무엇을 버리는지 근거를 명확히 한다.
     - 확신이 서지 않는 충돌(비즈니스 로직 분기, 상충하는 시그니처 변경
       등)은 임의 판단하지 말고 사용자에게 선택지를 제시한다.
   - 해결한 파일은 `git add <file>`.

5. **검증**
   - 남은 마커 없는지 확인: `git grep -nE '^(<<<<<<<|=======|>>>>>>>)' -- .`
   - 타입/빌드 점검(있으면): `npm run build` 또는 `tsc --noEmit`. 실패하면
     충돌 해결이 깨진 것 → 다시 손본다.
   - 자동 생성 파일을 만졌으면 생성기 재실행 결과가 반영됐는지 확인.

6. **머지 커밋 & 보고**
   - 충돌을 해결했으면 `git commit --no-edit` (또는 요약 메시지)로 머지 완료.
   - 최종 보고: 머지 대상, 가져온 커밋 수, 충돌 파일과 각각 어떻게
     해결했는지, 검증(빌드) 결과.
   - **push 는 사용자가 명시적으로 요청할 때만** 한다.

## 주의

- 파괴적 작업(`git reset --hard`, `git checkout --`, force push, stash drop)은
  사용자 명시 승인 없이 하지 않는다.
- 머지가 꼬여 되돌려야 하면 `git merge --abort` 를 먼저 제안한다.
- 커밋 메시지는 이 저장소 관례를 따른다: `[new]`/`[fix]`/`[chore]` 접두어,
  한국어 요약.
