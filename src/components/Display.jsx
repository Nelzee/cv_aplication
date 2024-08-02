import React from "react";

const Display = ({ attributes }) => {
  return (
    <div className="right">
      <div>
        {attributes.map((attribute, index) => {
          return (
            <div key={index}>
              <h3>{attribute.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
