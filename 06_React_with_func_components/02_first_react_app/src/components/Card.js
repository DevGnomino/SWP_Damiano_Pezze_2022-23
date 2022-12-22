import React from 'react'
import styles from "./Card.module.css"

export default function Card(props) {
  return (
    <div className={styles.card}>
        <img src={props.imgUrl} alt="Hier sollte ein Bild sein"></img>
        <h4>{props.firstname} {props.lastname}</h4>
        <p>{props.jobDesc}</p>
    </div>
  )
}
