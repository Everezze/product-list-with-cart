import CartedProduct from "./CartedProduct";

export default function Cart(props){
	let totalProducts = 0;
	const filteredElements = props.productData.filter(product =>{
		if(product.count){
			totalProducts += product.count;
			return true;
		}
		else{
			false;
		}
	})

	const cartedElements = filteredElements.map(product =>{
		return (
			<CartedProduct key={product.id} product={product} />
		)}
	)

	function isFilled(){
		if(filteredElements.length){
			return (
				<div className="carted-products">
					{cartedElements}
				</div>
			)
		}
		else{
			<div className="empty-msg">
				<img src="assets/images/illustration-empty-cart.svg" alt="empty cart"/>
				<p className="hint">Your added items will appear here</p>
			</div>
		}
	}

	return (
		<aside className="cart rad">
			<h3>Your cart ({totalProducts})</h3>
			{isFilled()}
		</aside>
	)
}
