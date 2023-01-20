import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  //code here
  const [inputValue, setInputValue] = useState("");
  const [square, setSquare] = useState(0);

  const handlechange = (e) => {
    setInputValue(e.target.value);
    setSquare(e.target.value * e.target.value);
  };

  return (
    <div id="main">
      <ChildComponent />
      <input id='input' onChange={handlechange} />
      <p id='output'>{square}</p>
    </div>
  )
}


export default App;

