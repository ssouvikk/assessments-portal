import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Topic from '../../Component/Topic/Topic'
import { logger } from '../../Utilities/CommonMethod'
import styles from './HomePage.module.css'

const HomePage = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io//ProjectDatas/2')
            .then((resp) => {
                setdata([...resp.data.value])
            })
            .catch(() => {
                logger('data not found')
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeading}>Practice Arena</h1>
            <p className={styles.skillsPara}>All Skills</p>
            <div className={styles.topics}>
                {data.map((item, pos) => <Topic index={pos} data={item} key={pos} />)}
            </div>
        </div>
    )
}

export default HomePage
