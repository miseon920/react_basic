import React from "react";
import ReactDOM from "react-dom/client";
//react-dom/client 클라이언트에서 앱을 초기화하는 데 사용 되는 클라이언트별 메서드를 제공
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
