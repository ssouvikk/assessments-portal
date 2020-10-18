import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { logger } from '../../Utilities/CommonMethod'
import Courses from '../../Component/Courses/Courses'
import styles from './ClassRoom.module.css'

const ClassRoomPage = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io//ProjectDatas/3')
            .then((resp) => {
                setdata([...resp.data.value])
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id])
    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeading}>Classroom</h1>
            <p className={styles.skillsPara}>Your Enrolled Courses</p>
            <div className={styles.topics}>
                {data.map((item, pos) => <Courses index={pos} data={item} key={pos} />)}
            </div>
        </div>
    )
}

export default ClassRoomPage;