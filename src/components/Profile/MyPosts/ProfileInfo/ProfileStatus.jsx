import React from "react";
import classes from "./Profile.module.css";

class ProfileStatus extends React.Component {

    state={
        editMode:false,
        status:this.props.status,
    }
    activateEditMod=()=>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMod=()=>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e)=>{
        this.setState({
            status:e.currentTarget.value,
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status,
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMod}>
                            {this.props.status||"------"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               value={this.state.status}
                               onBlur={this.deactivateEditMod}
                               onChange={this.onStatusChange}>

                        </input>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus