import {authAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA ="async/SET_USER_DATA";
const initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth:false,
}
const authReducer = (state=initialState,action)=>{
    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}
export const setUserData =(userId,email,login,isAuth)=>({type:SET_USER_DATA,data:{userId,email,login,isAuth}})

export const getUserData = () => async (dispatch) => {

    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {Id, email, login} = response.data.data;
        dispatch(setUserData(Id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getUserData())
    } else {
        let massages = response.data.messages.length > 0 ? response.data.messages[0] : 'Ошибка';
        dispatch(stopSubmit("login", {_error: massages}));
    }
}
export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}



export default authReducer