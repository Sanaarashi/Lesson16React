import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </div>
    )
}

export default App;