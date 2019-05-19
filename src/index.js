import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/pages/layouts/Header';
import Login from './components/pages/Login';
import Meetups from './components/pages/Meetups';

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Route exact path="/" component={Meetups} />
        <Route path='/login' component={Login}></Route>
    </BrowserRouter>
    , document.getElementById('app'));
