import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_ENDPOINT } from '../../Utilities/RouteEndPoint'
import styles from './Topic.module.css'

const Topic = (props) => {
    return (
        <Link to={`${ROUTE_ENDPOINT.TOPIC_DETAILS}/${props.index}`} className={styles.container} >
            <img src={props.data.img} alt='topic' />
            <div className={styles.info}>
                <h3>{props.data.name}</h3>
                <span>{props.data.units} units</span>
            </div>
        </Link>
    )
}

export default Topic
