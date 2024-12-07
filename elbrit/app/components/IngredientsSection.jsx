export default function IngredientsSection() {
  const ingredients = [
    { id: 1, name: 'Ingredient 1', description: 'Amazing first ingredient' },
    { id: 2, name: 'Ingredient 2', description: 'Spectacular second ingredient' },
    { id: 3, name: 'Ingredient 3', description: 'Wonderful third ingredient' }
  ]

  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingredients.map(ingredient => (
            <div 
              key={ingredient.id} 
              className="p-6 border rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-semibold mb-4">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}