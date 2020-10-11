import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {ContextCart} from '../contexts/ContextCart'

function Navigation() {
	const {cart, setCart} = useContext(ContextCart)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
