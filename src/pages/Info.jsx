import React from 'react'
import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { IoIosSearch } from "react-icons/io"
import { IoCallOutline } from "react-icons/io5"
import { BiDonateBlood } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { IoLocationOutline } from "react-icons/io5"
import { FaRegUser } from "react-icons/fa"
import img from '../assets/img/img.png'

const Info = () => {
  return (
    <div>
      <Navbar2 />
      <main>
        <div>
            <Header />
        </div>
        <div>
            <h2 className="mt-10 text-center text-[#B73E3E] text-3xl font-semibold">INFORMASI</h2>
            <div className="gap-3 columns-3 p-20 text-[#B73E3E]">
                <div className="bg-[#EDDBC0] ml-10 text-center justify-center items-center p-5 rounded-xl">
                    <div className="ml-[35%]"><IoIosSearch size={80}/></div>
                    <h2 className="text-2xl font-semibold ">Cari & Temukan</h2>
                    <p className="text-sm font-medium mt-3">Cek daftar permohonan darah dibawah ini, dan temukan resipien yang berada di dekat daerah/lokasi kamu.</p>
                </div>
                <div className="bg-[#EDDBC0] ml-10 text-center justify-center items-center p-5 rounded-xl">
                    <div className="ml-[35%]"><IoCallOutline size={80}/></div>
                    <h2 className="text-2xl font-semibold ">Hubungi</h2>
                    <p className="text-sm font-medium mt-3">Selanjutnya, silakan menghubungi kontak yang tercantum untuk mendapatkan informasi lebih lanjut.</p>
                </div>
                <div className="bg-[#EDDBC0] ml-10 text-center justify-center items-center p-5 rounded-xl">
                    <div className="ml-[35%]"><BiDonateBlood size={80}/></div>
                    <h2 className="text-2xl font-semibold ">Donorkan</h2>
                    <p className="text-sm font-medium mt-3">Donorkan darahmu untuk membantu mereka agar bisa kembali sehat dan menjadi saudaramu.</p>
                </div>
            </div>
        </div>
        <div className="p-10 bg-[#CDCDCD] text-[#B73E3E]">
            <h2 className="text-3xl font-semibold text-center">BERITA ACARA</h2>
            <p className="text-md font-medium text-center">Temukan lokasi donor darah terdekat dari tempatmu.</p>
            <div className="gap-3 columns-3 mt-10">
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5 ">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5 ">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-3 columns-3 mt-10">
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5 ">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5 ">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg mx-auto" src={img} alt="" />
                    <div class="p-5 bg-[#EDDBC0]">
                        <h5 class="text-lg font-medium tracking-tight mb-5 ">Nama Acara</h5>
                        <div className="ml-14">
                            <div className="flex flex-row mb-2"><SlCalender size={20}/>
                                <p className="ml-5 font-medium">Tanggal</p>
                            </div>
                            <div className="flex flex-row mb-2"><IoLocationOutline size={20}/>
                                <p className="ml-5 font-medium">Lokasi</p>
                            </div>
                            <div className="flex flex-row mb-2"><FaRegUser  size={20}/>
                                <p className="ml-5 font-medium">Pemilik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div>
            <Footer />
        </div>
      </main>
    </div>
    
  )
}

export default Info
