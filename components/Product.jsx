export default function Product(props){
	//console.log(props);
	const product = props.product;
	const isActive = product.carted ? "active":"";
	return (
		<div className={`dessert ${isActive}`} data-id={product.id}>
			<picture className="illustration">
				<source srcSet={product.image.mobile}
				media="(max-width:600px)"/>
				<img src={product.image.desktop} alt=""/>
				<button>
					<div className="carter"onClick={props.adder}>
						<img src="assets/images/icon-add-to-cart.svg" alt=""/>
						Add to Cart
					</div>
					<div className="quantifier">
						<span  className="operator decrementor img-container" onClick={props.substracter}>
							<img src="assets/images/icon-decrement-quantity.svg" alt="" />
						</span>
						<span className="count">{product.count}</span>
						<span className="operator incrementor img-container" onClick={props.adder}>
							<img src="assets/images/icon-increment-quantity.svg" alt="" />
						</span>
					</div>
				</button>
			</picture>
			<span>{product.category}</span>
			<p className="flavor">{product.name}</p>
			<h5>${product.price}</h5>
		</div>
	)
}
