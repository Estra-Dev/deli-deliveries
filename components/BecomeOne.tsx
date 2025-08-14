"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const BecomeOne = () => {
  const become = [
    { name: "Become a Rider", image: "/bcm1.webp" },
    { name: "Become a Courier Company", image: "/courier.jpg" },
    { name: "Or remain Our Valuable Customer", image: "/cust.png" },
  ];

  return (
    <div className=" max-w-5xl w-full mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className=" font-bold text-center text-gray-800 mb-2 text-xl md:text-3xl">
        Become a <span className=" text-[coral]"> Delivery Partner</span>
      </h1>
      <p className="text-gray-600 text-center text-sm md:text-lg">
        Join our platform and start delivering smiles!
      </p>
      <div className=" mt-6 max-w-2xl w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg overflow-hidden shadow-sm"
        >
          {become.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between gap-1.5 items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[400px] object-cover"
                  width={500}
                  height={400}
                />
                <h2 className="mt-2 text-lg font-semibold text-[coral]">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mt-4 px-2 py-2 text-sm bg-[coral] text-white rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BecomeOne;
