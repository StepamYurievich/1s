import axios from "axios";
const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const  instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY":'6368712a-41fa-4dc8-9992-42e643e0191b'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
})
export const usersAPI ={
    getUsers(currentPage, pageSize){
        return instance.get( baseURL + `/users?page=${currentPage}&count=${pageSize}`, )
            .then(response=> {
                return response.data
            })
    },
    follow(userId){
        return  instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI ={
    getProfile(userId){
        return instance.get(`profile/`+userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/`+userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status:status});
    },
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
}
