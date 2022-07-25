import Test from "./Test";
import Nav from "./Nav";
//import logo from "./logo.svg";
// import "./App.css";
/*
npm - 저장소
노드를 써야함 / 서버만듬

노드 설치
https://nodejs.org/ko/

node -v

npm -v

리액트시작

npx create-react-app test [test는 폴더이름]

cd 폴더명  [해당폴더로감]
npm start [리액트 실행]

상위폴더로 갈때 cd .. 을 치면 됨

common
node_modules - 깃에 못올림 / package.json으로 대체
build 리액트로 사용할수있게 변경하게됨
gitignore - 깃에 올라가지 말아야할 파일 등록



리액트에 사용할 것(예 - html,css,js 파일등)
node_modules 에 저장하면
package.json 에 이력이 남음

src폴더에서 작업 진행
App.js 만든것을 index.js에 뿌림

public폴더에 이미지 저장

만들어쓰는 html - 컴포넌트
*/
// function App() {
//   return (
//     <>
//       {/*
//         두개 이상의 태그의 경우 랩핑을 해줘야함
//         <div></div> 없이 할때는 <></>으로 싸주면됨
//       */}
//       <h1>리액트</h1>
//       <h2>aaaaaa</h2>
//     </>
//     jsx
//     {/*React JSX코드 주석*/}
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/*React JSX코드 주석*/}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           리액트?
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  //console.log("aaa");
  return (
    <>
      <Test /> {/* 컴포넌트 이름 앞글자는 대문자로*/}
      <h1>호호</h1>
      <Nav />
      {/* <h2>jsx 주석연습</h2> */}
    </>
  );
};
export default App;
//하나의 컴포넌트만  export 할수있음!
//npm run build - 배포하기 위해서 빌드시키기
//https://gocoder.tistory.com/2190
//빌드후 빌드 html의 위치 고쳐주기! - 확인

//npm 중지 - ctrl +c
