import React from "react";
import classes from './Post.module.css'


const PostELs = (props) => {

    return (
        <div className={classes.item}>
            <div className={classes.item_inner}>
                <img src={props.img}
                     alt=""/>
                <div>{props.name}</div>

            </div>
            <div>
                <div>{props.post}</div>
                <span>like{props.likeCount}</span>
            </div>
        </div>
    )
}

export default PostELs