import React, { useState } from 'react'
import "../assets/css/Login.css"
import "../assets/css/App.css"
import { Button } from 'reactstrap';

// Buttons: https://reactstrap.github.io/?path=/docs/components-button--button

export default function Login() {

  const [ code, setCode ] = useState(0);

  const handlePress = (e) => {
    setCode(...code, e.target.value)
  }

  return (
    <div id="loginWrapper">
      <p>Login</p>
      <span className='loginRow'>{code}</span>
      <div className="loginRow">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
      <div className="loginRow">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </div>
      <div className="loginRow">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </div>
      <div className="loginRow">
        <Button>1</Button>
        <Button>0</Button>
        <Button>C</Button>
      </div>
    </div>
  )
}
