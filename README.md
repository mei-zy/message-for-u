# message-for-u

## 프로젝트 소개

친구들이 나에게 남긴 덕담을 볼 수 있는 사이트

> 2022.02.03 ~ 2022. 02. 19 (약 2주)

**Reference** | <a href="https://spartacodingclub.kr/online/special/deokdam?utm_source=ig&utm_medium=Instagram_Stories&utm_campaign=%EC%98%A8%EB%9D%BC%EC%9D%B8_mid_%EC%B2%B4%ED%97%98%ED%8C%90%EC%8B%9C%EC%9E%91-%EB%AC%B4%EB%A3%8C%ED%8A%B9%EA%B0%95&fbclid=PAAaZABnt88yiOYodsxxAAuBE2AtOTk4uc5DiltDgbdW9cqHeeacYgnd9Mt5s" target="_blank">스파르타 덕담 공유 코딩 패키지</a> - 재밌는 프로젝트 일 것 같아 강의를 듣고 목데이터를 이용하여 서버 연결 시켜 발전 시켰습니다 🙊🔥

## 기술 스택

<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/css3-F43059?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=black"> <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black">

## 프로젝트 시연

![](https://images.velog.io/images/mingsomm/post/1fcb6b61-3cd7-4b28-b409-711dae4f59a9/2022-02-26%2018.42.23.gif)

- 덕담 남기기 기능

![](https://images.velog.io/images/mingsomm/post/04a93326-b6eb-4161-9fed-f07e8f3f8562/2022-02-26%2018.42.59.gif)

- 덕담 남기기 (validation check)

![](https://images.velog.io/images/mingsomm/post/11372dbf-6a6c-4eb5-a9e8-cb35f38e53d8/2022-02-26%2018.45.12.gif)

- 메세지 보기 기능

---

## Tailwind css

### Tailwind 선정 이유

- css 와 html 파일을 번갈아가는 작업에 피곤함을 느끼게 되었고, 컬러 팔레트를 보는 일이 귀찮아졌다.

### 사용 후기

- 익숙치 않다보니 tailwind css 공식 문서를 많이 참조하긴 하였다 _익숙하면 빠른 개발 가능할 듯 하고 빠르게 익숙해지기도 하고 공식문서가 굉장히 잘되어있다_

- 기본 css 를 사용했을 때보다 클래스 명에 대하여 고민하지 않아도 되어 편했다. - 바닐라 자바스크립트를 이용할 때 어쨌는 클래스 이름이 필요할 때가 있다.

---

## 추가 기능 - 쪽지 랜덤 위치

```js
const topLocation = Math.floor(Math.random() * 301) + 50;
const leftLocation = Math.floor(Math.random() * 301) + 100;

$('.msg-list').innerHTML += `
    <li class="absolute" style="top:${topLocation}px; left:${leftLocation}px">
      <img class="inline msg-view" data-id=${
        data.length - 1
      } src="https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/object3.png" alt=${writer} />
    </li>`;
```

자바스크립트 Math.random() 을 이용해야 했기 때문에 tailwind css 가 아닌 inline style 로 쪽지의 위치를 랜덤하게 잡았다.

## 추가 기능 - SEO, 웹접근성 개선

![](https://images.velog.io/images/mingsomm/post/33e3a3d9-4ebb-448d-a15e-97a2d1bf3bdc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-26%2018.59.05.png)

- 초기 light house 를 이용한 성능 확인

1. 이미지 webp 사용
2. 이미지 width, height 지정하여 랜더될 때 미리 계산
3. meta 태그 적극 사용하여 SEO 개선

## git convention

| 태그이름         | 설명                                                  |
| ---------------- | ----------------------------------------------------- |
| feat             | 새로운 기능 추가                                      |
| fix              | 버그 수정                                             |
| design           | css 등 사용자 UI 수정                                 |
| !BREAKING CHANGE | 커다란 API 변경                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                |
| style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor         | 코드 리팩토링                                         |
| comment          | 필요한 주석 추가 및 변경                              |
| docs             | 문서 수정                                             |
| test             | 테스트 추가, 테스트 리팩토링                          |
| chore            | 패키지 매니저 설정                                    |
| rename           | 파일 혹은 폴더명 수정하거나 옮기는 작업               |
| remove           | 파일을 삭제하는 작업만 하는 경우                      |

**git convention reference |**<a href="https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0" target="_blank"> [협업] 협업을 위한 git 커밋컨벤션 설정하기</a>

## 실행 환경

```
npm i
```

```
npm start
```

서버

```
npm run server
```
