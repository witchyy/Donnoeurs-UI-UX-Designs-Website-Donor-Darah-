import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/aktivitas.jpeg";

const Aktivitas = () => {
  const navigate = useNavigate();

  return (
    <div className="p-20 bg-gray-100">
      <figure class="relative cursor-pointer">
        <img class="rounded-lg" src={img} alt="image description" />

        <figcaption class="absolute px-16 text-lg text-white bottom-[45px]">
          <h2 className="text-3xl text-[#EDDBC0] font-semibold">
            Riwayat Aktivitas
          </h2>
          <div className="font-sans grid grid-cols-2 gap-8  flex-row justify-between items:center mt-16">
            <div className="bg-[#EDDBC0] w-[120%]  p-5 text-center rounded-lg">
              <h5 className="text-[#B73E3E] text-2xl font-semibold">
                Golongan Darah
              </h5>
              <h2 className=" text-rose-400 text-3xl font-medium mt-3">A</h2>
            </div>
            <div className="bg-[#EDDBC0] w-[120%]  p-5 text-center rounded-lg ml-28">
              <h5 className="text-[#B73E3E] text-2xl font-semibold">
                Total Donor
              </h5>
              <h2 className=" text-rose-400 text-3xl font-medium mt-3">0</h2>
            </div>
          </div>
          <div className="font-sans grid grid-cols-2 gap-8 flex-row justify-between items:center mt-16">
            <div className="bg-[#EDDBC0] w-[120%]  p-5 text-center rounded-lg">
              <h5 className="text-[#B73E3E] text-2xl font-semibold">
                Donor Terakhir Pada :{" "}
              </h5>
              <h2 className=" text-rose-400 text-3xl font-medium mt-3">-</h2>
            </div>
            <div className="bg-[#EDDBC0] w-[120%]  p-5 text-center rounded-lg ml-28">
              <h5 className="text-[#B73E3E] text-2xl font-semibold">
                Donor Kembali Pada :
              </h5>
              <h2 className=" text-rose-400 text-3xl font-medium mt-3">-</h2>
            </div>
          </div>
        </figcaption>
      </figure>

      <div className="font-sans bg-[#EDDBC0] w-full h-auto mt-10 rounded-lg p-10">
        <h2 className="text-3xl font-semibold text-[#B73E3E]">
          Tambahkan Histori Donor Anda
        </h2>
        <p className="text-sm font-medium text-[#B73E3E]">
          Rekam aktivitas donor darah anda
        </p>
        <button
          type="submit"
          class="text-[#EDDBC0] bg-[#DC3E3E] hover:bg-[#A03A3A] font-medium rounded-full text-lg w-96 px-5 py-2.5 mt-5 mx-[35%] text-center">
          Upload Bukti
        </button>
      </div>

      <div className="font-sans bg-[#DD5353] w-full h-auto mt-10 rounded-lg p-10">
        <h2 className="text-3xl font-semibold text-[#EDDBC0]">Isi Formulir</h2>
        <p className="text-sm font-medium text-[#EDDBC0]">
          Pengisian formulir untuk registrasi anda
        </p>
        <button
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          type="submit"
          class="text-[#B73E3E] bg-[#DBC8AC] hover:bg-[#BEB3A2] font-medium rounded-full text-lg w-96 px-5 py-2.5 mt-5 mx-[35%] text-center">
          Upload Bukti
        </button>
      </div>
    </div>
  );
};

export default Aktivitas;
