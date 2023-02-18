import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} className={style.logo}/>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logout} className={style.btn}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>
                        <Login/>
                    </NavLink>}

            </div>
        </header>
    )
}

export default Header;