//ChildComponent.js
import React from 'react'

const ChildComponent = (props) => {
//code here
 const pow = Math.pow(props.input,2);
  return (
    <div id="child">
      Find The Square <br/>
      {props.children}
    </div>
  )
}


export default ChildComponent;
