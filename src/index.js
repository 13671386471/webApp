import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import './config.js';
import store from './redux/store';
import Login from './container/login';
import Register from './container/register';
import AuthRoute from './component/authroute';

console.log('login:::', Login)
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                {/*AuthRoute不是路由，因此在AuthRoute里面的this.props里并没有location、history、match*/}
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

