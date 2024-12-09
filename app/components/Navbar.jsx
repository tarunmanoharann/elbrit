import Image from 'next/image';

export default function Navbar() {
    return (
      <nav className="bg-white shadow-md py-6 h-[71px] flex items-center">
        <div className="container mx-auto flex justify-between items-center px-6 w-[1864px]">
          <div className="flex items-center ml-[200px]">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={200} 
              height={50} 
              className="object-contain"
            />
          </div>
        </div>
      </nav>
    )
}