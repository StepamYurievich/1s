import React from "react";
import classes from "./FormsControls.module.css"
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validator";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div><textarea {...props} {...input}/></div>

            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div><input {...props} {...input}/></div>

            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const formControl = (placeholder,name,component,validators,props={},text="") => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
            {...props}/>{text}
    </div>
}

