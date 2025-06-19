import React from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";
import productData from "../data.json";
import OrderConfirmed from './OrderConfirmed';

export default function Main(){
	let i=0;
	const [order,setOrder] = React.useState(false);
	const [products,setProducts] = React.useState(
		productData.map(product=> {
			return {
				...product,carted:false,
				id:i++,count:0
			}
		})
	);
	//console.log(products);
	//console.log(cartFilled);

	function incrementQuantity(e){
		const el = e.currentTarget;
		//console.log("clicked on: ",el);
		const parent = el.closest(".dessert");
		const productId = parent.dataset.id;
		setProducts(prevProducts => {
			return prevProducts.map(product=> {
				if(prevProducts[productId] === product){
					const temp = {...product,carted:true,count:product.count + 1};
					console.log(product.count+1);
					return temp;
				}
				else{
					return product;
				}
			});
		});
	}

	function decrementQuantity(e){
		const el = e.currentTarget;
		//console.log("clicked on: ",el);
		const parent = el.closest(".dessert");
		const productId = parent.dataset.id;
		setProducts(prevProducts => {
			return prevProducts.map(product=> {
				if(prevProducts[productId] === product){
					if(product.count - 1 < 1 ){
						//cartFilled = false;
						return {...product,carted:false,count:0}
					}
					else{
						return {...product,carted:true,count:product.count - 1}
					}
				}
				else{
					return product;
				}
			});
		});
	};

	function removeProductFromCart(e){
		const el = e.currentTarget;
		const parent = el.closest(".carted-product");
		const productId = parent.dataset.id;
		setProducts(prevProducts => {
			return prevProducts.map(product=> {
				if(prevProducts[productId] === product){
					const temp = {...product,carted:false,count:0};
					console.log("temp new product",temp);
					return temp;
				}
				else{
					return product;
				}
			})
		});
	};

	function handleOrder(){
		setOrder(true);
	}

	function showOrder(){
		if(order){
			return (
				<OrderConfirmed productData={products} />
			)
		}
	}

	return (
		<main>
			<ProductList adder={incrementQuantity}
				substracter={decrementQuantity}
				productData={products}
			/>
			<Cart 
				productData={products}
				removeProductFromCart={removeProductFromCart}
				handleOrder={handleOrder}
			/>
			{showOrder()}
		</main>
	)
}
