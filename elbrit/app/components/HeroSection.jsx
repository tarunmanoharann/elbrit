import Image from 'next/image';
import heroImage from '@/public/images/hero-section.png';
import { FlaskConical, Leaf, Truck, ShieldCheck, Globe, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#E2F5FB] py-16 overflow-hidden">
      {/* New Title Added */}
      <h1 className="text-8xl font-bold text-[#003569] text-center mb-8">
        Essential  Vitamins
      </h1>

      {/* Hero Section with Image in Center */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Description */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-700 text-lg mb-6">
            Online Medical Supplies
          </p>
          <h3 className="text-4xl font-bold text-[#17414F] mb-6">Get Your Vitamins & Minerals</h3>
          <button className="bg-[#17414F]  text-white px-10 py-3 rounded-2xl text-lg">
            Explore
          </button>
        </div>

        {/* Hero Image with Square Background */}
        <div className="md:w-1/2 flex justify-center relative mb-8 md:mb-0">
          <div className="absolute bg-[#17414F] rounded-xl w-[400px] h-[400px] -z-10"></div>
          <Image
            src={heroImage}
            alt="Essential Vitamins"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Right Description with Icons in Circle */}
        <div className="md:w-1/2">
          {/* Icon Points with Circles in Separate Rows and Taglines */}
          <div className="space-y-4 p-8">
            <div className="flex items-center space-x-2">
              <div className="bg-[#17414F] text-white p-4 rounded-full">
                <FlaskConical className="w-8 h-8" />
              </div>
              <div>
                <span className="text-gray-700 text-lg block">Vitamins</span>
                <span className="text-gray-500 text-sm">Increased Vitamins and minerals in your diet</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-[#17414F] text-white p-4 rounded-full">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <span className="text-gray-700 text-lg block">Weight loss</span>
                <span className="text-gray-500 text-sm">Find scienifically proven solutions</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-[#17414F] text-white p-4 rounded-full">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-gray-700 text-lg block">Functional Foods</span>
                <span className="text-gray-500 text-sm">From protein powers to baby formula</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Dark Blue Background and Padding */}
      <div className="bg-[#17414F] text-white py-12 px-6 md:px-12 m-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <FlaskConical className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">Clinically Studied</h3>
            <p className="text-sm">All products have undergone safety tests.</p>
          </div>
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <Leaf className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">Vegetarian Friendly</h3>
            <p className="text-sm">Wide selection of vegetarian products.</p>
          </div>
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <Globe className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">Made in India</h3>
            <p className="text-sm">Explore products made locally.</p>
          </div>
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <Truck className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-sm">No shipping costs on your orders.</p>
          </div>
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">No Risk</h3>
            <p className="text-sm">All products are safe and verified.</p>
          </div>
          <div className="p-8 bg-[#17414F] rounded-lg">
            <div className="bg-white text-[#17414F] p-6 rounded-full mx-auto mb-4 size-24">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg">GMO Free</h3>
            <p className="text-sm">No modified products or derivatives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}