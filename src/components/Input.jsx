import React from "react";

const Input = ({ setState }) => {
  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setState(e.target.value);
  };

  return (
    <div>
      <input name="name" type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Input;
