function Header(props) {
  return (
    <header>
      {props.monga}
      <ul>
        {console.log(props.member)}
        {/* {<li>props.member[0].name</li>}
        {<li>props.member[1].name</li>}
        {<li>props.member[2].name</li>}
        {<li>props.member[3].name</li>} */}

        {props.member.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}

        {/* <h1>
          <a href="">로고</a>
        </h1> */}
      </ul>
    </header>
  );
}

export default Header;
