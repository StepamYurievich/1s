import React from "react";
import classes from './Dialog.module.css';
import MassesEl from "./DialogItem/massesEl";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../comman/FormsControll/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validator";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let massesEl =
        state.dialogs.map
        (s => <MassesEl ava={s.ava} name={s.name} id={s.id}/>)
    let massagesEl =
        state.massages.map
        (p => <div className={classes.massage}>{p.massage}</div>)
    if (!props.isAuth) return <Navigate to="/login"/>
    let AddMassageNew = (values) => {
        props.addMassageCreator(values.newMassageText)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {massesEl}
            </div>
            <div className={classes.jops_inner}>
                {massagesEl}
                <AddMassageReduxForm onSubmit={AddMassageNew}/>
            </div>
        </div>
    )
}
const MaxLength50 = maxLengthCreator(50)
const AddMassage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.jops}>
                <Field className={classes.jops_textarea}
                       placeholder={"Ваше сообщение"}
                       name={"newMassageText"}
                       component={Textarea}
                       validate={[required,MaxLength50]}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const AddMassageReduxForm = reduxForm({form: "dialogAddMassageForm"})(AddMassage)
export default Dialogs;