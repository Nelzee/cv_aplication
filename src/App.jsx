import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Inputs />
      <Display />
    </div>
  );
}

export default App;
