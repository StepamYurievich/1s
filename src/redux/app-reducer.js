import {authAPI} from "../Api/Api";
import {stopSubmit} from "redux-form";
import {getUserData} from "./auth-reducer";

const SET_INITIALIZED_DATA ="SET_INITIALIZED_DATA";
const initialState = {
    initialized:false,
}
const appReducer = (state=initialState,action)=>{
    switch (action.type){
        case SET_INITIALIZED_DATA:
            return{
                ...state,
                initialized:true,
            }
        default:
            return state
    }
}
export const initializedSuccess =(userId,email,login,isAuth)=>({type:SET_INITIALIZED_DATA})

export const initializeApp = ()=>(dispatch)=>{
    let dispatchResult = dispatch(getUserData())
    Promise.all([dispatchResult])
        .then(()=>{
            dispatch(initializedSuccess())
        })

}


export default appReducer