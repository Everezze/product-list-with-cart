export default function CartedProduct(props){
	const product = props.product;
	console.log("inside cartedProduct",product);
	console.log(props);
	return (
			<div className="carted-product" data-id={product.id}>
				<div className="product-sumup">
					<p className="flavor">{product.name}</p>
					<div className="df">
						<h5>{product.count}x</h5>
						<span className="indicator price">@ ${product.price}</span>
						<span className="indicator product-total">${product.count * product.price}</span>
					</div>
				</div>
				<div className="img-container" onClick={props.removeProductFromCart}>
					<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 10 10"><path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
				</div>
			</div>
	)
}
