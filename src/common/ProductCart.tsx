import Image from "next/image";
export default function ProductCard() {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="relative">
          <Image 
            src="https://placehold.co/300x600" 
            alt="Product" 
            className="w-full h-40 object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Category
          </span>
        </div>
  
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
          <p className="text-gray-600 text-sm mt-1">$99.99</p>
  
          <button className="mt-3 w-full bg-[#3e15e2ef] text-white py-2 rounded hover:bg-[#3a3992]">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  