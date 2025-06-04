import SectionHeading from "./others/SectionHeading";

const ProductList = () => {
  return (
    <div>
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-[#FFEBF0] mt-20">
        <SectionHeading
          title={{ gray: "LATEST", dark: "COLLECTIONS" }}
          align="center"
        />
        <p className="text-center text-base text-gray-600 font-medium">
          ✨ নতুন স্টাইলে জ্বলে উঠুন! ✨
        </p>
        <p className="text-center text-base text-gray-600 mt-1">
          ট্রেন্ডিং পণ্যগুলোর সাথে থাকুন সবসময় এক ধাপ এগিয়ে! আপনার ফ্যাশন,
          আপনার পরিচয় <span className="text-primary">GloreBD</span> এর সাথে।❤️
        </p>
      </section>
    </div>
  );
};

export default ProductList;
