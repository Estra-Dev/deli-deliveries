"use client";

import React, { useState } from "react";

const PlaceOrder = () => {
  const [isActive, setIsActive] = useState("item");

  return (
    <div className="p-4 w-full min-h-[calc(100vh-64px)] mt-16 flex items-center justify-center ">
      <div className="max-w-2xl w-full min-h-[600px] mx-auto bg-white shadow-md rounded-md text-center">
        {/* nav */}
        <div className=" w-full flex justify-between mb-6 border-[1px] border-gray-100 text-xs">
          <p
            className={`font-bold py-3 text-center text-[coral] flex-1 cursor-pointer ${
              isActive === "item" ? "border-b-2 border-[coral]" : ""
            }`}
            onClick={() => setIsActive("item")}
          >
            Item
          </p>
          <p
            className={`font-bold py-3 text-center text-[coral] flex-1 cursor-pointer ${
              isActive === "pickup" ? "border-b-2 border-[coral]" : ""
            }`}
            onClick={() => setIsActive("pickup")}
          >
            Pickup/Dropoff
          </p>
          <p
            className={`font-bold py-3 text-center flex-1 cursor-pointer ${
              isActive === "preview"
                ? "border-b-2 text-[coral] border-[coral]"
                : " text-[coral]/50"
            }`}
            // onClick={() => setIsActive("preview")}
          >
            Preview
          </p>
        </div>
        {isActive === "item" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">
              Place Your Order
            </h1>
            <p className="text-gray-600">
              Fill in the details below to place your order.
            </p>
            <form className="mt-16 max-w-lg w-full mx-auto px-3 ">
              <input
                type="text"
                placeholder="Product Name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="number"
                placeholder="Quantity"
                className="border border-gray-300 p-2 rounded-md w-full mt-4"
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
              >
                Place Order
              </button>
            </form>
          </>
        )}
        {isActive === "pickup" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">
              Schedule Your Pickup/Dropoff
            </h1>
            <p className="text-gray-600">
              Fill in the details below to schedule your pickup or dropoff.
            </p>
            <form className="mt-16 max-w-lg w-full mx-auto px-3 ">
              <div className=" flex flex-col items-start gap-2.5">
                <label htmlFor="fromWhere">From</label>
                <input
                  type="text"
                  placeholder="From Where..."
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5 mt-4">
                <label htmlFor="toWhere">To</label>
                <input
                  type="text"
                  placeholder="To Where"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
              >
                Schedule
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
