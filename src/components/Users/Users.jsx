import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../asets/images/user_default.png'
import {NavLink} from "react-router-dom";
import UsersPaginator from "../comman/Paginator/UsersPaginator";



let Users = ({totalUsersCount,pageSize,onPageChange,currentPage,...props}) => {

    return (
        <div className={classes.container_wrapper}>
            <UsersPaginator totalUsersCount={totalUsersCount} pageSize={pageSize}
            onPageChange={onPageChange} currentPage={currentPage}/>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.container}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt='w' src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={classes.user_img}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id=>id===u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span className={classes.container_span_2}>
                                <div className={classes.container_span_items}>
                                    <div className={classes.container_span_2_items_1}>
                                        <div>
                                            {u.name}
                                        </div>
                                        <div>
                                            {u.status}
                                        </div>
                                    </div>
                                    <div className={classes.container_span_2_items_2}>
                                        <div>
                                            u.location.city
                                        </div>
                                        <div>
                                            u.location.country
                                        </div>
                                    </div>
                                </div>
                        </span>

                    </div>
                )
            }
        </div>
    )
}

export default Users;