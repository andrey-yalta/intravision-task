import React from "react"
import logo from "../../assets/img/logo.png"
import nav_li_1 from "../../assets/img/nav_li_1.png"
import nav_li_2 from "../../assets/img/nav_li_2.png"
import nav_li_3 from "../../assets/img/nav_li_3.png"
import nav_li_4 from "../../assets/img/nav_li_4.png"
import nav_li_5 from "../../assets/img/nav_li_5.png"
import nav_li_6 from "../../assets/img/nav_li_6.png"
import {NavLink} from "react-router-dom";

export const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="intravision"/>
            </div>
            <nav className="navbar__menu">
                <ul>
                    <NavLink to={'/information'}>
                        <li>
                            <img src={nav_li_1} alt="база знаний"/>
                            <span>База зданий</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/'}>
                        <li>
                            <img src={nav_li_2} align="Заявки" alt="заявки"/>
                            <span>Заявки</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/users'}>
                        <li>
                            <img src={nav_li_3} alt="Сотрудники"/>
                            <span>Сотрудники</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/users'}>
                        <li>
                            <img src={nav_li_4} alt="Клиенты"/>
                            <span>Клиенты</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/actives'}>
                        <li>
                            <img src={nav_li_5} alt="Активы"/>
                            <span>Активы</span>
                        </li>
                    </NavLink>
                    <NavLink to={'/settings'}>
                        <li>
                            <img src={nav_li_6} alt="Настройки"/>
                            <span>Настройки</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}