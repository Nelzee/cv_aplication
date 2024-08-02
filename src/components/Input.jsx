import React from "react";

const Input = ({ setState, attribute, state }) => {
  const handleChange = (e) => {
    console.log(state);
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
        value={state?.attribute?.name}
      />
    </div>
  );
};

export default Input;
