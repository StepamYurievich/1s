import React from "react";
import classes from "../Dialog.module.css";
import {NavLink} from "react-router-dom";

const MassesEl = (props) => {
    return(
        <NavLink to={'/dialogs/'+ props.id} className={classes.dialog_items}>
            <img src={props.ava} alt=""/>
            {props.name}
        </NavLink>
    )
}

export default MassesEl