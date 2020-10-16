import React from 'react'
import styles from './Problem.module.css'

const Problem = (props) => {
    const { title, level, maxScore } = props.data
    return (
        <div className={`${styles.container} ${styles[level + 'Border']}`}>
            <span className={`${styles.pblmBtn} ${styles[level]}`}>problem {props.pos + 1} </span>
            <div className={styles.details}>
                <div>
                    <p> {title} </p>
                    <p> level : {level} , max score : {maxScore} </p>
                </div>
                <div className={styles.solveBtn}> Solve Problem </div>
            </div>
        </div>
    )
}

export default Problem
