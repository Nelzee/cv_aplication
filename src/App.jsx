import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Display from "./components/Display";

function App() {
  const attributes = {
    firstname: { value: "john", type: "text" },
    lastname: { value: "doe", type: "text" },
    email: { value: "john@john.com", type: "text" },
    phone: { value: "+263772001002", type: "text" },
    schoolName: { value: "HRE Poly", type: "text" },
    program: { value: "IT", type: "text" },
    companyName: { value: "InfoSec", type: "text" },
    position: { value: "software developer", type: "text" },
  };
  const [name, setName] = useState("nelson");

  return (
    <div className="container">
      <Inputs attributes={attributes} setState={setName} state={name} />
      <Display />
    </div>
  );
}

export default App;
