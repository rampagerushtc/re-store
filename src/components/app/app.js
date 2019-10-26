import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';


import './app.css';
import  { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart/:id" component={CartPage} />
        </Switch>

    )
}

export default withBookstoreService()(App);