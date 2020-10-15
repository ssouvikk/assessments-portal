import React from 'react'
import SubTopic from '../../Component/SubTopic/SubTopic'
import styles from './TopicDetails.module.css'


const TopicDetails = () => {
    const data = {
        topic: 'Python',
        score: 20.20,
        topicInDetail: [
            {
                title: 'operator and conditional statements',
                score: 85,
                fullMarks: 150,
                submissionDate: '2020-08-25'
            },
            {
                title: 'operator and conditional statements',
            },
            {
                title: 'operator and conditional statements',
                score: 75,
                fullMarks: 100,
                submissionDate: '2020-08-25'
            },
            {
                title: 'looping statements',
            }, {
                title: 'looping statements',
            }, {
                title: 'looping statements',
            }, {
                title: 'looping statements',
            }, {
                title: 'looping statements',
            },
        ],
    }
    const { topicInDetail, topic, score } = data
    return (
        <div className={styles.container}>
            <div className={styles.topic}>
                <img src='https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png' alt='selected topic' />
                <div>
                    <h1> {topic} </h1>
                    <h3> {score} %</h3>
                    <p className={styles.avgScore}>Avg Score</p>
                </div>
            </div>
            <div className={styles.subTopic}>
                {topicInDetail.map((item, pos) => <SubTopic pos={pos} key={pos} data={item} />)}
            </div>
        </div>
    )
}

export default TopicDetails
