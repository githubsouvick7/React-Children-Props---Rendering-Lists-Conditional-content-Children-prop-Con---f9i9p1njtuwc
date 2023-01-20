//ChildComponent.js

import React from "react";

function ChildComponent({ inputValue, onChange, square }) {
  return (
    <div>
      <input id="input" value={inputValue} onChange={onChange} />
      <p id="output">The square of the entered number is: {square}</p>
    </div>
  );
}

export default ChildComponent;
