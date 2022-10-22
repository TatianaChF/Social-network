import style from './Friends.module.css';
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Friends = (props) => {

    return (
        <div className={style.friends}>
            <div>
                <img src='https://i.insider.com/61d1c0e2aa741500193b2d18?width=700'
                     className={style.avatar} />
                <NavLink to='/Alexander' className={style.name}>Alexander</NavLink>
            </div>
            <div className={style.friend}>
                <img src='https://cdn.mos.cms.futurecdn.net/fiDmrNrJsmGD2t57x4dRdG-1200-80.jpg'
                     className={style.avatar} />
                <NavLink to='/Tatiana' className={style.name}>Tatiana</NavLink>
            </div>
            <div className={style.friend}>
                <img src='https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg'
                     className={style.avatar} />
                <NavLink to='/Anna' className={style.name}>Anna</NavLink>
            </div>
            <div className={style.friend}>
                <img src='https://rrsg.s3.amazonaws.com/wp-content/uploads/2018/12/Veyron-Grand-Sport-Vitesse-Black-Bess-1024x562.jpg'
                     className={style.avatar} />
                <NavLink to='/Viktor' className={style.name}>Viktor</NavLink>
            </div>
            <div className={style.friend}>
                <img src='https://www.gannett-cdn.com/presto/2020/03/09/PDTF/1ad7be1a-1b59-438e-9627-700753bc9867-GettyImages-1132562466.jpg'
                     className={style.avatar} />
                <NavLink to='/Irina' className={style.name}>Irina</NavLink>
            </div>
        </div>
    )
}

export default Friends;