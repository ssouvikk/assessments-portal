import React from 'react'
import styles from './SessionPlan.module.css'

const getTopic = (singleTopic, index) => {
    return (
        <div className={styles.singleTopic} key={index}>
            <p> {singleTopic.name} </p>
            <ol>
                {singleTopic.subTopics.map((item, pos) => <li key={pos}> <p> {item} </p> </li>)}
            </ol>
        </div>
    )
}


const SessionPlan = () => {
    const data = {
        topics: [
            {
                name: "AWS Simple Storage Service",
                subTopics: ['More features of S3', 'Lifecycle Management', 'S3 Security']
            },
            {
                name: "AWS EC2 instances",
                subTopics: ['What is an ec2 instance', 'Types and Features of an instance', 'Launch an EC2 instance', 'Security Group', 'Public IP and Private IP']
            },
        ],
        sessionLink: 'https://zekelabs.zoom.us/meeting/register/tZYufuChrj8qHNElsq4QJSq6f3rQKQie7WFA',
        psw: 'AWS-LIVE',
    }
    return (
        <div className={styles.container} >
            <h1 className={styles.mainHeading}>Session plan</h1>
            <h3>Topics</h3>
            { data.topics.map((item, index) => getTopic(item, index))}
            <h3>Session link</h3>
            <p> {data.sessionLink} </p>
            <h3> Password </h3>
            <p> {data.psw} </p>
        </div>
    )
}

export default SessionPlan
