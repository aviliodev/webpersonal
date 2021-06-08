import React from 'react'
import LazyLoad from 'react-lazyload';
// import mixitup from 'mixitup'
// import '../scripts/index.js'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'

// const Home = () => (
//     <>
//         <Welcome />
//         <About />
//         <Portfolio />
//         <Blog />
//     </>

// )
const Home = () => (
    <>
        <LazyLoad >
            <Welcome />
        </LazyLoad>
        <LazyLoad offset={100}>
            <About />
        </LazyLoad>
        <LazyLoad >
            <Portfolio />
        </LazyLoad>    
        <LazyLoad>
            <Blog />
        </LazyLoad>         
    </>

)

export default Home