import React from "react";
import img from "../assets/img/signin.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignInCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fa8072] flex items-center justify-center min-h-screen">
      <div className="bg-[#f5f1f1]  border-light md:border-none md:w-3/5 md:h-5/6 shadow-2xl rounded-2xl p-4 md:flex-row md:space-y-0 ">
        <div className="bg-[#B73E3E] font-sans flex flex-col w-full h-48 md:justify-between items:center rounded-[0px_0px_70px_70px]">
          <div className="font-bold font-sans text-left text-4xl text-[#DBC8AC] pt-16 ml-16">
            Let's get you signed in!
          </div>
          <div className="absolute w-40 left-2/3 pt-0.5">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="bg-[#B73E3E] relative left-60 w-56 h-11 -top-4 text-[#EDDBC0] rounded-full">
          <p className="py-2 px-10 text-center text-xl Montserrat-Bold font-semibold">
            Sign In
          </p>
        </div>

        <form action="" className="w-full mt-7">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-600"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#D9D9D9] border text-gray-900 text-sm rounded-lg w-full h-10 p-2.5"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[#D9D9D9] border text-gray-900 text-sm rounded-lg w-full h-10 p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
          <p
            onClick={() => navigate("/Forgot")}
            className="relative italic hover:underline ml-[590px] mt-4 cursor-pointer"
          >
            Forgot Password?
          </p>

          <button
            onClick={() => navigate("/home")}
            type="submit"
            className="relative text-[#EDDBC0] bg-[#B73E3E] hover:bg-[#A03A3A] font-medium rounded-lg text-lg w-[60%] h-9 px-8 py-1.5 mt-4 left-40 "
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-gray-400">or sign in with</div>
        <div className="flex justify-center mt-2">
          <div className="pl-2">
            <FcGoogle size={30} />
          </div>
          <div className="pl-2">
            <FaFacebook size={30} />
          </div>
          <div className="pl-2">
            <FaApple size={30} />
          </div>
        </div>

        <div className="bg-[#DD5353] h-6 mt-4 rounded-md">
          <p className="py-2 px-10 -top-2 relative text-center text-white">
            New User? <span class="cursor-pointer hover:underline" onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;

