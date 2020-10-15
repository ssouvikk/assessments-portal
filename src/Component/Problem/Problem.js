import React from 'react'
import styles from './Problem.module.css'

const Problem = (props) => {
    const { title, level, maxScore } = props.data
    return (
        <div className={styles.container}>
            <div className={styles.pblmBtn}>problem {props.pos + 1} </div>
            <div className={styles.details}>
                <div>
                    <p>add value in tupple</p>
                    <p>add value in tupple</p>
                </div>
                <div className={styles.solveBtn}> Solve Problem </div>
            </div>
        </div>
    )
}

export default Problem
