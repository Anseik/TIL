# Git, Jira 이관 방법 정리

> 2021.03.22.(월)

### 팀 미팅

* Git 저장소 이관

  ```text
  1. 원본 저장소 클론
  $git clone --bare [원본 저장소 경로]
  
  2. 클론한 디렉토리 안으로 이동
  $ cd [원본 저장소 이름].git
  
  3. 이동할 원격 저장소 경로 지정
  $ git remote set-url --push origin [이동할 원격 저장소 경로]
  
  4. 원격 저장소에 push
  $ git push --mirror
  
  ```

  

* Jira  이슈 이관

  ```
  1. sub2 JIRA에서 issue -> view all issues and filters
  2. tools -> Bulk Change - all issues
  3. Choose all issues ( 옮길 이슈들을 선택 )
  4. Move issues
  5. 옮겨질 목표 보드 선택 후 옮기기
  ```

  



