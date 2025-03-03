function Categories({selectedCategory, updateSelectedCategory, categories}) {

    return (
        <div>
        <select value={selectedCategory}
				onChange={(e) => updateSelectedCategory(e.target.value)}>
            <option value="">Filtrer par catégorie</option>
            {categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
        </select>
        <button onClick={() => updateSelectedCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories