export default function Cart(){
	return (
		<aside className="cart rad">
			<h3>Your cart (0)</h3>
			<div className="empty-msg">
				<img src="assets/images/illustration-empty-cart.svg" alt="empty cart"/>
				<p className="hint">Your added items will appear here</p>
			</div>
		</aside>
	)
}
