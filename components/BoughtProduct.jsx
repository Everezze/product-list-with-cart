export default function BoughtProduct(props){
	const product = props.product;
	return (
		<div className="carted-product" id={product.id}>
			<div className="bought-desc df">
				<img src={product.image.thumbnail} alt="" />
				<div>
					<p className="flavor">{product.name}</p>
					<div className="df">
						<h5>{product.count}x</h5>
						<span className="indicator price">
							@ ${product.price}
						</span>
					</div>
				</div>
			</div>
			<div className="total-price">${product.price * product.count}</div>
		</div>
	)
};
