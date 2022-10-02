import logo from "./logo.svg";
import "./App.css";

import MyImage from "./assets/screenshot.png";

function App() {
  return (
    <div className="App">
      <img src={MyImage} alt="logo" />
      <header className="App-header">
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          This site is under construction
        </a>
      </header>
    </div>
  );
}

export default App;
