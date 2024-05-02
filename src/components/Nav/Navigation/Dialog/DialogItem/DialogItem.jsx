import React from "react";
import classes from './../Dialog.module.css';
import MassesEl from "./massesEl";

const DialogItems =(props)=>{
    let massesEl =
        props.state.dialogsPage.dialogs.map(s=> <MassesEl ava={s.ava} name={s.name} id={s.id}/>)
    return (
        <div className={classes.items}>
            {massesEl}
        </div>
    )
}
export default DialogItems;