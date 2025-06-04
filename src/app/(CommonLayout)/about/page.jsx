"use client";

import Image from "next/image";
import React from "react";
import aboutimg from "../../../assets/images/about.jpg";
import SectionHeading from "@/src/components/others/SectionHeading";

const AboutPage = () => {
  return (
    <div className="bg-[#FFEBF0] py-10">
      <div className=" grid grid-cols-3 items-center gap-16">
        <div className="col-span-1">
          <Image
            src={aboutimg}
            alt="GloreBD Model"
            width={400}
            height={500}
            className=" object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-2 space-y-4 text-justify pr-24">
          <h2 className="text-2xl md:text-3xl font-base text-center text-black">
            Who We Are
          </h2>
          <p className="text-gray-600 text-sm">
            GloreBD-এ আপনাকে স্বাগতম! আমরা বাংলাদেশের একটি গর্বিত ব্র্যান্ড।
            আমাদের যাত্রা শুরু হয়েছিল একটি স্বপ্ন নিয়ে—নারীদের জন্য এমন ফ্যাশন
            সরবরাহ করা যা মান, আভিজাত্য এবং আরামের প্রতিশ্রুতি দেয়। GloreBD সেই
            চাহিদা পূরণে প্রতিশ্রুতিবদ্ধ। আমাদের মূল লক্ষ্য হলো ফ্যাশন ও আরামকে
            একসাথে নিয়ে এসে এমন পোশাক তৈরি করা যা প্রতিটি নারীর ব্যক্তিত্ব ও
            সৌন্দর্যকে আরও উজ্জ্বল করে তোলে। আমাদের যাত্রায় অংশ নিন এবং নিজেকে
            সাজান অনন্যভাবে। আপনার ফ্যাশন, আপনার পরিচয় GloreBD এর সাথে।
          </p>
          <h2 className="text-2xl md:text-xl font-base text-center text-black">
            ✨ GloreBD-এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ✨
          </h2>
          <p className="text-gray-600 text-sm">
            আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! আপনার প্রিয় ফ্যাশন
            স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️ আমাদের তিন পিস
            কালেকশন সাজানো হয়েছে আধুনিক ট্রেন্ড ও ঐতিহ্যের মিশেলে। প্রতিটি পোশাক
            এমনভাবে ডিজাইন করা হয়েছে যাতে এটি শুধু সুন্দর দেখায় না, বরং
            আরামদায়কও হয়। আমরা আমাদের প্রতিটি প্রোডাক্টের মান ও ফিনিশিং নিশ্চিত
            করতে সর্বোচ্চ যত্ন নিয়ে কাজ করি। আমাদের ফ্যাব্রিক নির্বাচন থেকে শুরু
            করে সেলাই পর্যন্ত প্রতিটি ধাপ পেশাদার ও মনোযোগী। প্রতিদিনের
            ব্যবহারের জন্য সহজলভ্য ডিজাইন থেকে উৎসবের জন্য ঝলমলে ডিজাইন পর্যন্ত
            আমাদের কালেকশনে রয়েছে সবকিছু। আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের
            আধুনিকতা এবং ঐতিহ্যের একটি নিখুঁত সংমিশ্রণ।
          </p>
          <h2 className="text-2xl md:text-xl font-base text-center text-black">
            ✨ আপনার স্টাইল, আপনার পরিচয়! ✨
          </h2>
          <p className="text-gray-600 text-sm">
            GloreBD-এ আপনি পাবেন এমন পোশাক যা আপনার আত্মবিশ্বাস বাড়াবে এবং
            আপনাকে নতুনভাবে তুলে ধরবে। আমরা জানি, আপনার স্টাইল শুধু আপনার
            সৌন্দর্যের প্রকাশ নয়, এটি আপনার আত্মবিশ্বাসেরও প্রতিফলন। আমাদের
            পেছনের দলটি গঠিত হয়েছে প্যাশনেট ডিজাইনার, দক্ষ ক্রাফটসম্যান এবং
            নিবেদিত ব্যবস্থাপকদের দ্বারা, যারা প্রতিটি পোশাককে নিখুঁতভাবে তৈরি
            করতে কঠোর পরিশ্রম করেন। আমাদের দল নারীদের চাহিদা বুঝতে সক্ষম এবং সেই
            অনুযায়ী নতুন ডিজাইন নিয়ে আসতে সর্বদা আগ্রহী। আমাদের প্রোডাক্ট ও
            সার্ভিস নিয়ে আরও জানতে, অথবা আমাদের সাথে আপনার মতামত ভাগ করে নিতে,
            আপনি যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন।
          </p>
        </div>
      </div>
      <div className="mt-20 space-y-8 ">
        <SectionHeading
          title={{ gray: "Why", dark: "Choose Us" }}
          align="left"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-5">
          <div className="p-20 border">
            <h4 className="font-bold mb-4 text-black">গুণগত মান নিশ্চিতকরণ</h4>
            <p className="text-sm text-gray-600">
              আমরা প্রতিটি পণ্য সাবধানে নির্বাচন ও যাচাই করি, যাতে এটি আমাদের
              কঠোর মান নিয়ন্ত্রণের মাপকাঠি পূরণ করে।
            </p>
          </div>
          <div className="p-20 border">
            <h4 className="font-bold mb-4 text-black">সুবিধা</h4>
            <p className="text-sm text-gray-600">
              আমাদের ব্যবহারকারী-বান্ধব ইন্টারফেস এবং ঝামেলামুক্ত অর্ডার
              প্রক্রিয়ার মাধ্যমে কেনাকাটা এখন আগের যেকোনো সময়ের চেয়ে সহজ।
            </p>
          </div>
          <div className="p-20 border">
            <h4 className="font-bold mb-4 text-black">ব্যতিক্রম গ্রাহক সেবা</h4>
            <p className="text-sm text-gray-600">
              আমাদের নিবেদিত পেশাদারদের দল সবসময় আপনার পাশে রয়েছে। আপনার
              সন্তুষ্টি নিশ্চিত করাই আমাদের সর্বোচ্চ অগ্রাধিকার।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
