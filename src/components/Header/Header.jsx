import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";
import {sendAuthorization} from "../../redux/auth-reducer";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" />

            <div className={style.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>
                        <Login sendAuthorization={props.sendAuthorization}/>
                    </NavLink>}

            </div>
        </header>
    )
}

export default Header;