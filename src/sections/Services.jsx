import { RiExchangeFundsFill } from "react-icons/ri";
import { LuHeadset } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";

const serviceHighlights = [
  {
    title: "Easy Exchange Policy",
    subtitle: "We offer hassle-free exchange policy",
    icon: RiExchangeFundsFill,
  },
  {
    title: "3 Days Return Policy",
    subtitle: "We provide 3 days free return policy",
    icon: IoIosCheckmarkCircle,
  },
  {
    title: "Best Customer Support",
    subtitle: "We provide 24/7 customer support",
    icon: LuHeadset,
  },
];

const Services = () => {
  return (
    <div className="container flex justify-between items-center py-12">
      {serviceHighlights.map(({ title, subtitle, icon: Icon }, index) => (
        <div key={index} className="text-black text-center">
          <Icon className="w-10 h-10 mx-auto mb-4" />
          <h3 className="font-bold">{title}</h3>
          <p className="text-base font-medium mt-1">{subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
