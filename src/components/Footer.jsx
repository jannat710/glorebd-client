"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/images/f.png";

const socialLinks = [
  { to: "/", icon: <FaFacebookF />, alt: "Facebook" },
  { to: "/", icon: <FaTwitter />, alt: "Twitter" },
  { to: "/", icon: <FaGooglePlusG />, alt: "Google+" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto px-2 py-8 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={250}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed">
              আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি
              নিখুঁত সংমিশ্রণ।
            </p>
          </div>

          {/* Explore More */}
          <div className="space-y-2">
            <p className="text-xl font-semibold">Explore More</p>
            <div className="flex flex-col text-gray-400 space-y-1 text-sm">
              <Link href="/" className="hover:text-primary">
                New Arrivals
              </Link>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Client Experience */}
          <div className="space-y-2">
            <p className="text-xl font-semibold">Client Experience</p>
            <div className="flex flex-col text-gray-400 space-y-1 text-sm">
              <Link href="/" className="hover:text-primary">
                Track Your Order
              </Link>
              <Link href="/" className="hover:text-primary">
                Returns & Exchanges
              </Link>
              <Link href="/" className="hover:text-primary">
                Customer Reviews
              </Link>
              <Link href="/" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-4">
            <p className="text-xl font-semibold uppercase">Get In Touch</p>
            <div className="text-gray-400 text-sm space-y-1">
              <a
                href="tel:+8801855375963"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MdPhone className="text-lg" /> মোবাইল: (+88) 01855-375963
              </a>
              <a
                href="mailto:hello@glorebd.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MdEmail className="text-lg" /> ইমেইল: hello@glorebd.com
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ to, icon, alt }, idx) => (
                <Link
                  key={idx}
                  href={to}
                  aria-label={alt}
                  className="bg-white text-black p-1 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <span className="text-xl">{icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm pb-6">
        <p>
          © {new Date().getFullYear()}. Powered by Cal
          <span className="text-amber-600 font-bold">Q</span>uick
        </p>
      </div>
    </footer>
  );
};

export default Footer;
