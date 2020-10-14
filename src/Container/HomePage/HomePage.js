import React from 'react'
import Topic from '../../Component/Topic/Topic'
import styles from './HomePage.module.css'

const HomePage = () => {
    const data = [
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
        {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        }, {
            units: 101,
            name: 'python',
            img: 'https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png',
        },
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeading}>Practise Arena</h1>
            <p className={styles.skillsPara}>All Skills</p>
            <div className={styles.topics}>
                {data.map((item, pos) => <Topic data={item} key={pos} />)}
            </div>
        </div>
    )
}

export default HomePage
