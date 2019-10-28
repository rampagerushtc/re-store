import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../header';


import './app.css';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={200} />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>

    )
}

export default withBookstoreService()(App);