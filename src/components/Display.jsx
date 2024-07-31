import React from "react";

const Display = ({ attributes }) => {
  return (
    <div className="right">
      <div>
        {attributes.map((attribute) => {
          return <h3>{attribute.name}</h3>;
        })}
      </div>
    </div>
  );
};

export default Display;
