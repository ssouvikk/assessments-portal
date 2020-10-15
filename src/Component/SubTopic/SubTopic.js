import React from 'react'
import styles from './SubTopic.module.css'

const SubTopic = (props) => {
    const { title, score, fullMarks, submissionDate } = props.data

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.heading}>  {props.pos + 1}). {title} </h3>
                {fullMarks && <p className={styles.date}> Submission Date :  {submissionDate} </p>}
            </div>
            {fullMarks === undefined ? (
                <p className={styles.pending}>Pending</p>
            ) : (
                    <p className={styles.score}> {score} / {fullMarks} </p>
                )}
        </div>
    )
}

export default SubTopic
