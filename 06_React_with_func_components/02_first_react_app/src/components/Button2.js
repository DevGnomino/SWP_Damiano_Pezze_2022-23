import React from 'react'
import styles from "./Button2.module.css"


export default function Button2(props) {
  return (
    <div className={styles.main} onClick={() => {
      alert(props.val + " has been clicked");
    }}>{props.val}</div>
  )
}
