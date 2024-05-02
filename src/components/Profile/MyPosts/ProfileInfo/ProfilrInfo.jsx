import React from "react";
import classes from './Profile.module.css';
import Preloader from "../../../comman/preloader";
import userPhoto from "../../../../asets/images/user_default.png";
import ProfileStatusVithHooks from "./ProfileStatusVithHooks";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.header}>
                <img alt="dota2" src='https://cdn130.picsart.com/323297454349201.jpg'  />
            </div>

            <div className={classes.description}>
                <img src={props.profile.photos.large?props.profile.photos.large:userPhoto}/>
                <div>
                    <span>{props.profile.fullName}</span>
                    <div>
                        <ProfileStatusVithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div>
                    LookingJob
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;