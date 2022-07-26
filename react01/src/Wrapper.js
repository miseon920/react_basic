//const Wrapper01 = (props) => {
//매개변수 하나쓸때는(),두개이상일때({})
// return <div style={{ color: "green" }}>{props.children}</div>;
//Wrapper을쓰면 안에 있는것들이 안나오므로 자식을 가져와야함
//{props.children}을 써줘야함
//};
const Wrapper = ({ children }) => {
  //위의 방식을 아래방식으로도 쓸수 있음
  const style = {
    //변수방식
    marginTop: "10px",
    backgroundColor: "red",
  };
  return <div style={style}>{children}</div>;
};
/*
-스타일
#인라인 스타일
 style={{ color: "green" }}

 #인라인 스타일 문제점
 {} === {}는 false이기 때문에, 
리렌더링시에 인라인 스타일이 적용된 컴포넌트 
 일반태그가 다르다고 판단하여 돔을 새로 그리게 되어 불피요한 리로딩이 발생
style 속성의 재사용성이 떨어짐

※변수로 쓰거나 컴포넌트로 바꾸어서 사용할수있다.

-컴포넌트 참조 : https://www.daleseo.com/react-styled-components/
*/

//https://velog.io/@zero_mountain/ReactStyle-%EC%9D%B8%EB%9D%BC%EC%9D%B8%EC%8A%A4%ED%83%80%EC%9D%BC%EC%97%90-%EA%B4%80%ED%95%98%EC%97%AC

export default Wrapper;
