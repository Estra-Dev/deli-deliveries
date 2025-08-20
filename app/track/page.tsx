import { Car } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="p-4 w-full min-h-[calc(100vh-64px)] mt-16 flex items-center justify-center">
      <div className=" max-w-3xl w-full mx-auto p-4 bg-white shadow-md rounded-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">Track Your Order</h1>
        <p className="text-gray-600">
          Enter your order ID to track its status.
        </p>
        <form className="mt-7 max-w-lg w-full mx-auto px-3 ">
          <input
            type="text"
            placeholder="Order ID"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            Track Order
          </button>
        </form>
        {/* map order status */}
        <div className="mt-6 w-full bg-gray-200 h-[20rem] rounded-md flex items-center justify-center relative">
          <Car className="animate-bounce text-gray-500 w-10 h-10" />
          {/* <div className="absolute top-2 text-gray-600">
            <h2>Order Status</h2>

          </div> */}
          <span className="absolute bottom-2 right-2 text-gray-600">
            Your order is on the way!
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
