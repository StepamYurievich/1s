import React from "react";
import SiteNar from "./SiteNar";
import {connect} from "react-redux";
import {updateSiteNarText} from "../../../../redux/friends_reducer";


let mapStateContainer = (state) => {
    return {
        friend: state.sidebar.friend
    }
}

let mapDispatchContainer =(dispatch)=>{
    return{
        updateSiteNarText:(action)=>{
            dispatch(updateSiteNarText(action))
        }
    }
}
const StateNarContainer = connect(mapStateContainer,mapDispatchContainer)(SiteNar)
export default StateNarContainer