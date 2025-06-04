import ProductList from "@/src/components/ProductList";
import HeroSection from "@/src/sections/HeroSection";
import Services from "@/src/sections/Services";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProductList />
      <Services />
    </div>
  );
}
