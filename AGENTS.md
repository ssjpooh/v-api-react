# Repository Agent Instructions

## API Reference Paths

- API 참고 기준 폴더는 `D:\StudioProjects\react-project\vwork` 를 사용한다. (이 repo 가 live 소스 오브 트루스)
- v1 API를 확인할 때는 다음 경로를 참고한다.
  - handler: `D:\StudioProjects\react-project\vwork\src\server\apiServer`
  - controller: `D:\StudioProjects\react-project\vwork\src\server\api`
  - model(구조체): `D:\StudioProjects\react-project\vwork\src\server\apidata`
- v2 API를 확인할 때는 다음 경로를 참고한다.
  - handler: `D:\StudioProjects\react-project\vwork\src\server\v2\handler`
  - controller: `D:\StudioProjects\react-project\vwork\src\server\v2\controller`
  - model: `D:\StudioProjects\react-project\vwork\src\server\v2\model`
- API가 신규로 추가되면 `public/api-test.js` 테스트 페이지에도 해당 API 항목을 추가한다.

## Commit Rules

- 사용자가 커밋을 요청하면 먼저 이 문서를 읽고 커밋 메시지 작성 규칙을 확인한다.
- 커밋 메시지는 다음 구조로 작성한다.

```text
[ 년-월-일 - 깃 사용자 이름 ]
[new] 신규 내용
[fix] 수정 내용
```

- 날짜는 작업일 기준으로 작성한다.
- 작성자는 깃 사용자 이름을 사용한다.
- 작성자 뒤에 괄호를 추가하지 않는다.
- 새로 추가된 파일, 기능, 구조는 `[new]`에 적는다.
- 기존 파일이나 동작을 바꾼 내용은 `[fix]`에 적는다.
- 해당 내용이 없으면 빈 항목을 만들지 않는다.
- 커밋을 만들 때는 `CommitNotes.txt` 파일을 만들거나 갱신한다.
- 새로운 커밋 내용은 항상 `CommitNotes.txt`의 최상단에 추가한다.
- 각 개발자마다 서버가 다를 수 있으므로 `public/env.json`은 커밋에 포함하지 않는다.
- `public/env.json`은 최초 등록 시 또는 옵션이 추가될 때만 커밋에 포함한다.
- 커밋 요청을 받아도 원격 저장소로 올리지 않는다.
- 원격 저장소 반영은 사용자가 별도로 명확히 요청한 경우에만 검토한다.
