import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { logger } from '../../Utilities/CommonMethod'
import Modules from '../../Component/Modules/Modules';
import styles from './ProgramDetails.module.css'

const ModuleProgress = (props) => {
    const [data, setdata] = useState({ modules: [] })

    useEffect(() => {
        Axios.get('https://5ef9a09ebc5f8f0016c66d82.mockapi.io/ProjectDatas/3')
            .then((resp) => {
                const thatData = resp.data.value.filter((item, pos) => pos === parseInt(props.match.params.id))
                setdata({ ...thatData[0] })
            })
            .catch(() => {
                logger('data not found')
            })
    }, [props.match.params.id])

    return (
        <div className={styles.PageContainer}>
            <div className={styles.BackGroundWrapper}>
                <img src={`https://assessments.edyoda.com/static/images/Only-Image.jpg`} alt="Edyoda Background" />
            </div>
            <div className={styles.CourseDetails}>
                <div>
                    <div className={styles.CourseName}>
                        {data.name}
                    </div>
                    <div className={styles.CourseCode}>
                        RB020420
                    </div>
                </div>
                <div className={styles.CourseStructure}>
                    <div className={styles.Flexrow}>
                        <img className={styles.ModuleImage} src="https://assessments.edyoda.com/static/images/Playlist%20Icon.png" alt="playlist" />
                        <div className={styles.SubSectionText}>
                            <div className={styles.SmallText}> {data.modules.length} </div>
                            <div className={styles.SmallText}>Modules</div>
                        </div>
                    </div>
                    <div className={styles.Flexrow}>
                        <img className={styles.ClockImage} src="https://assessments.edyoda.com/static/images/Clock%20Icon.png" alt="clock" />
                        <div className={styles.SubSectionText}>
                            <div className={styles.SmallText}>20</div>
                            <div className={styles.SmallText}>weeks</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.PrimaryPending}>
                <h1 className={styles.mainHeading}>Program Progress</h1>
                <div className={styles.Flexrow}>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>1</span>
                        <span className={styles.Parameter}>Class Rank</span>
                    </div>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>100.0%</span>
                        <span className={styles.Parameter}>Avg Score</span>
                    </div>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>58.29</span>
                        <span className={styles.Parameter}>Class SHS</span>
                    </div>
                </div>
            </section>
            <section className={styles.PrimaryPending}>
                <div className={styles.ModuleHeading}>Modules</div>
                <div className={styles.ModulesSection}>
                    {data.modules.map((item, pos) => <Modules idd={props.match.params.id} index={pos} data={item} key={pos} />)}
                </div>
            </section>
        </div>
    )
}

export default ModuleProgress;