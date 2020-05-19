import React from 'react'
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

import Todo from './pages/Todo'

export default props => {


    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Todo}/>
            <Redirect from="*" to="/" />

            </Switch>
        
        </BrowserRouter>

    )
}