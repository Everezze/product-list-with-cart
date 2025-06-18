import React from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";
import productData from "../data.json";

export default function Main(){
	let i=0;

	const [products,setProducts] = React.useState(
		//() => {
		//	let decoyObj = {};
		//	productData.forEach(product=>{
		//		const {category,...restProduct} = product;
		//		decoyObj[category] = {...restProduct,carted:false}
		//	});
		//	return decoyObj;
		//}
		productData.map(product=> {
			//console.log("category is: ",category);
			return {
				...product,carted:false,
				id:i++
			}
		})
	);
	console.log(products);

	function addToCart(e){
		const el = e.currentTarget;
		//console.log("clicked on: ",el);
		const parent = el.closest(".dessert");
		const productId = parent.dataset.id;
		setProducts(prevProducts => {
			return prevProducts.map(product=> {
				if(prevProducts[productId] === product){
					return {...product,carted: !product.carted}
				}
				else{
					return product;
				}
			});
		});
		//parent.classList.toggle("active");
	}
	
	return (
		<main>
			<ProductList onClick={addToCart}
				productData={products}
			/>
			<Cart />
		</main>
	)
}
