import Product from "./Product";

export default function ProductList(props){

	const productElements = props.productData.map(product => {
		return (
			<Product key={product.id} product={product}
			onClick={props.onClick}
			/>
		)
	})

	return (
		<article>
			<h1>Desserts</h1>
			<div className="desserts">
				{productElements}
			</div>
		</article>
	)
}
