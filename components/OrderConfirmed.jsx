import BoughtProduct from "./BoughtProduct";

export default function OrderConfirmed(props){
	let totalPrice = 0;
	const orderedProducts = props.productData.filter(product =>{
		if(product.count){
			return product;
		}
		return false;
	});

	const boughtElements = orderedProducts.map(product =>{
		totalPrice += (product.count * product.price);
		return (
			<BoughtProduct key={product.id} product={product} />
		)
	});

	console.log(boughtElements);

	return (
		<article className="card rad confirmed-order">
			<div className="img-container">
				<img src="assets/images/icon-order-confirmed.svg" alt="" />
			</div>
			<h2>Order Confirmed</h2>
			<p>We hope you enjoy your food!</p>
			<div className="sumup-container rad">
				<div className="carted-products">
					{boughtElements}
				</div>
				<div className="total-price">
					<span>Order Total</span>
					<h2>${totalPrice}</h2>
				</div>
			</div>
			<button className="confirm-order">Start new Order</button>
		</article>
	)

}
