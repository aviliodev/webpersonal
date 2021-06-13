import React from 'react'

import '../style/style.css'
import '../style/animations.css'


import Menu from '../components/Menu'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'

const Home = () => (
    <>
        <Menu />
        {/* <About /> */}
        <Portfolio />
        {/* <Blog /> */}
    </>

)


export default Home