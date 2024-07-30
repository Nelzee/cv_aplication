import React, { useState } from "react";
import Input from "./Input";

const Inputs = ({ setState, state, attributes }) => {
  return (
    <div className="left">
      <Input setState={setState} state={state} />
    </div>
  );
};

export default Inputs;
