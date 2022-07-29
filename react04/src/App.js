import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const monga = "오잉?";
  const DATA = [
    { id: 1, name: "kim", content: "my", date: 20220727 },
    { id: 2, name: "kim2" },
    { id: 3, name: "kim3" },
    { id: 4, name: "kim4" },
  ];
  return (
    <>
      <Header monga={monga} member={DATA} /> {/*컴포넌트임_컴포넌트는 대문자!*/}
      {/* <div>컴포넌트아님</div> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
