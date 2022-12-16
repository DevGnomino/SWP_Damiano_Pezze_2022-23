import React, { useState } from 'react'
import styles from "./Button.module.css"

export default function Button(props) {
  const [isOn, setIsOn] = useState(false); //Man kann sich Dinge merken mit State
  return (
    <div className={isOn?styles.isOn:styles.isOff} onClick={() => {
      // alert("clicked");
      setIsOn(!isOn);
    }}
    >
      {props.name} ist {props.age} Jahre alt. {isOn?"On":"Off"} {/*Simple if else Verzweigung mit ?*/}
    </div>
  )
}