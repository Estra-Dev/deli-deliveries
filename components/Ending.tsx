import React from "react";
import { Button } from "./ui/button";
import { ArrowBigRightDash } from "lucide-react";

const Ending = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-[coral]  via-amber-300 to-[coral] text-white mt-12">
      <div className=" max-w-3xl w-full mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Ready to Transform your Delivery Operations?
        </h1>
        <p className="text-lg md:text-2xl font-semibold my-4">
          Join the Future of Delivery Companies using
          <span className="text-[coral]"> Deli Deliveries</span> for real time
          delivery tracking and management.
        </p>

        <Button
          size={"sm"}
          className="bg-amber-300/30 backdrop-blur-2xl border border-white text-[white] font-bold py-2 px-4 rounded-md"
        >
          Get Started
          <ArrowBigRightDash />
        </Button>

        <p className="text-sm md:text-lg mt-4">
          Experience seamless tracking, wide coverage, and quality assurance.
        </p>
      </div>
    </div>
  );
};

export default Ending;
