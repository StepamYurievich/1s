import {profileAPI, usersAPI} from "../Api/Api";
const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE=' SET_USERS_PROFILE';
const SET_STATUS ='SET_STATUS;'

let initialState ={
    posts: [
        {
            name: 'Stepan',
            likeCount: 12,
            img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
            post: "Yo1"
        },
        {
            name: 'Oksana',
            likeCount: 13,
            img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
            post: "Yo2"
        },
        {
            name: 'Nikita',
            likeCount: 114,
            img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
            post: "Yo3"
        },
        {
            name: 'Kirill',
            likeCount: 13,
            img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
            post: "Yo4"
        },
        {
            name: 'Maksim',
            likeCount: 151,
            img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
            post: "Yo5"
        }],
    profile:null,
    contact:[],
    status:"",
}

const profileReducer =(state=initialState,action)=> {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                likeCount: 0,
                img: "https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg",
                post: action.newPostText,
            }
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText:'',
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status:action.status,
            }
        }
        case SET_USERS_PROFILE:
            return {...state,profile:action.profile}

        default:
            return state
    }
}
export const addPostCreator=(newPostText)=>({type:ADD_POST,newPostText})
export const setUsersProfile=(profile)=>({type:SET_USERS_PROFILE,profile})
export const setStatus=(status)=>({type:SET_STATUS,status})
export const setUpdateProfileStatus=(status)=>({type:SET_STATUS,status})


export const getUserProfile = (userId) => async (dispatch) => {

    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default profileReducer