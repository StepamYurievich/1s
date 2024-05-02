import React from "react";
import classes from './Header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt="dota2"  className="header-img"
                 src='https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png'  />

            <div className={classes.login_block}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
                    : <Link to={'/login'}>
                        login
                    </Link>}

            </div>
        </header>
    )
}

export default Header;