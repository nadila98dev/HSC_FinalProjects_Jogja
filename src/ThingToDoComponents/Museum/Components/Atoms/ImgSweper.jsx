import React from "react";

function ImgSweper({ image }) {
  return (
    <>
      <img
        src={image}
        className="w-full lg:w-[50vw] lg:h-[500px] object-cover drop-shadow-xl"
        alt={"Image" + image}
      />
    </>
  );
}

export default ImgSweper;
