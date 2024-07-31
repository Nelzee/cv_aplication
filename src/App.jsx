import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Display from "./components/Display";

function App() {
  const attributes = [
    { name: "firstname", value: "john", type: "text" },
    { name: "lastname", value: "doe", type: "text" },
    { name: "email", value: "john@john.com", type: "text" },
    { name: "phone", value: "+263772001002", type: "text" },
    { name: "schoolname", value: "HRE Poly", type: "text" },
    { name: "program", value: "IT", type: "text" },
    { name: "companyname", value: "InfoSec", type: "text" },
    { name: "position", value: "software developer", type: "text" },
  ];

  const [name, setName] = useState("nelson");

  return (
    <div className="container">
      <Inputs attributes={attributes} setState={setName} state={name} />
      <Display attributes={attributes} />
    </div>
  );
}

export default App;
