import './index'
import './App.css';
import Nav from './components/Nav/Nav';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Setting from "./components/Nav/Navigation/Setting/Setting";
import News from "./components/Nav/Navigation/News/News";
import Music from "./components/Nav/Navigation/Music/Music";
import DialogsContainer from "./components/Nav/Navigation/Dialog/Dialog.Container";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/MyPosts/ProfileInfo/ProfileComponent";
import HeaderComponent from "./components/Hedaer/HeaderComponent";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/comman/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderComponent/>
                    <Nav store={this.props.store}/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/profile/:userId?' element={
                                <ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={
                                <DialogsContainer/>}/>
                            <Route path="/login/*" element={
                                <Login/>}/>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/setting/*" element={<Setting/>}/>
                            <Route path="/users/*" element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );

    }
}
const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})
export default compose(withRouter(connect(mapStateToProps,{initializeApp})(App)))
