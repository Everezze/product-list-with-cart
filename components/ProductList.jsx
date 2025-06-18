import Product from "./Product";

export default function ProductList(props){

	const productElements = props.productData.map(product => {
		return (
			<Product key={product.id} product={product}
			substracter={props.substracter}
			adder={props.adder}
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
