import React, { useState } from "react";

const Inputs = () => {
  const [information, setInformation] = useState({
    name: "name",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformation((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <div className="left">
      <input
        name="name"
        type="text"
        value={information.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Inputs;
