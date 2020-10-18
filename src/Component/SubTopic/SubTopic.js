import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_ENDPOINT } from '../../Utilities/RouteEndPoint'
import styles from './SubTopic.module.css'

const SubTopic = (props) => {
    const { title, score, fullMarks, submissionDate } = props.data
    return (
        <div className={styles.container}>
            <div>
                <Link to={`${ROUTE_ENDPOINT.PROBLEM_LIST}/${props.id}`} >
                    <h3 className={styles.heading}>  {props.pos + 1}). {title} </h3>
                </Link>
                {fullMarks && <p className={styles.date}> Submission Date :  {submissionDate} </p>}
            </div>
            {fullMarks === undefined ? <p className={styles.pending}>Pending</p> : <p className={styles.score}> {score} / {fullMarks} </p>}
        </div>
    )
}

export default SubTopic
