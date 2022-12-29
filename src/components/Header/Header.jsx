import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png"/>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>
                        <Login/>
                    </NavLink>}

            </div>
        </header>
    )
}

export default Header;