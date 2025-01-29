import React from 'react'
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="gap-4 columns-4 p-10 bg-[#B73E3E] text-white">
      <div className="w-full ">
        <h5>Kantor Cabang PMI Takengon Aceh Tengah:</h5>
        <p>Jl. Sengeda No.356, Takengon Tim., Lut Tawar, Kabupaten Aceh Tengah, Aceh 24519, Indonesia</p>
        <h5>Kantor Cabang PMI Takengon Aceh Tengah:</h5>
        <p>Jl. Sengeda No.356, Takengon Tim., Lut Tawar, Kabupaten Aceh Tengah, Aceh 24519, Indonesia</p>
      </div>
      <div>
        <h2>PENGUNJUNG WEBSITE</h2>
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl">
          <p className="text-[#B73E3E] p-2">Online : 12 | Total Pengunjung 6000</p>
        </div>
      </div>
      <div>
        <h2>Ikuti Kami</h2>
        <div className="flex">
          <FaInstagramSquare size={30}/>
          <FaXTwitter size={30}/>
          <FaFacebook size={30}/>
          <FaYoutube size={30}/>
        </div>
      </div>
      <div>Hubungi Kami : </div>
      
    </div>
  )
}

export default Footer
