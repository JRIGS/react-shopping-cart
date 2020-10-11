import React, { useContext } from 'react';
import {ContextProduct} from '../contexts/ContextProduct';

// Components
import Product from './Product';

function Products() {
	
	const { products, addItem} = useContext(ContextProduct)
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
