import React from 'react'
import {Link} from 'react-router-dom'

import '../fonts/mdi/css/materialdesignicons.css'
import '../fonts/mdi/css/materialdesignicons.min.css'
import '../style/welcome.css'


const Welcome = () => (
    <section id="welcome" className="flex height-fix">
        <div id="pt" className="canvas"></div>
        <div className="flex">
            <div className="text">
                Hello, I'm <span className="highlight">Avilio Amador</span>.
                <br />
                I'm a full-stack web developer.
            </div>

            <Link to="About">
                <div className="button page-link" dest="about">
                    <a className="view">View my work</a> 
                    <i className="mdi mdi-arrow-right"></i>
                </div>
            </Link>
        </div> 
    </section>
 
)

export default Welcome