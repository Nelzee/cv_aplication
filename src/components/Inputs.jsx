import React, { useState } from "react";
import Input from "./Input";

const Inputs = ({ setState, state, attributes }) => {
  return (
    <div className="left">
      <div>
        {attributes.map((attribute) => {
          return (
            <div>
              <label htmlFor={attribute.name}>{attribute.name}</label>
              <Input attribute={attribute} setState={setState} state={state} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inputs;
