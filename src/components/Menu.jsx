import React from 'react'
// import '../style/menu.css'


const Welcome = () => (

    <section id="menu" className="flex5 height-fix5">
        <nav className="flex">
            <div className="link-wrap">
                <div className="active page-link" dest="home">home</div>
                <div className="page-link" dest="about">about</div>
                <div className="page-link" dest="portfolio">portfolio</div>
                <div className="page-link" dest="blog">blog</div>
                <div className="page-link" dest="contact">contact</div>
            </div>
            <i className="mdi mdi-menu"></i>
        </nav>
    </section>    
)

export default Welcome