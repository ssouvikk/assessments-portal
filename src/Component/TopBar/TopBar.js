import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_ENDPOINT } from '../../Utilities/RouteEndPoint'
import styles from './Topbar.module.css'

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.halfNav}>
                {/* <Link className={styles.navlink} to={ROUTE_ENDPOINT.HOME_PAGE}> */}
                <img className={styles.logo} src={`https://assessments.edyoda.com/static/images/logo.png`} alt="siteLogo" />
                {/* </Link> */}
                <Link className={styles.navlink} to={ROUTE_ENDPOINT.HOME_PAGE} > Practice arena </Link>
                <Link className={styles.navlink} to={ROUTE_ENDPOINT.CLASS_ROOM} > classroom </Link>
                {/* <Link className={styles.navlink} to="/" > view jobs </Link> */}
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
