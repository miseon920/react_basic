import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
웹팩

React Native는 모바일 애플리케이션을 만드는 데 사용될 수 있고, React 360은 가상 현실 애플리케이션을 만드는 데 사용할 수 있습니다



#state - 자료가 변경될때 새로고침없이 뿌려준다 / 배열을 변경한다 

변수를 바꾸는 함수,
배열을 바꾸면서 리스트를 생성함
const[]= useState;

#props - 전달하는것 / 프로퍼티가 있음.  - 한방향으로만 가능 / 부모에서 자식으로만가능 (데이터)
-프로퍼티(property)는 일부 객체 지향 프로그래밍 언어에서 필드(데이터 멤버)와 메소드 간 기능의 중간인 클래스 멤버의 특수한 유형이다.
-프로퍼티의 읽기와 쓰기는 일반적으로 게터(getter)와 세터(setter) 메소드 호출로 변환된다.

state와 값을 전달할 수 있음
App.js

*/
