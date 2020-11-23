# final pjt 

##### 1119.

###### 1. 팀원 정보 및 업무 분담 내역

- 팀원 정보와 업무분담내역

```md
안세익(29 - 팀장)
- 백엔드 개발

천민주(25 - 팀원)
- 프론트 엔드 개발

그 외에 함께 작업할때는 네비게이터와 드라이버를 돌아가면서 프로젝트 진행
```

- 사용 아키텍처

```ㅡㅇ
Django REST API & Vue.js
```

- 정보 공유 플랫폼

```md
Trello와 구글미팅을 활용하여 개발진행
```



###### 목표 서비스 구현 및 실제 구현 정도

###### 1119

#####  <추천알고리즘 정리와 전반적인 프로젝트 생성>

- 추천알고리즘과 홈화면에 대해 각자 생각한 부분 논의  & 구성

```md
-사용자가 (좋아요, 별점)을 매긴 걸로 홈화면에서 나만의 TOP10 보여주기
-전체 별점 기준으로 전체 TOP10 보여주기
-각 달별 테마를 정해서 테마별 영화를 추천
-영화 위에 마우스를 올리면 팝업창으로 영화 제목, 줄거리, 평점, 예고편 보여주는 기능 구현
```

- 커뮤니티 기능

```md
-프로필 페이지, 자기소개, 팔로우, 내가 작성한 글, 댓글, 좋아요한 글 조회 가능
-전체 게시판 생성해서 리뷰를 좋아요 or 최신순으로 정렬해서 보기 가능
```

- 추가적으로 구현 희망하는 부분

```md
-소셜 로그인 연동
-게시글 조회수 구현
-대댓글 기능 구현
-광고 배너 추가
-현재 상영 중인 영화는 예매 링크 제공, 그 이외의 영화는 다시보기 링크 제공
=커뮤니티 세분화 (잡담, 영화 리뷰) -> 평점 유무의 차이, 좋아요의 유무 차이
```



##### 1119 구현정도

```md
ERD 를 이용한 모델 구조 생성(완성)
articles(게시판)의 글 생성, 글 수정, 글 삭제, 댓글 삭제, 댓글 생성 기능 구현(완성)
accounts(user)의 회원가입, 로그인, 로그아웃, 회원정보 수정, 회원 탈퇴 기능 구현 (완성)
```

![image-20201119093550158](final%20pjt.assets/image-20201119093550158.png)

![image-20201119093640064](final%20pjt.assets/image-20201119093640064.png)



###### 1120 

- 목표

```md
- accounts의 follow, following, profile 기능 구현 
- articles에 like 기능 구현
- js 적용해서 (팔로우, like) 동적으로 만들기
- API 요청해서 데이터 받아오고 MOVIE:INDEX에서 보여주는 기능 구현
- 소셜 로그인 연동
- 영화 상세 페이지 구현(팝업기능) & 상세페이지에서 댓글 생성, 별점 기능 구현
- 홈화면에서 영화 리스트 조회(팝업기능 & 슬라이드 기능 구현)
- 게시글 조회수 구현
```

- 구현정도

```
- API 요청해서 데이터 받아오고 MOVIE:INDEX에서 보여주는 기능 구현(완성)
- accounts의 follow, following, profile 기능 구현 (완성)
- articles에 like 기능 구현(완성)
- 게시글 조회수 구현(완성)
- 영화 상세 페이지에서 댓글 작성 기능 구현(완성)
- 영화 API의 request Response를 통해 100개의 영화데이터 유지(완성)
- 홈화면에서 영화 리스트 조회(팝업기능 & 슬라이드 기능 구현)
- js 적용해서 (팔로우, like) 동적으로 만들기
```

![image-20201121173241023](final%20pjt.assets/image-20201121173241023.png)

###### 1123

- 구현목표

```md
-추천 알고리즘 완성(& 좀더 생각해보기)
-영화 검색 기능
-찜하기 기능 오나성
```



- 구현정도

```md
- 최신순으로 영화 탑텐 구현
- 별점을 4점 이상 준 영화와 유사한 영화를 찾아서 추천
- 찜하기한 영화를 한 페이지에서 모아보기
- 네브바 마우스오버 효과 적용
- 찜하기 기능 이용시 알림 메세지 설정
```

![image-20201123182209557](final%20pjt.assets/image-20201123182209557.png)



###### 데이터 베이스 모델링(ERD)

![image-20201119175148567](final%20pjt.assets/image-20201119175148567.png)



###### 필수 기능에 대한 설명

```md

```





###### 배포 서버 URL

```md

```





###### 기타(느낀점)

```md

```