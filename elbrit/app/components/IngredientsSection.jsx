import Image from 'next/image';

const ingredients = [
  {
    id: 1,
    name: 'Vitamin C',
    description: 'Vitamin C as ascorbic acid',
    image: '/Ingredients/img1.jpeg',
  },
  {
    id: 2,
    name: 'Vitamin B3',
    description: 'Niacin for healthy gut and skin',
    image: '/Ingredients/img2.jpeg',
  },
  {
    id: 3,
    name: 'Magnesium',
    description: 'Boost energy and support muscle function',
    image: '/Ingredients/img3.jpeg',
  },
  {
    id: 4,
    name: 'Hyaluronic Acid',
    description: 'For smooth, supple, and soft skin!',
    image: '/Ingredients/img4.jpeg',
  },
  {
    id: 5,
    name: 'Lactobacillus',
    description: 'Invigorate your gut microbiome',
    image: '/Ingredients/img5.jpeg',
  },
];

const IngredientCard = ({ name, description, image }) => (
  <div className="relative group h-64 w-full rounded-lg overflow-hidden shadow-lg">
    {/* Background image */}
    <Image
      src={image}
      alt={name}
      layout="fill"
      objectFit="cover"
      className="transform transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      priority={false}
    />
    {/* Overlay content */}
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 text-white">
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm leading-5">{description}</p>
      </div>
      {/* Bottom-left "See More" */}
      <button className="text-sm underline hover:no-underline self-start">
        See More
      </button>
    </div>
  </div>
);

export default function IngredientsSection() {
  return (
    <section className="py-16 bg-white px-8">
      {/* Overall container with padding */}
      <div className="container mx-auto p-4 bg-gray-50 rounded-lg">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Better Ingredients
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>

        {/* First row of two grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {ingredients.slice(0, 2).map(({ id, name, description, image }) => (
            <IngredientCard
              key={id}
              name={name}
              description={description}
              image={image}
            />
          ))}
        </div>

        {/* Second row of three grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingredients.slice(2).map(({ id, name, description, image }) => (
            <IngredientCard
              key={id}
              name={name}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
