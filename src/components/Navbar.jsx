"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Eye, Menu, MenuIcon, X } from "lucide-react";
import { BsHandbag } from "react-icons/bs";

import { LuSearch } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Image from "next/image";
import logo from "../assets/images/n.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="shadow-sm sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex font-semibold gap-6">
          <div className="flex items-center gap-3">
            <RiMenu2Line size={20} />
            <h1>Menu</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <LuSearch size={20} />
            <h1>Search</h1>
          </div>
        </div>

        <Link href="/" className="hidden md:flex space-x-8 items-center">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={40}
            className=" object-contain"
            priority
          />
        </Link>
        <div className="hidden lg:block">
          <div className="flex font-semibold gap-6">
            <div className="flex justify-center items-center gap-3">
              <RiShoppingBag2Fill size={25} />
              <h1>Shop</h1>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="relative">
                <BsHandbag size={20} />
                <span className="absolute -bottom-2 -right-3 bg-primary opacity-80 text-xs text-white rounded-full px-2">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="md:hidden text-[#737373]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 shadow-lg text-center min-h-screen">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
