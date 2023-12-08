import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h3 className="text-center text-[24px]">
        Thank You for purchasing our products!
      </h3>
      <Link to="/" className="text-center">
        <button className="bg-button text-white px-3 py-1 rounded-lg">
          Back to main page
        </button>
      </Link>
    </div>
  );
};

export default Page;
