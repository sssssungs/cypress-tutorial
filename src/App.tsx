import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [text3, setText3] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setText3("text3");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>text: {text}</p>
        <div data-testid={"text3"}>{text3}</div>
        <button onClick={() => setText("clicked!!")}>textButton</button>
        <input onChange={(e) => setText2(e.target.value)} value={text2} />
      </header>
    </div>
  );
}

export default App;
