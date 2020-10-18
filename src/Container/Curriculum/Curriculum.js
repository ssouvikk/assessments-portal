import React from 'react'
import { NavLink } from 'react-router-dom';
import { ROUTE_ENDPOINT } from '../../Utilities/RouteEndPoint';
import CurriculumPart from './../../Component/CurriculumPart/CurriculumPart';
import styles from './Curriculum.module.css';
const Curriculum = () => {
    const data =
    {
        id: 1,
        name: 'Intro To AWS',
        img: 'https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png',
        grade: 'NA',
        Total_Attendance: "20.0%",
        LastWeekAttendance: "20.0%",
        accordian: [
            {
                heading: "Day - 1 | Intro To Cloud"
            },
            {
                heading: "Day - 2 | AWS Simple Storage Service"

            },
            {
                heading: "Day - 3 | AWS S3 & EC2"

            },
            {
                heading: "Day - 4 | Block Storage"

            },
            {
                heading: "Day - 5 | EC2 Advanced"

            }
        ]
    }

    return (
        <div>
            <ul className={styles.Navtabs}>
                <li className={styles.NavItem}>
                    <NavLink exact to={ROUTE_ENDPOINT.CURRICULUM} className={styles.Navlink} activeClassName={styles.selected}> Units
                    </NavLink>
                </li>
                <li className={styles.NavItem}>
                    <NavLink exact to={ROUTE_ENDPOINT.GRADE} className={styles.Navlink} >Grades</NavLink>
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