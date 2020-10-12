import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//contexts
import {ContextProduct} from './contexts/ContextProduct'
import {ContextCart} from './contexts/ContextCart'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//Local Storage Setup
	useEffect(() => {
		//sets the cart to whatever is in localStorage upon page refresh
		if (JSON.parse(localStorage.getItem("product-list"))) {
		  setCart(JSON.parse(localStorage.getItem("product-list")));
		}
	  }, []);

	  useEffect(() => {
		//sets the localStorage to cart values when cart is updated
		setStorageLocal(cart);
	  }, [cart]);
	

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = id => {
		const filteredCart = cart.filter(each => each.id !== id);
		// Removed the current item from the cart
		setCart(filteredCart);
	  };

	  const setStorageLocal = data => {
		localStorage.setItem("product-list", JSON.stringify(data));
	  };

	return (
	<ContextProduct.Provider value={{ products, addItem }}>
      <ContextCart.Provider value={{ cart, setCart, removeItem }}>

		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>

		</ContextCart.Provider>
    </ContextProduct.Provider>

	);
}

export default App;
