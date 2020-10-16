import React from 'react'
import Problem from '../../Component/Problem/Problem'
import styles from './ProblemList.module.css'

const ProblemList = () => {
    const data = [
        {
            title: 'crate list from string',
            level: 'easy',
            maxScore: 15,
        },
        {
            title: 'crate list from string',
            level: 'med',
            maxScore: 15,
        },
        {
            title: 'crate list from string',
            level: 'hard',
            maxScore: 15,
        },
        {
            title: 'crate list from string',
            level: 'easy',
            maxScore: 15,
        },
        {
            title: 'crate list from string',
            level: 'hard',
            maxScore: 15,
        }, {
            title: 'crate list from string',
            level: 'med',
            maxScore: 15,
        },
    ]
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
