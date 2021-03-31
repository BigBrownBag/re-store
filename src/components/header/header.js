import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ numItems, total}) => {
    return (
        <header className="shop-header row">
            <NavLink className="logo text-dark" to="/">ReStore</NavLink>
            <NavLink className="shopping-cart" to='/cart'>
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </NavLink>
         </header>
    );
};

export default Header;