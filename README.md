# Vite + React 템플릿

Vite 커스텀 템플릿을 사용해 React 프로젝트 스캐폴딩 할 수 있습니다.

<hr />

## 스캐폴딩 명령

[degit](https://github.com/Rich-Harris/degit?tab=readme-ov-file#readme) 명령을 사용해 프로젝트를 스캐폴딩합니다.

```sh
degit heydoopal/vite-react <프로젝트_이름>
```

<hr />

## 폴더 구조

![](https://velog.velcdn.com/images/zidoopal/post/35db48d4-7a2c-41db-b46a-9a513ae1c1aa/image.png)


<hr />

### 설치한 패키지

- vite

```
pnpm add -D vite
```

- react / react-dom

```
pnpm add react react-dom
```

- types/react / types/react-dom | types/node

```
pnpm add @types/react @types/react-dom @types/node -D
pnpm add @types/{react,react-dom,node} -D
```

- vitejs/plugin-react

```
pnpm add @vitejs/plugin-react -D
```

- eslint

```
pnpm create @eslint/config@latest
```

- eslint-plugin-react-hooks / eslint-plugin-react-refresh

```
pnpm add eslint-plugin-react-hooks eslint-plugin-react-refresh -D
```

<hr />

### 궁금한 점 ❓

![](https://velog.velcdn.com/images/zidoopal/post/6ae4ad37-aab6-418d-965e-c66c2d85e589/image.png)

- `eslint.config.js` 파일
  - `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` 파일을 임포트 해 오는데 밑줄이 떠서 보니
    타입 선언 파일이 없다는 문구가 떠있었었습니다.

**해결 시도 방법**:

- `@types/` 패키지 설치해보기
  - `pnpm add @types ~` 명령어로 해당 패키지를 설치해보려했으나, 패키지가 npm 레지스트리에 존재하지 않는다는(?) 설치오류 확인.

![](https://velog.velcdn.com/images/zidoopal/post/3e118217-2aaa-4fa4-99c9-86e6fbf8246f/image.png)

- gpt 에서는 타입 선언 파일 생성하라고 알려주었으나, 강사님의 답변이 궁금합니다..!!
- 해당내용은 적다보니 질의응답에 기재하는 것이 맞을 것 같아 함께 작성해놓았습니다!

<hr />

### 느낀점 💬

개발자가 되려면 왜? 라는 질문을 늘 던져야 한다고 들었는데, <br> 
사실 편한게 좋고 남들이 다 하는거면 좋은 거겠거니 하면서 따라해왔었습니당. <br>
<br>

vite 라는 친구 자체도 친근하진 않지만 그래도 몇 번 사용해오면서 그냥 설치하라면 설치했고, <br>
이 패키지/플러그인은 뭘까? 이건 왜 설치하는걸까 라는 질문을 딱히(아니 전혀) 해본 적이 없었어요. <br>
<br>

직접 환경 구성을 해보는 이 과정이 다른 분들께는 어떠셨을 지 모르겠지만 저에겐 정말 오랜시간이 걸리는 과제 였습니다.<br>
아마 제일 오랜시간이 걸렸던 것 같아요. 이걸 gpt를 쓸 수도 없고 온전히 이해해야만 넘어갈 수 있는 과정? 이여서 그랬던 것 같아요.<br>
<br>

어렵기도 하고 아직 이걸 왜 이렇게 해야하는거지 다 이해하진 못했지만 <br>
직접 하나하나 구성해보고 왜 설치 하는지 계속 생각해보고 찾아보면서<br>
큰 흐름이나 맥락 정도는 알 수 있었던 것 같아서 좋은 과제 였던 것 같습니다!
