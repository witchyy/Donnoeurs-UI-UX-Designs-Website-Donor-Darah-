import React from "react";
import img from "../assets/img/forgot.png";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fa8072] flex items-center justify-center min-h-screen">
      <div className=" flex flex-col bg-[#DD5353]  border-light Text md:border-none md:w-3/5 h-96 md:max-h-screen shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
        <div className=" left-32 pt-20">
          <img src={img} alt="img" />
        </div>
        <div className="absolute pt-8 left-[282px] text-left font-['Times New Roman'] font-bold text-[#dbc8ac] text-2xl">
          Reset Password
        </div>
        <div className="absolute pt-20 left-[492px] text-left font-['Times New Roman'] font-bold text-[#dbc8ac] text-2xl">
          Enter New Password
        </div>
        <p className="absolute w-[400px] pt-32 left-[494px] font-['Times New Roman']   font-medium text-[#dbc8ac] text-sm">
          Your new password must be different from previously used password
        </p>

        <div className="absolute w-[586px] h-8 pt-40 left-[421px]">
          <form action="">
            <div class="mt-7 px-20">
              <input
                type="Password"
                id="Password"
                class="bg-[#D9D9D9] border text-gray-900 text-sm italic rounded-lg w-full h-10 p-2.5 "
                placeholder="Password"
                required></input>
            </div>
          </form>
        </div>
        <div className="absolute w-[586px] pt-56 left-[421px] ">
          <form action="">
            <div class="mt-7 px-20">
              <input
                type="password"
                id="password"
                class="bg-[#D9D9D9] border text-gray-900 text-sm italic rounded-lg w-full h-10 p-2.5 "
                placeholder="Confirm Password"
                required></input>
            </div>
          </form>
          <button
            onClick={() => navigate("/signin")}
            type="submit"
            class=" relative top-4 left-44 w-[174px] h-10 bg-[#dbc8ac] hover:bg-[#b4a48b] Montserrat-Bold font-bold text-[#db3d3d] text-lg leading-[48px] whitespace-nowrap">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
