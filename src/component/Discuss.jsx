import React from "react";
import img from "../assets/img/dis.png";
import img2 from "../assets/img/diskusi.jpeg";

const Discuss = () => {
  return (
    <div>
      <figure class="relative cursor-pointer">
        <img class="rounded-lg" src={img2} alt="image description" />
        <figcaption class="absolute px-16 text-lg text-white "></figcaption>
        <div className="flex flex-row -bottom-96">
          <img className="h-14" src={img} alt="" />
          <h2 className="text-4xl text-[#fff] font-semibold">Discussion</h2>
        </div>
      </figure>
    </div>
  );
};

export default Discuss;
