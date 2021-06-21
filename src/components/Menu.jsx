import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/componentstyle/menu.css'


const Welcome = () => (

    <section id="menu" className="flex height-fix">
        <nav className="flex">
            <ul className="link-wrap">
                <li className="page-link">    
                <NavLink
                    to="/about"
                    role="button"
                    tabIndex={0}
                >
                    About
                </NavLink>
                </li>
                <li className="page-link">
                <NavLink
                    to="/projects"
                    role="button"
                    tabIndex={0}
                >
                    Projects
                </NavLink>
                </li>
                <li className="page-link">
                <NavLink
                    to="/contact"
                    role="button"
                    tabIndex={0}
                >
                    Contact
                </NavLink>
                </li>
            </ul>
            <i className="mdi mdi-menu"></i>
        </nav>


    </section>    
)

export default Welcome