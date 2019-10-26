import React from 'react';
import './app.css';
import  withBookstoreService from '../hoc';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <div className="App">App</div>
    )
}

export default withBookstoreService()(App);