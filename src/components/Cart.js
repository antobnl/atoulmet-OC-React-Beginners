import '../styles/Cart.css'
import { useState } from 'react'



function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, SetIsOpen] = useState(false)

	return isOpen ? (
		<div className='lmj-cart'>
			<button onClick={() => SetIsOpen(false)}>Fermer</button>
			<h2>Panier</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li>
				<button onClick={() => updateCart(cart + 1)}>Ajouter au panier</button>
			</ul>
			<h3>Total : {monsteraPrice * cart}€</h3> 
		</div>
	) : (
	<button onClick={() => SetIsOpen(true)}>Ouvrir</button>
)
		
	
}

export default Cart
