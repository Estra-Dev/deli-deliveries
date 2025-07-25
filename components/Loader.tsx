import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className=" top-0 left-0 w-screen flex flex-col gap-2 justify-center items-center bg-white h-screen">
      <div className=" max-w-xl overflow-hidden rounded-full relative">
        <div className=" overflow-hidden rounded-full animate-spin border-t-4 border-white h-full w-full absolute top-0 left-0"></div>
        <Image
          src={"/deli.png"}
          alt="deli logo"
          className=" w-full h-full object-cover"
          width={50}
          height={50}
        />
      </div>
      <p className=" font-extrabold text-2xl text-orange-700/35">Loading</p>
    </div>
  );
};

export default Loader;
