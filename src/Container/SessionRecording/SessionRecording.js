import React from 'react'
import styles from './SessionRecording.module.css'

const SessionRecording = () => {
    const data = {
        vimeoId: 462708845
    }
    return (
        <div className={styles.container}>
            <iframe src={'https://player.vimeo.com/video/' + data.vimeoId} title='session video' />
        </div>
    )
}

export default SessionRecording