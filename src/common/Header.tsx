import { FaShopware } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Header() {
    return (
      <header className="pt-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white p-4 shadow-2xl">
        <section className="flex justify-between  items-center px-[15%]">
            <div className="flex gap-7 ">
                <Facebook/>
                <Twitter/>
                <Instagram/>
            </div>
            <div className="flex items-center">
                <FaShopware className="size-12 mr-3"/>
                <div className="font-mono flex-col justify-center px-0">
                    <p className="font-bold text-3xl">ShopBoard</p>
                    <p>Shop smart, live better</p>
                </div>
            </div>
            <div className="flex gap-7">
                <Search/>
                <User/>
                <ShoppingCart/>
            </div>
        </section>
        <div className="border-gray-400 border-[0.1px] mt-4 mx-[15%]"></div>
        <nav className="">
          <li className="flex justify-center gap-28 pt-1 h-14 items-center">
            <a href="http://localhost:3000"><ul className="hover:cursor-pointer hover:shadow-2xl hover:opacity-90">Home</ul></a>
            <a href="/market"><ul className="hover:cursor-pointer">Market</ul></a>
            <ul className="hover:cursor-pointer">About Us</ul>
            <ul className="hover:cursor-pointer">Contact Us</ul>
          </li>
        </nav>
      </header>
    );
  }
  