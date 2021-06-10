import React from 'react'

import '../fonts/mdi/css/materialdesignicons.css'
import '../fonts/mdi/css/materialdesignicons.min.css'
import '../style/welcome.css'


const Welcome = () => (
    <section id="home" className="flex height-fix">
        <div id="pt" className="canvas"></div>
        <div className="flex">
            <div className="text">
                Hello, I'm <span className="highlight">Avilio Amador</span>.
                <br />
                I'm a full-stack web developer.
            </div>

            <div className="button page-link" dest="about">
                View my work <i className="mdi mdi-arrow-right"></i>
            </div>
        </div>  
    </section>
 
)

export default Welcome