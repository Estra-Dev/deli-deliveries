import { Clock, LocateFixedIcon, Star } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  const choose = [
    {
      name: "Fast and Seamless Tracking",
      icon: Clock,
      description: "Track your Order in real-time from pickup to door",
    },
    {
      name: "Wide Coverage",
      icon: LocateFixedIcon,
      description:
        "Available in 50+ cities with thousands of partner stores. We are expanding every month",
    },
    {
      name: "Quality Assured",
      icon: Star,
      description:
        "All Partners are verified and rated by customers. 99.8% customer satisfaction rate",
    },
  ];

  return (
    <div className=" w-full max-w-5xl mx-auto my-4 px-2">
      <p className=" font-bold text-xl md:text-3xl text-gray-800 text-center">
        Why Choose <span className=" text-[coral]">Deli Deliveries</span>
      </p>
      <p className=" text-center text-sm md:text-lg text-gray-600">
        A Very Reliable Delivery Platform
      </p>
      <div className=" flex flex-col md:flex-row justify-between gap-6 w-full text-gray-700 mt-6">
        {choose.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className=" flex items-start gap-3 max-w-2xl w-full"
              key={index}
            >
              <div className=" bg-[coral]/15 px-4 py-4 rounded-md">
                <Icon className=" text-[coral] font-bold text-2xl" />
              </div>
              <div className=" flex flex-col justify-start max-w-xl w-full">
                <h2 className=" font-bold text-lg md:text-xl">{item.name}</h2>
                <p className=" text-sm ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
