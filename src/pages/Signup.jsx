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
      <div className="bg-[#f5f1f1] border-light md:border-none md:w-3/5 md:h-4/6 shadow-2xl rounded-2xl p-4 md:flex-row md:space-y-0 ">
        <div className="bg-[#B73E3E] font-serif flex flex-col w-full h-48 md:justify-between items:center rounded-[0px_0px_70px_70px]">
          <p class="font-serif font-bold text-left text-4xl text-[#DBC8AC] pt-16 ml-16">
            Create an account!
          </p>
          <div className="absolute w-40 left-2/3 pt-0.5">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="bg-[#B73E3E] relative left-60 w-56 h-11 -top-4 text-[#EDDBC0] rounded-full">
          <p className="py-2 px-10 text-center text-xl Montserrat-Bold font-semibold">
            Sign Up
          </p>
        </div>

        <form action="" className="w-full mt-7">
          <div className="mb-4">
            <label
              For="name"
              className="block mb-2 text-sm font-bold text-gray-600">
              Full Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-[#D9D9D9] border text-gray-900 text-sm rounded-lg w-full h-10 p-2.5"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label
              For="email"
              className="block mb-2 text-sm font-bold text-gray-600">
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
              For="password"
              className="block mb-2 text-sm font-bold text-gray-600">
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

          <button
            onClick={() => navigate("/home")}
            type="submit"
            className="relative text-[#EDDBC0] bg-[#B73E3E] hover:bg-[#A03A3A] font-bold font-serif rounded-lg text-lg w-[60%] h-9 px-8 py-1.5 mt-4 left-40">
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-gray-400">or sign up with</div>
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
          <p className="py-2 px-10 -top-2 relative text-center text-black text-sm font-normal ">
            Already have account?{" "}
            <span
              class="text-white text-sm cursor-pointer hover:underline"
              onClick={() => navigate("/signin")}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
