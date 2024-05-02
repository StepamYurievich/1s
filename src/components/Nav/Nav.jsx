import React from "react";
import classes from './Nav.module.css';
import {Link} from "react-router-dom";
import SiteNar from "./Navigation/SiteNar/SiteNar";
import StateNarContainer from "./Navigation/SiteNar/SiteNarContainer";


const Nav = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.nav_inner}>
                <div className={classes.item}>
                    <Link to='/profile' className={classes.activeLink}>
                        Profile
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/dialogs'>
                        Massages
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/music'>
                        Music
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/news'>
                        News
                    </Link>
                </div>
                <div className={classes.item}>
                    <Link to='/setting'>
                        Settings
                    </Link>
                </div>
                <Link to='/users'>
                    Users
                </Link>
                <StateNarContainer store={props.store} />
            </div>
        </div>
    )
}

export default Nav;