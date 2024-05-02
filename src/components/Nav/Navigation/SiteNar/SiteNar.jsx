import React, {createRef} from "react";
import classes from './SiteNar.module.css'
import SiteBarName from "./SiteBarName/SiteBarName";
import {updateSiteNarText} from "../../../../redux/friends_reducer";

const SiteNar = (props) => {
    let newSiteNatCreator = React.createRef()

    let friendsEl=
        props.friend.map(p=><SiteBarName  names={p.names}/>)
    let omSiteNatChange =()=>{
        let text = newSiteNatCreator.current.value;
        props.updateSiteNarText(text)
    }
    return(
        <div className={classes.sitenar}>
            {friendsEl}
            <div>
                <textarea onChange={omSiteNatChange}
                            value={props.newSiteNarText}
                ref={newSiteNatCreator}></textarea>
            </div>
        </div>
    )
}
export default SiteNar