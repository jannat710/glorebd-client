"use client";

import Image from "next/image";
import heroImage from "../assets/images/hero-o4bu130g.png";
import { Button } from "../components/ui/button";

const HeroSection = () => {
  return (
    <section className="container rounded-3xl w-full bg-[#FFEBF0]">
      <div className="flex items-center justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight">
            নতুন <br />
            <span className="text-primary">কালেকশন</span>
          </h1>
          <p className="text-lg">
            ✨<span className="text-primary">GloreBD</span> - এর সাথে ফ্যাশনে পা
            রাখুন নতুন দিগন্তে! ❤️
          </p>
          <p className="text-base hidden sm:block">
            আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br />
            আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
          </p>
          <Button className="bg-primary text-white px-8 py-7 text-lg font-serif  hover:zoom-in-10 transition">
            অর্ডার করুন
          </Button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center pt-5">
          <Image
            src={heroImage}
            alt="Hero Banner"
            className="w-full max-w-md object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
