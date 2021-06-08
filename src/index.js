import React from 'react';
import ReactDOM from 'react-dom';

import LazyLoad from 'react-lazyload';
import Welcome from './components/Welcome'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'

// import App from '../src/routes/App';

const App = () => {
    return (
      <div className="list">
        <LazyLoad >
            <Welcome />
        </LazyLoad>
        <LazyLoad >
            <About />
        </LazyLoad>
        <LazyLoad >
            <Portfolio />
        </LazyLoad>    
        <LazyLoad>
            <Blog />
        </LazyLoad>  
      </div>
    );
  };

ReactDOM.render
(
    <App />,
    document.getElementById('app')

);