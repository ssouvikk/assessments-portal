import React from 'react'
import styles from './Topic.module.css'

const Topic = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.data.img} alt='topic' />
            <div className={styles.info}>
                <h3>{props.data.name}</h3>
                <span>{props.data.units} units</span>
            </div>
        </div>
    )
}

export default Topic
