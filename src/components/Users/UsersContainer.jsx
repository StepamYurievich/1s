import React from "react";
import {connect} from "react-redux";
import {
    follow,
    serCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
} from "../../redux/users_reducer";
import Users from './Users';
import Preloader from "../comman/preloader";
import {usersAPI} from "../../Api/Api";
import {withAuthRedirect} from "../../hic/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
    getUsersPage
} from "../../redux/selectors/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }

}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress:getFollowingProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            serCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers,
        }),
    withAuthRedirect
)
(UsersAPIComponent);
