import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import Button from "./Button";

/*
📋 클래스형 컴포넌트와 함수형 컴포넌트
리액트 컴포넌트는 클래스형 컴포넌트 또는 함수형 컴포넌트로 작성될 수 있다.
클래스형 컴포넌트는 상태값을 가질 수 있고, 
리액트 컴포넌트의 생명 주기 함수를 작성할 수 있다.
 그러나 함수형 컴포넌트는 이 모든 일을 할 수 없다. 
 이 둘의 차이점은 상태값과 LifeCycle를 가질 수 있느냐 없느냐이다.

리액트 버전 16.8부터 훅(Hook)이 등장하면서 함수형 컴포넌트에서도 
상태값과 생명 주기 함수 코드를 작성 할 수 있게 되었다.
*/
//함수형 컴포넌트
/*
📕 함수형 컴포넌트
☑️ JSX를 return문을 사용해서 반환
☑️ state를 사용할 수 없다
☑️ 생명 주기 함수를 작성할 수 없다
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

export default Hello;
*/
const App = () => {
  //function App(){  과 같음,
  //const App = function(){ 와도 같음
  return (
    //jsx // 컴포넌트 첫글자 대문자
    <Wrapper>
      <Header />
      <Main name="kim" work="html" />
      <Main name="mi" work="css" />
      <Main name="seon" work="js" />{" "}
      {/*모듈화의 장점 여러번 사용가능! - 재사용*/}
      <Main name="mi_suuun" work="react" />
      <Main name="mi_suuun2" />
      <Button primary>Primary Button</Button>
      <Footer />
    </Wrapper>
  );
};

export default App;
