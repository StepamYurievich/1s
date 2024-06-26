import {usersAPI} from "../Api/Api";
import axios from "axios";
import {updateObjArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const TOGGLE_IS_FRCHING = 'TOGGLE_IS_FRCHING';
const IS_FOLLOWING_PROGRESS = 'IS_FOLLOVING_PROGRESS'


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:updateObjArray(state.users,"id",action.userId,{followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users:updateObjArray(state.users,"id",action.userId,{followed: false})
            }
        case SET_USERS: {
            return ({...state, users: action.users})
        }
        case SET_CURRENT_PAGE: {
            return ({...state, currentPage: action.currentPage})
        }
        case SET_TOTAL_USERS: {
            return ({...state, totalUsersCount: action.count})
        }
        case TOGGLE_IS_FRCHING:
            return ({...state, isFetching: action.isFetching})
        case IS_FOLLOWING_PROGRESS:
            return ({
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            })
        default:
            return state

    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const serCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FRCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(serCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}

export const follow = (userId) => {
    return async (dispatch)=>{
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
    }
}
export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch.setUsersProfile(response.data)
    }
}
export default usersReducer