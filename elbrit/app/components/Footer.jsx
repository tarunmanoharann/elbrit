import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      {/* First Line: Phone, Email, Location */}
      <div className="container mx-auto flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
        <div className="bg-[#3E5F89] rounded-md px-6 py-4 flex items-center space-x-3">
          <Phone size={24} />
          <span className="text-sm md:text-lg">+974 3118 1843</span>
        </div>
        <div className="bg-[#3E5F89] rounded-md px-6 py-4 flex items-center space-x-3">
          <Mail size={24} />
          <span className="text-sm md:text-lg">Elbrithcqhr@gmail.com</span>
        </div>
        <div className="bg-[#3E5F89] rounded-md px-6 py-4 flex items-center space-x-3">
          <MapPin size={24} />
          <span className="text-sm md:text-lg">Ambassador Street, Zone 61</span>
        </div>
      </div>

      {/* Second Line: Logo and Description */}
      <div className="container mx-auto flex flex-wrap justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-12 mt-10 md:ml-72">
        <div className="bg-white p-4 rounded-md shadow-md">
          <Image
            src="/images/logo.png"
            alt="Elbrit Logo"
            width={300}
            height={64}
            className="mx-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <span className="block text-sm md:text-base">
            Your health, physical and emotional well-being is important to us.
          </span>
          <span className="block text-sm md:text-base">
            We are always by your side and have made it even easier
          </span>
          <span className="block text-sm md:text-base">
            for you to find the necessary vitamins.
          </span>
        </div>
      </div>

      {/* Third Line: Copyright */}
      <div className="container mx-auto text-center md:text-left mt-10 md:ml-72">
        <p className="text-sm md:text-base">
          &copy; 2024 Elbrit Life Sciences Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
