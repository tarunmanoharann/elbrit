export default function HeroSection() {
    return (
      <section className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing things with our product
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </section>
    )
  }