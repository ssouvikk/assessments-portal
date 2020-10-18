import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { logger } from '../../Utilities/CommonMethod'
import { Link, NavLink } from 'react-router-dom';
import { ROUTE_ENDPOINT } from '../../Utilities/RouteEndPoint';
import CurriculumPart from './../../Component/CurriculumPart/CurriculumPart';
import styles from './Curriculum.module.css';
const Curriculum = (props) => {
    const [data, setdata] = useState({ accordian: [] })

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/3')
            .then((resp) => {
                const thatData = resp.data.value
                    .filter((item, pos) => pos === parseInt(props.match.params.id1))[0].modules
                    .filter((item, pos) => pos === parseInt(props.match.params.id2))[0].curriculum
                console.log(thatData);
                setdata({ ...thatData })

            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id1])

    return (
        <div>
            <ul className={styles.Navtabs}>
                <li className={styles.NavItem}>
                    <Link to={`${ROUTE_ENDPOINT.CURRICULUM}/${props.match.params.id1}/${props.match.params.id2}`} className={`${styles.Navlink} ${styles.selected}`} >Units</Link>
                </li>
                <li className={styles.NavItem}>
                    <Link to={`${ROUTE_ENDPOINT.GRADE}/${props.match.params.id1}/${props.match.params.id2}`} className={`${styles.Navlink}`} >Grade</Link>
                </li>
            </ul>
            <div className={styles.MainContainer}>
                <CurriculumPart data={data} />
                {/* {data.map((item, pos) => <CurriculumPart pos={pos} key={pos} data={item} />)} */}
            </div>

        </div>
    )
}

export default Curriculum;