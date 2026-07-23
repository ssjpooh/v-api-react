---
name: mergeCommitPush
description: Run the merge skill (fetch + merge latest source, resolve conflicts), then commit the result and push to origin. Use when the user wants to sync with remote and publish in one step.
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

# /mergeCommitPush — 머지 + 커밋 + 푸시

`/merge` 로 최신 소스를 머지하고 충돌을 해결한 뒤, 결과를 커밋하고 원격에
푸시하는 것까지 한 번에 수행한다.

인자로 대상 브랜치를 넘길 수 있다 (예: `/mergeCommitPush develop`).

## 절차

1. **머지 (merge 스킬 실행)**
   - [[merge]] 스킬의 절차를 그대로 따른다: 사전 점검 → fetch → merge →
     충돌 해결 → 검증.
   - 충돌 해결 중 사용자 판단이 필요한 상황이 생기면 **거기서 멈추고**
     물어본다. 임의로 밀어붙여 커밋/푸시하지 않는다.
   - 머지 결과가 "이미 최신(변경 없음)" 이면, 새로 커밋할 것이 없더라도
     로컬이 원격보다 앞서 있으면(ahead) 3~4단계로 진행해 푸시한다.

2. **커밋**
   - 머지 커밋이 필요하면(충돌 해결 등) `git commit --no-edit`, 또는 이
     저장소 관례(`[new]`/`[fix]`/`[chore]` + 한국어 요약)에 맞는 메시지로
     커밋한다.
   - 검증(빌드/타입체크)이 통과한 상태에서만 커밋한다.

3. **푸시**
   - `git rev-parse --abbrev-ref HEAD` 로 현재 브랜치 확인.
   - `git push origin <branch>` 실행.
   - 원격에 upstream 이 없으면 `git push -u origin <branch>`.
   - non-fast-forward 로 거부되면 임의로 force push 하지 말고, 원인(원격에
     새 커밋)을 사용자에게 알린 뒤 다시 머지할지 확인한다.

4. **보고**
   - 머지 대상/결과, 충돌 해결 내역, 커밋 해시, 푸시된 브랜치와 원격을
     요약 보고한다.

## 주의

- push 는 이 스킬의 정상 흐름의 일부다. 단, **force push 는 절대 임의로
  하지 않는다** — 명시적 승인 필요.
- 파괴적 작업(`reset --hard`, `checkout --`, stash drop)은 사용자 승인 없이
  하지 않는다.
- 머지가 꼬이면 `git merge --abort` 를 먼저 제안한다.
