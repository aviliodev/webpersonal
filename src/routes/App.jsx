import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Welcome from '../containers/Welcome'


const App  = () => (
    <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Welcome} />
                <Route exact path="/home" component={Home} />
            </Switch>        
    </BrowserRouter>
)

export default App