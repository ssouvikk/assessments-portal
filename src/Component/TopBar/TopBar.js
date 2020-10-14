import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Topbar.module.css'

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.halfNav}>
                <img className={styles.logo} src={`https://assessments.edyoda.com/static/images/logo.png`} alt="siteLogo" />
                <Link className={styles.navlink} to="/" > Practice arena </Link>
                <Link className={styles.navlink} to="/" > classroom </Link>
                <Link className={styles.navlink} to="/" > view jobs </Link>
            </div>
            <div className={styles.halfNav}>
                <span>
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    <span className={styles.notification}>1</span>
                </span>
                <span className={styles.email}>souvik@shubham.sonu <i className="fa fa-caret-down" aria-hidden="true"></i> </span>
            </div>
        </div>
    )
}

export default TopBar
