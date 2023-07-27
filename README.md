# Lifegram
<br />

![인스타그램](https://github.com/lifegram-clone-team/lifegram-frontend/assets/56420106/18d022e1-2f59-4804-9cfd-9edbed68ebc5)

<br />
<br />

# 📖 Introduction
### 1. 프로젝트 개요
인스타그램 최소 기능 클론 코딩

<br />

### 2. 개발 환경
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> ![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server-FF6384?style=for-the-badge&logo=json&logoColor=white) ![axios](https://img.shields.io/badge/axios-35495E?style=for-the-badge&logo=axios&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![react-query](https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) 

<br />

### 3. 프로젝트 내용
<img src='https://github.com/lifegram-clone-team/lifegram-frontend/assets/56420106/95cfc453-189f-45d5-b06d-539f4865fe5f' width="300" height="500" />
<img src='https://github.com/lifegram-clone-team/lifegram-frontend/assets/56420106/10090dd4-16d9-4536-9ce6-8889321fa008' width="300" height="500" />
<img src='https://github.com/lifegram-clone-team/lifegram-frontend/assets/56420106/8a73611a-6e52-4f0a-81ba-f04911d7569f' width="300" height="500" />

### 3-1 설명

짧은 시간내에 만드는 만큼 인스타그램 최소 기능을 구현한 클론 코딩

<br/>

### 3-2 기능

- 전체 게시물 (R)
- 댓글(CD)
- 인피니티 스크롤
- 나의 게시물 (CRUD)  
- 개인 프로필 변경
- 좋아요 기능

<br/>

### 3-3 etc
- 인스타그램을 확인했었을 때 게시물 상세 조회가 2가지로 구현되어 있는 것을 확인하여 모달UI로 만든것과 페이지UI로 2가지 버전을 만듬
- 인스타그램은 앱이 따로 있어 핸드폰 사이즈의 반응형까지 구현되어이 있지 않음
  - 웹페이지로 전체 구현을 하는 만큼 웹, 태블릿, 스마트폰 반응형 전부 구현

<br />
<br />

# 🙋 My Role

### 담당업무

- Khusan
  - 로그인
  - 회원가입
- 박민지
  - 게시글 수정
  - 게시글 작성
- 이소현
  - 메인
  - 프로필(나의 게시물)
- 이준호
  - 게시글 디테일
  - 프로필 게시글 디테일

<br />
<br />

# 🔎 Trouble Shooting

- Git 오류: 팀원이 Git branch를 나누어 PR를 하는 것이 처음이라 많이 헤매고 오류가 많이 남
  - 해결방안: 현재 작업중인 branch에서 pull로 받는 것이 아니라 합본이 있는 develop branch에서 전체 pull을 받고 기능 branch에서 merge를 하는 방식으로 변경

- 인피니티 스크롤: 첫화면 렌더링 시 이미지가 일부 깨져 보이거나 새로고침 전까지 데이터가 잔류하는 현상 발생
  - 해결방안: navigate로 설정된 url 이동(페이지 리로딩x)을 window.location.href를 변경하여 페이지를 리로딩하여 오류 수정
  - 해결방안2: useInfiniteQuery에 내장된 isLoading → isFetching으로 코드 변경하여 오류 수정
 
- 권한에 따른 주소 이동: 없는 주소를 주소창에 입력할 경우 404에러페이지가 나와야 하는데 api 오류 발생
  - 해결방안: 주소가 /:id인 라우터가 있어 이쪽으로 이동되기때문에 생긴 문제여서 주소를 변경
    
- 너무 무거운 이미지: 인스타그램이라는 SNS 특성상 다수의 이미지가 한번에 불려오기 때문에 렌더링 속도가 느려지는 문제 발생
  - 해결방안: 사용자가 이미지 업로드시 프론트에서 이미지 크기 2mb로 제한
    
<br />
<br />


# 💡 Review
### 후기

1. github, convention의 중요성
git pull, merge 에러, 정립되지 않은 규칙(폴더 구조, code convention, 재사용 컴포넌트 분류)들로 비효율적인 문제들이 다수 발생.
**→기획 초기 단계부터 git 사용 규칙, convention을 정립하는 데 시간을 쏟는 것이 곧 비용을 절약하는 일.**

2. 자세하고 명확한 역할 분담, 스케줄링
각자의 역량을 정확히 파악하고 개인이 낼 수 있는 최대치에 근접한 스케줄링, 역할 분담이 필요.
**→Deadline을 지키고 다양한 UX테스트를 위해 디테일하고 타이트한 일정 조율이 필요할 것.**

<br />

### 코드 리뷰

- 깃 컨벤션이 영어와 한글이 섞여 있어 통일성이 적음
- react-query를 이용한 예외처리가 전체적으로 되어있지 않음
- 주석이 필요한 코드는 좋은 코드가 아니므로 주석이 필요하다면 네이밍이 명확한지 주석이 필요한지 확인해야함
  css 전처리기를 선택했으면 그 전처리기의 장점을 명확하게 하는 것이 좋으나 현재 코드에서는 스타일 컴포넌트의 장점을 명확히 살리고 있지 않음

<br />
<br />

# ✔ 시간이 더 있었다면 해보고 싶은 기능

1. 북마크 / 해시태그(#)
2. 소셜 로그인
3. 팔로잉 팔로워
4. 인스타 스토리 CRUD
