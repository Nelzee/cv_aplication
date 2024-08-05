import React from "react";

const Display = ({ attributes, display, state }) => {
  console.log(display);

  return (
    <div className="right">
      <div>
        {attributes.map((attribute, index) => {
          return (
            <div key={index}>
              <h3>{attribute.name}</h3>
              {display && <h4>{state?.[attribute?.name]}</h4>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
