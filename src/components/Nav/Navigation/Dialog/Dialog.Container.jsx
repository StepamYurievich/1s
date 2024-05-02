import React from "react";
import {addMassageCreator} from "../../../../redux/dialogs_reducer"
import Dialogs from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hic/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMassageCreator:(newMassageText)=>{
            dispatch(addMassageCreator(newMassageText))
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
