import { plantList } from '../datas/plantList'

function ShoppingList() {
	let categories = []
	plantList.forEach(plant => {
		if(!categories.includes(plant.category)){
			categories.push(plant.category)
		}		
	});
	return (<ul>
		{categories.map((category, index) => (
			<li key={index}> {category} </li>
		))}
	</ul>)
}


export default ShoppingList
