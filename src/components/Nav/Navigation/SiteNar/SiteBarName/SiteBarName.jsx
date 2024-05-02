import React from "react";
import classes from './SiteBarName.module.css'
import {NavLink} from "react-router-dom";
const SiteBarName =(props)=>{

    return (
        <NavLink className={classes.friends}>
            <div className={classes.friends_inner}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg"/>
                {props.names}
            </div>
        </NavLink>
    )
}
export default SiteBarName