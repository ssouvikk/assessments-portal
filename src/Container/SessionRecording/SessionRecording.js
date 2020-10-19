import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { classroom } from '../../Utilities/ApiDatas'
import { logger } from '../../Utilities/CommonMethod'
import styles from './SessionRecording.module.css'

const SessionRecording = (props) => {

    const [data, setdata] = useState({})

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/3')
            .then((resp) => {
                const thatData = resp.data.value
                    // const thatData = classroom
                    .filter((item, pos) => pos === parseInt(props.match.params.id1))[0].modules
                    .filter((item, pos) => pos === parseInt(props.match.params.id2))[0].curriculum.accordian
                    .filter((item, pos) => pos === parseInt(props.match.params.id3))[0].recording
                setdata({ vimeoId: thatData })
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id1, props.match.params.id2, props.match.params.id3])
    return (
        <div className={styles.container}>
            <iframe src={'https://player.vimeo.com/video/' + data.vimeoId} title='session video' />
        </div>
    )
}

export default SessionRecording