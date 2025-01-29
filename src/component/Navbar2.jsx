import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/logo.png";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-20 bg-orange-100">
        <div className="flex flex-wrap items-center justify-between">
          <img src={img} className="h-14 items-center" alt="" />
          <Link
            to="/"
            className="font-extrabold text-lg p-1 text-center cursor-pointer "
          >
            {" "}
            DONNOEURS
          </Link>
        </div>
        <nav className="flex font-semibold p-4 cursor-pointer text-base">
          <Link
            to="/home"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-10 text-[#B73E3E] hover:text-[#539165] transition-all cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            to="/tentang"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-10 text-[#B73E3E] hover:text-[#539165] transition-all cursor-pointer"
          >
            Tentang Kami
          </Link>
          <Link
            to="/info"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-10 text-[#B73E3E] hover:text-[#539165] transition-all cursor-pointer"
          >
            Informasi
          </Link>

          <Link
            to="/forum"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-10 text-[#B73E3E] hover:text-[#539165] transition-all cursor-pointer"
          >
            Forum
          </Link>

          <button
            onClick={() => navigate("/profile")}
            type="button"
            class="text-[#EDDBC0] bg-[#B73E3E] hover:bg-red-800 font-medium rounded-full px-8 py-1.5 text-center mb-4 ml-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-base"
          >
            <FaUser size={20} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
