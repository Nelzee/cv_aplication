import React, { useState } from "react";
import Input from "./Input";

const Inputs = ({ setState, state, attributes, display, setDisplay }) => {
  const handleEdit = () => {
    setDisplay(() => false);
  };
  const handleSubmit = () => {
    setDisplay(() => true);
  };

  return (
    <div className="left">
      <div>
        <h2>Personal Information</h2>
        {attributes
          .filter((attribute) => attribute.cartegory === "basic info")
          .map((attribute, index) => {
            return (
              <div key={index}>
                <label htmlFor={attribute.name}>{attribute.name}</label>
                <Input
                  attribute={attribute}
                  setState={setState}
                  state={state}
                  display={display}
                />
              </div>
            );
          })}
        <h2>Education</h2>
        {attributes
          .filter((attribute) => attribute.cartegory === "educational")
          .map((attribute, index) => {
            return (
              <div key={index}>
                <label htmlFor={attribute.name}>{attribute.name}</label>
                <Input
                  attribute={attribute}
                  setState={setState}
                  state={state}
                  display={display}
                />
              </div>
            );
          })}
        <h2>Practical Experiance</h2>
        {attributes
          .filter((attribute) => attribute.cartegory === "practical")
          .map((attribute, index) => {
            return (
              <div key={index}>
                <label htmlFor={attribute.name}>{attribute.name}</label>
                <Input
                  attribute={attribute}
                  setState={setState}
                  state={state}
                  display={display}
                />
              </div>
            );
          })}
        <button name="edit" onClick={handleEdit}>
          Edit
        </button>
        <button name="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Inputs;
