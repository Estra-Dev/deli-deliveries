"use client";

import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Food", "Parcel", "Pizza", "Groceries", "Shopping", "Gadget"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 100,
    delaySpeed: 2500,
  });

  return (
    <div className=" w-full relative max-h-[90vh] md:min-h-[90vh] mb-6">
      {/* animated image */}
      <div className=" hidden md:block absolute -z-50 lg:right-3 top-2 w-2xl p-1.5">
        <Image
          src={"/trk-dlv-removebg-preview.png"}
          width={500}
          height={500}
          alt="phone"
          className=" w-full h-full object-cover animate-pulse"
        />
      </div>
      <div className=" md:hidden absolute -z-50 right-0 top-2 w-2xl p-1.5">
        <Image
          src={"/dsp2-removebg-preview.png"}
          width={500}
          height={500}
          alt="phone"
          className=" animate-pulse"
        />
      </div>
      <div className=" lg:hidden absolute top-2 left-0 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/80 h-screen w-full -z-20"></div>
      <div className=" h-full w-full pt-32 md:pt-36 px-3 max-w-2xl mx-auto text-center space-x-7">
        <p className=" text-4xl md:text-6xl font-bold text-gray-800 space-y-3 tracking-wider">
          <span>Track your</span> <span className=" text-[coral]">{text} </span>
          {/* <Cursor /> */}
          <span>Orders in Real Time</span>
        </p>
        <p className=" text-xs font-bold text-[coral]/85 italic mt-4">
          Watch Your Delivery Live from your Device...
        </p>
        <div className=" flex justify-center items-center gap-2 md:gap-6 mt-20 md:mt-36">
          <div className=" w-3xl flex flex-col gap-1 justify-center items-center">
            <div className=" w-full overflow-hidden rounded-full bg-green-400">
              <Image
                src={"/search.jpg"}
                alt="search-rider"
                width={300}
                height={300}
                className=" object-contain"
              />
            </div>
            <p className=" text-gray-700 text-xs md:text-sm font-medium">
              Search Rider
            </p>
          </div>
          <LucideArrowRight className=" w-[100px] h-[100px] text-[coral] font-extrabold" />
          <div className=" w-3xl flex flex-col gap-1 justify-center items-center">
            <div className=" w-full overflow-hidden rounded-full bg-red-500">
              <Image
                src={"/book.jpg"}
                alt="book-rider"
                width={300}
                height={300}
                className=" object-contain"
              />
            </div>
            <p className=" text-gray-700 text-xs md:text-sm font-medium">
              Book Rider
            </p>
          </div>
          <LucideArrowRight className=" w-[100px] h-[100px] text-[coral] font-extrabold" />
          <div className=" w-3xl flex flex-col gap-1 justify-center items-center">
            <div className=" w-full overflow-hidden rounded-full bg-yellow-400">
              <Image
                src={"/monitor.jpg"}
                alt="monitor-rider"
                width={300}
                height={300}
                className=" object-contain"
              />
            </div>
            <p className=" text-gray-700 text-xs md:text-sm font-medium">
              Monitor Rider
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-3 mt-10">
          <Link
            href={"/place-order"}
            className=" text-xs md:text-sm font-medium text-white rounded-md py-1 hover:bg-white hover:text-[coral] transition-colors hover:border-[coral] hover:border ease-in px-2 bg-[coral]"
          >
            {" "}
            Get Started
          </Link>
          <Link
            href={"/track"}
            className=" text-xs md:text-sm font-medium text-[coral] rounded-md py-1 px-2 hover:bg-[coral] hover:text-white transition-colors border-[coral] border ease-in "
          >
            Track Your Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
