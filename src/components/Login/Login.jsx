import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../comman/FormsControll/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom"
import classes from './../comman/FormsControll/FormsControls.module.css'

const MaxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Почта"}
                       name={"email"}
                       component={Input}
                       validate={[required,MaxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Пароль"}
                       name={"password"}
                       component={Input}
                       validate={[required,MaxLength20]}
                        type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/> Запомнить меня
            </div>
            {error && <div className={classes.formCommonError} >{error}</div>}
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login)