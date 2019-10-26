import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>$40</td>
                    <td>
                        <button className="btn btn-outline-danger btn-small">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <button className="btn btn-outline-success btn-small">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                        <button className="btn btn-outline-warning btn-small">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                    </td>
                </tbody>
            </table>
            <div className="total">
                Total: $221
            </div>
        </div>
    )
}

export default ShoppingCartTable;