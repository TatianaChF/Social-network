import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" />

            <div className={style.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>}

            </div>
        </header>
    )
}

export default Header;