// src/app/components/HeroSection.jsx
import Image from 'next/image';
import heroImage from '@/public/images/hero-section.png';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy-blue">
            Essential Vitamins
          </h1>
          <p className="text-gray-600 mb-6">
            Get your vitamins and minerals from our online store.
          </p>
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Shop Now
            </button>
            <div className="ml-6 flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Vegetarian Friendly</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-4">
          <Image
            src={heroImage}
            alt="Essential Vitamins"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}