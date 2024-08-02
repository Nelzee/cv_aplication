import { useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Display from "./components/Display";

function App() {
  const attributes = [
    { name: "first name", cartegory: "basic info" },
    { name: "last name", cartegory: "basic info" },
    { name: "email", cartegory: "basic info" },
    { name: "phone", cartegory: "basic info" },
    { name: "school name", cartegory: "educational" },
    { name: "program", cartegory: "educational" },
    { name: "company name", cartegory: "practical" },
    { name: "position", cartegory: "practical" },
  ];

  const [info, setInfo] = useState({
    ["first name"]: "",
    ["last name"]: "",
    email: "",
    phone: "",
    ["school name"]: "",
    program: "",
    ["company name"]: "",
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
