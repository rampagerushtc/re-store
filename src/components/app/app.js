import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../header';


import './app.css';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={200} />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart/:id" component={CartPage} />
            </Switch>
        </main>

    )
}

export default withBookstoreService()(App);