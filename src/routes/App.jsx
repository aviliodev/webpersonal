import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../style/style.css'
import '../style/animations.css'


import Welcome from '../containers/Welcome'
import Menu from '../components/Menu'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'

const App  = () => (
    <BrowserRouter>
            <Switch>                
                <Route exact path="/" component={Welcome} />
            </Switch>   
            <Menu />
            <Switch>                
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Portfolio} />
                <Route exact path="/contact" component={Blog} />
            </Switch>
     
    </BrowserRouter>
)

export default App