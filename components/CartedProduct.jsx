export default function CartedProduct({product}){
	console.log("inside cartedProduct",product);
	return (
			<div className="carted-product">
				<div className="product-sumup">
					<p className="flavor">{product.name}</p>
					<p>
						<span>{product.count}x</span>
						<span>@ ${product.price}</span>
						<span>${product.count * product.price}</span>
					</p>
					<div>
						<img src="assets/icon-remove-item.svg" alt="" />
					</div>
				</div>
			</div>
	)
}
