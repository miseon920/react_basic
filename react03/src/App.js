import { useState } from "react";
import "./App.css";
/*
#state

props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다는 차이가 있다.
props를 사용했는데도 state를 사용하는 이유는, 사용하는 쪽과 구현하는 쪽을 철저하게 분리시켜서 양쪽의 편의성을 각자 도모하는 것에 있다.

-사용하기
State 객체를 사용하고 싶다면 컴포넌트를 생성할 때 가장 윗부분(render() 함수보다 먼저)에 constructor() 함수를 적어준다. 
컴포넌트 생성자에서 super를 호줄하기 전에는 this를 사용할 수 없기 때문이다.

*constructor() 라는 함수가 컴포넌트의 초기화
*그리고 App 클래스 내부에서는 중괄호를 이용해
title={this.state.subject.title} 
와 같이 State값을 가져와 사용한다.
*사용자가 알 필요가 없는 데이터를 내부에서 은닉하는 것. 
즉, 캡슐화를 통해 코드를 리펙토링 하는 것이 좋은 사용성을 만드는 핵심이다.

*항상 setState 가 가장 최신의 state 값을 사용하도록 보장하기 위해서는 setState 에 객체 대신 함수를 전달
https://ko.reactjs.org/docs/faq-state.html

*/

//리액트는 변수 선언동시에 함수를 같이 선언함
function App() {
  const [number, setNumber] = useState(0); //컴포넌트내에 써주어야함
  const [color, setColor] = useState(false);
  /*
  const는 값이 변할수없음
  let는 값이 변할 수 있음
  */
  /*
  usSstate 동작 원리
  배열 비구조화 할당을 활용
  첫번째 원소는 현재 상태, 두번째 원소는 setter 함수
  원래대로라면
  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1];
  */
  return (
    <div onClick={() => setColor(true)}>
      <i
        className="xi-heart"
        onClick={() => setNumber(number + 1)}
        style={{ color: color && "red" }}
      ></i>
      {number}
      {console.log(setColor)}
    </div>
  );
}
/*
https://web-front-end.tistory.com/4

*/
export default App;
