import React from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";
import productData from "../data.json";

export default function Main(){
	let i=0;
	//let cartFilled = false;

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
		//cartFilled = true;
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
		//parent.classList.toggle("active");
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
		//parent.classList.toggle("active");
	}
	
	
	return (
		<main>
			<ProductList adder={incrementQuantity}
				substracter={decrementQuantity}
				productData={products}
			/>
			<Cart 
				productData={products}
			/>
		</main>
	)
}
