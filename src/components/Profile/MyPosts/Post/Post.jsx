import React from "react";
import classes from './Post.module.css';
import PostELs from './postEL';



const Post = (props) => {
    let postsEl =
        props.posts.map(p=><PostELs name={p.name} likeCount={p.likeCount} img={p.img} post={p.post}/>)
    return (
        <div>
            {postsEl}йцукйцукйц
        </div>

    )
}

export default Post;