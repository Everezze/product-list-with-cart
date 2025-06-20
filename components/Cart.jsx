import CartedProduct from "./CartedProduct";

export default function Cart(props){
	let totalProducts = 0;
	let totalPrice = 0;
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
		totalPrice += (product.count * product.price);
		return (
			<CartedProduct key={product.id} product={product}
			removeProductFromCart={props.removeProductFromCart}
			/>
		)}
	);

	function isFilled(){
		if(filteredElements.length){
			return (
				<>
					<div className="carted-products">
						{cartedElements}
					</div>
					<div className="total-price">
						<span>Order Total</span>
						<h2>${totalPrice}</h2>
					</div>
					<div className="carbon">
						<img src="assets/images/icon-carbon-neutral.svg" alt="" />
						This is a <b>carbon-neutral</b> delivery
					</div>
					<button className="confirm-order" onClick={props.displayOrder}>Confirm order</button>
				</>
			)
		}
		else{
			return (
				<div className="empty-msg">
					<img src="assets/images/illustration-empty-cart.svg" alt="empty cart"/>
					<p className="hint">Your added items will appear here</p>
				</div>
			)
		}
	}

	return (
		<aside className="card cart rad">
			<h3>Your cart ({totalProducts})</h3>
			{isFilled()}
		</aside>
	)
}
