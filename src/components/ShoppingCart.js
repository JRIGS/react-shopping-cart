import React, { useContext } from 'react';
import {ContextCart} from '../contexts/ContextCart'

// Components
import Item from './ShoppingCartItem';

function ShoppingCart() {
	const { cart, setCart } = useContext(ContextCart)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
