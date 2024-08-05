import React from "react";

const Input = ({ setState, attribute, state, display }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((info) => {
      return { ...info, [name]: value };
    });
  };

  return (
    <div>
      <input
        name={attribute.name}
        type="text"
        onChange={(e) => handleChange(e)}
        value={!display ? state?.[attribute?.name] : ""}
      />
    </div>
  );
};

export default Input;
