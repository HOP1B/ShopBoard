import { FaShopware } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex items-center pl-36 relative text-white bg-gradient-to-br from-purple-700 via-indigo-400 to-blue-500 overflow-hidden px-6">
      {/* Left Content */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold">
          From Everyday Essentials to Luxury Finds – The Ultimate Shopping
          Experience Awaits You
        </h1>
        <p className="pt-7">
          “The customer’s perception is your reality.” – Kate Zabriskie
        </p>
        <Link href="/product">
          <button className="mt-6 px-8 py-3 text-lg font-semibold bg-white text-purple-700 rounded-full shadow-md hover:bg-purple-200 transition">
            Start Shopping
          </button>
        </Link>
      </div>

      <FaShopware className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[1300px] opacity-10 text-white blur-sm" />
    </section>
  );
}
