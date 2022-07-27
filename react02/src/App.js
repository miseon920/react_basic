import React, { Component } from "react";
//클래스형을 쓸때는 위의 문을 선언해주어야함!
//리액트에서 컴포넌트를 상속받아서 쓴다는 의미
import Header from "./Header";

class App extends Component {
  //클래스형 컴포넌트
  //리액트 Component에서 상속받아서 app이라는 클래스를 가진 컴포넌트를 만듬
  /*
  클래스형 컴포넌트와 함수형 컴포넌트의 역할은 동일하다. 
  차이점이 있다면 클래스형 컴포넌트의 경우 state 기능 및 
  라이프 사이클 기능을 사용할 수 있으며 임의 메서드를 정의할 수 있다는 점이다.
   그리고 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 
   한다. 또한 과거의 prototype을 이용해서 구현하던 클래스 문법을 ES6 문법 부터는
    class 문법을 사용하여 구현할 수도 있다.
    https://devowen.com/298
  */
  render() {
    const style = {
      //변수방식
      color: "red",
      fontSize: "40px", //-은 없애고 그다음을 대문자로
    };
    return (
      <header>
        <Header style={{ color: "red" }} name="mi_suuun" age={3}></Header>
        {/*컴포넌트 자체에는 스타일 불가*/}
        {/* name,age는 프로퍼티 */}
        <nav>
          <ul>
            <li>
              <a href="" style={style}>
                menu01
              </a>
            </li>
            <li>
              <a href=""> menu02</a>
            </li>
            <li>
              <a href=""> menu03</a>
            </li>
            <li>
              <a href=""> menu04</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;
