import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import {HomePage, CartPage} from './../pages';
import Header from './../header';

const App = ({storeService}) => {
    return (
        <main role='main' className='container'>
            <Header numItems={5} total={200} />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    )
};

export default App; 