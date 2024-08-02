import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Display from "./components/Display";

function App() {
  const attributes = [
    { name: "first name", value: "john" },
    { name: "last name", value: "doe" },
    { name: "email", value: "john@john.com" },
    { name: "phone", value: "+263772001002" },
    { name: "school name", value: "HRE Poly" },
    { name: "program", value: "IT" },
    { name: "company name", value: "InfoSec" },
    { name: "position", value: "software developer" },
  ];

  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    schoolname: "",
    program: "",
    companyname: "",
    position: "",
  });

  return (
    <div className="container">
      <Inputs attributes={attributes} setState={setInfo} state={info} />
      <Display attributes={attributes} />
    </div>
  );
}

export default App;
