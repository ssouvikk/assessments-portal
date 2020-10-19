import Axios from 'axios'
import styles from './ProblemList.module.css'
import React, { useState, useEffect } from 'react'
import Problem from '../../Component/Problem/Problem'
import { logger } from '../../Utilities/CommonMethod'

const ProblemList = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/2')
            .then((resp) => {
                const thatData = resp.data.value.filter((item, pos) => pos === parseInt(props.match.params.id))
                setdata([...thatData[0].topicDetails.problems])
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id])

    return (
        <div className={styles.container}>
            <h1>Problems</h1>
            <div>
                {data.map((item, pos) => <Problem key={pos} data={item} pos={pos} />)}
            </div>
        </div>
    )
}

export default ProblemList
