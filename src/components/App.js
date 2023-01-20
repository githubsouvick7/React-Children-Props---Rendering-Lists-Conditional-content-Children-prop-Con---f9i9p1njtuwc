import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [square, setSquare] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSquare(e.target.value * e.target.value);
  };

  return (
    <div id="main">
      <ChildComponent
        inputValue={inputValue}
        onChange={handleInputChange}
        square={square}
      />
    </div>
  );
}


export default App;

