export default function Header(props) {
  //export 동시에 바로 쓰는법
  return (
    <div style={props.style}>
      {"이름 : " + props.name + "나이: " + props.age}
    </div>
  );
  // 프로퍼티를 가져다 쓸때 props를 씀! 프로퍼티들!!
}
