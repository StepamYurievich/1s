import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../comman/FormsControll/FormsControls";

const MyPosts=React.memo(props => {
    const AddNewPost = (values) => {
        props.addPostCreator(values.newPostText);
    }
    return (
        <div className={classes.profile_inner}>
            My Posts
            <PostReduxForm onSubmit={AddNewPost}/>
            <div className={classes.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    )
})

const MaxLengthCreator = maxLengthCreator(10)
const MyNewPost = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Пост..."}
                       name={"newPostText"}
                       component={Textarea}
                       validate={[required,MaxLengthCreator]}/>
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form:"ProfileAddNewPostForm"})(MyNewPost)
export default MyPosts;