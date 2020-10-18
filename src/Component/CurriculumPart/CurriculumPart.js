import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_ENDPOINT } from "../../Utilities/RouteEndPoint";
import styles from './CurriculumPart.module.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, } from 'react-accessible-accordion';


const CurriculumPart = (props) => {
    return (
        <>
            <div className={styles.LeftSectionWrapper}>
                <section className={styles.ModuleDetails}>
                    <div className={styles.ModulePage}>
                        <div>
                            <img
                                src={props.data.img}
                                alt={props.data.name}
                                className={styles.ModulePic}
                            />
                        </div>
                        <div className={styles.Subtitle}>
                            <span className={styles.Text}>{props.data.name} </span>
                        </div>
                    </div>
                    <div className={styles.ModuleAttendanceContainer}>
                        <div>
                            <p className={styles.Label}>grades : <span> {props.data.grade} </span> </p>
                        </div>
                        <div>
                            <p className={styles.Label}>total attendance : <span> {props.data.Total_Attendance} </span></p>
                        </div>
                        <div>
                            <p className={styles.Label}>last week attendance : <span> {props.data.LastWeekAttendance} </span> </p>
                        </div>
                    </div>
                </section>

                <section className={styles.ModulePlanContainer}>
                    <div className={styles.ModulePlan}>module plan</div>
                    <div className={styles.WeekDetails}>Week - 1</div>
                </section>
            </div>

            <div>
                <Accordion allowZeroExpanded>
                    {props.data.accordian.map((item, pos) => (
                        <AccordionItem key={pos}>
                            <div className={styles.ModuleContent} >
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Day {pos + 1} |  {item}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div>
                                        <div className={styles.PlanLink}>
                                            <Link to={ROUTE_ENDPOINT.SESSION_PLAN}>Session Plan</Link>
                                        </div>
                                        <div className={styles.PlanLink}>
                                            <Link to={ROUTE_ENDPOINT.SESSION_RECORDING}>Session Recording</Link>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default CurriculumPart;