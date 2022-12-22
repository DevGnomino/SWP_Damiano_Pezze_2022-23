import React from 'react'
import styles from "./List.module.css"

export default function List(props) {
    const listPoints = props.listPoints;
    const listItems = listPoints.map((listPoint) => <li>{listPoint}</li>);
    return (
        <div className={styles.list}>
            <ul>{listItems}</ul>
        </div>
    );
}
