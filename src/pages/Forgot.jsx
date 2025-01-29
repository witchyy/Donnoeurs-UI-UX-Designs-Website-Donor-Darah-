import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/forgot.png";
import img2 from "../assets/img/send.png";
import "../style/modal.css";


const Forgot = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="bg-[#fa8072] flex items-center justify-center min-h-screen">
      <div className=" flex flex-col bg-[#DD5353]  border-light Text md:border-none md:w-3/5 h-96 md:max-h-screen shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
        <div className=" left-32 pt-20">
          <img src={img} alt="img" />
        </div>
        <div className="absolute pt-24 left-[492px] text-left font-['Open_Sans'] font-bold text-[#dbc8ac] text-4xl">
          Forgot Password?
        </div>
        <p className="absolute w-[500px] pt-36 left-[494px] font-['Open_Sans'] font-medium text-[#dbc8ac] text-xl">
          Don’t worry. We’ll reset your password and send you a link to create a
          new one
        </p>

        <div className="absolute w-[586px] h-12 pt-48  left-[421px] ">
          <form action="">
            <div class="mt-7 px-20">
              <input
                type="email"
                id="email"
                class="bg-[#D9D9D9] border text-gray-900 font-['Open_Sans'] text-sm rounded-lg w-full h-12 p-2.5 "
                placeholder="john.doe@company.com"
                required></input>
            </div>
          </form>
        </div>

        <button
          onClick={toggleModal}
          type="submit"
          className=" relative top-72 left-32 w-[184px] h-11 bg-[#dbc8ac] hover:bg-[#b4a48b] font-['Open_Sans'] font-bold text-[#db3d3d] text-lg leading-[48px] whitespace-nowrap">
          Reset Password
        </button>
        {modal && (
          <div className="send">
            <div className="overlay"></div>
            <div className="modal-content  bg-[#DD5353] ">
              <div className="flex flex-col bg-[#DD5353] h-[450px] md:flex-row md:space-y-0">
                <div className="bg-red-200 bg-opacity-70 flex flex-col w-screen h-60 justify-between items-center rounded-[0px_0px_130px_130px]" />
                <div className="absolute ml-16 pt-8 w-96">
                  <img src={img2} alt="img" />
                </div>
                <div
                  onClick={() => navigate("/reset")}
                  className="absolute flex-1 justify-center items-center text-center font-['Open_Sans'] font-bold text-[#dbc8ac] text-3xl p-8 pt-72 ">
                  we have send an email to <br />
                  endingexplore@gmail.com
                  <br />
                  Check your Email to reset password
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgot;
