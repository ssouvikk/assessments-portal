import Axios from 'axios'
import styles from './TopicDetails.module.css'
import React, { useEffect, useState } from 'react'
import { logger } from '../../Utilities/CommonMethod'
import SubTopic from '../../Component/SubTopic/SubTopic'

const TopicDetails = (props) => {
    const [data, setdata] = useState({ topicDetails: {} })

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/2')
            .then((resp) => {
                const thatData = resp.data.value.filter((item, pos) => pos === parseInt(props.match.params.id))
                setdata({ ...thatData[0] })
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id])

    return (
        <div className={styles.container}>
            <div className={styles.topic}>
                <img src={data.img} alt='selected topic' />
                <div>
                    <h1> {data.name} </h1>
                    {data.units > 0 ? (
                        <>
                            <h3> {data.topicDetails.avgScore} %</h3>
                            <p className={styles.avgScore}>Avg Score</p>
                        </>
                    ) : ''}
                </div>
            </div>
            <div className={styles.subTopic}>
                {data.units !== 0 ? (
                    data.topicDetails.topics !== undefined ? data.topicDetails.topics.map((item, pos) => <SubTopic id={props.match.params.id} pos={pos} key={pos} data={item} />) : ''
                ) : <h2>No topics available</h2>}
            </div>
        </div>
    )
}

export default TopicDetails
