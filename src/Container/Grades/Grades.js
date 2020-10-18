import React from "react";
import Styles from "./Grades.module.css";

const Grades = () => {
    const GradeData = {
        heading: "Intro to AWS",
        Rank: 1,
        img:
            "https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png",
        SHS: "50.0",
    };

    return (
        <>
            <div className={Styles.ProgramDashBoard}>
                <div className={Styles.CardProgram}>
                    <div className={Styles.container}>
                        <img src={GradeData.img} className={Styles.Icon} alt='gradeImg' />
                        <div className={Styles.CardContainer}>
                            <div className={Styles.Heading}>{GradeData.heading}</div>
                            <div className={Styles.Flexrow}>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>{GradeData.Rank}</span>
                                    <span className={Styles.Parameter}>Class Rank</span>
                                </div>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>%</span>
                                    <span className={Styles.Parameter}>Avg Score</span>
                                </div>
                                <div className={Styles.FlexColumn}>
                                    <span className={Styles.Score}>{GradeData.SHS}</span>
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