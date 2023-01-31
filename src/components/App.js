import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  //code here
  const [inputValue, setInputValue] = useState(0)
  return (
    <div id="main">
      <ChildComponent>
        <input id='input' onChange={(event) => setInputValue(event.target.value)} />
        <p id='output'>{Math.pow(inputValue, 2)}</p>
      </ChildComponent>
    </div>
  )
}


export default App;
