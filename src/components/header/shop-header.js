import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="shop-header row">
            <Link to="/">
            <div className="logo text-light" >ReStore</div>
            </Link>
            <Link to="/cart">
            <div className="shopping-ca
            rt">
                <i className="cart-icon fa fa-shopping-cart"></i>
                {numItems} items (${total})
            </div>
            </Link>
        </header>
    )
}

export default ShopHeader;