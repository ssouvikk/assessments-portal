import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { classroom } from "../../Utilities/ApiDatas";
import { logger } from "../../Utilities/CommonMethod";
import { ROUTE_ENDPOINT } from "../../Utilities/RouteEndPoint";
import Styles from "./Grades.module.css";

const Grades = (props) => {

    const [data, setdata] = useState({})

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/3')
            .then((resp) => {
                const thatData = resp.data.value
                    // const thatData = classroom
                    .filter((item, pos) => pos === parseInt(props.match.params.id1))[0].modules
                    .filter((item, pos) => pos === parseInt(props.match.params.id2))[0].curriculum
                setdata({ ...thatData, Rank: 1, SHS: "50.0", Score: "88" })
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id1, props.match.params.id2])

    return (
        <>
            <ul className={Styles.Navtabs}>
                <li className={Styles.NavItem}>
                    <Link to={`${ROUTE_ENDPOINT.CURRICULUM}/${props.match.params.id1}/${props.match.params.id2}`} className={`${Styles.Navlink}`} >Units</Link>
                </li>
                <li className={Styles.NavItem}>
                    <Link to={`${ROUTE_ENDPOINT.GRADE}/${props.match.params.id1}/${props.match.params.id2}`} className={`${Styles.Navlink} ${Styles.selected}`} >Grade</Link>
                </li>
            </ul>
            <div className={Styles.ProgramDashBoard}>
                <div className={Styles.CardProgram}>
                    <div className={Styles.container}>
                        <img src={data.img} className={Styles.Icon} alt='gradeImg' />
                        <div className={Styles.CardContainer}>
                            <div className={Styles.Heading}>{data.name}</div>
                            <div className={Styles.Flexrow}>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>{data.Rank}</span>
                                    <span className={Styles.Parameter}>Class Rank</span>
                                </div>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>  {data.Score} %</span>
                                    <span className={Styles.Parameter}>Avg Score</span>
                                </div>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>{data.SHS}</span>
                                    <span className={Styles.Parameter}>SHS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Status}>
                        <span>No Topics Available</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Grades;