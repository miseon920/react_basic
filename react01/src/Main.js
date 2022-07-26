const Main = ({ name, work }) => {
  //props에 kim을 받아오므로 kim으로 교체가능
  //const { kim } = props;
  return (
    <main>
      {name}은 {work} 공부합니다.
      {/* {props ? 1 : 0}
      {props.kim}
      {console.log(props)} */}
    </main>
  );
  //jsx안에 js를 쓸때는 {}안에 써주어야함!
  //return안에 쓸때에는 if,for문을 삼항 연산자로 기입해야함
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
};

//★props 데이터 중에 값이 없는 경우 기본 값을 설정하는 방법
Main.defaultProps = {
  work: "놀고싶다",
};
export default Main;

/*
 ()안에 매개변수로 props가 들어감 / 매개변수이므로 이름을 달리할 수 있음
 props는 데이터를 전달함!
*/
