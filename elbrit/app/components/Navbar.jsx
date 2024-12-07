export default function Navbar() {
    return (
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#ingredients" className="hover:text-blue-500">Ingredients</a></li>
            <li><a href="#news" className="hover:text-blue-500">News</a></li>
          </ul>
        </div>
      </nav>
    )
  }