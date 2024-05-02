import React from "react";
import classes from './../Dialog.module.css';
import {addMassageActionCreator,updateMassageCreator} from "../../../../../redux/state";
import Field from "redux-form/lib/Field";
import {reduxForm} from "redux-form";


const Massages =(props)=> {
    let state=props.store.getState().dialogsPage;
    let massagesEl =
        state.dialogsPage.massages.map(p => <div className={classes.massage}>{p.massage}</div>)

    let newMassage=React.createRef();

    let addMassage=()=>{
        props.dispatch(addMassageActionCreator())
    }
    let onChangeMassage=(e)=>{
        let body=e.target.value;
        props.store.dispatch(updateMassageCreator(body))

    }
    return (
        <div className={classes.jops_inner}>
            {massagesEl}
            <MassageReduxForm />
        </div>

    )
}
const AddMassagesForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit} className={classes.jops}>
            <div>
                <Field className={classes.jops_textarea}
                       placeholder={"Сообщение..."}
                       component={"textarea"}
                       name={"newMassageBody"}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const MassageReduxForm = reduxForm({form:"dialogAddMassageForm"})(AddMassagesForm)
export default Massages;