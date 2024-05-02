import React from "react";
import Profile from "../../Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile, updateStatus
} from "./../../../../redux/profIle_reducer"
import {Navigate,useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import { useEffect } from "react";


export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileComponent extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.logUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login'/>
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    logUserId:state.auth.userId,
    isAuth:state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter
)(ProfileComponent);

