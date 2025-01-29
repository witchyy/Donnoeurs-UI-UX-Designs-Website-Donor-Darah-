import React from "react"
import img from '../assets/img/header.png'

const Header = () => {
  return (
    <div>
        <div className="bg-orange-100 font-sans flex flex-col md:flex-row md:justify-between items:center">
            <div className="md:w-auto text-center">
                <h1 className="font-bold font-sans text-6xl text-[#B73E3E] pt-24 ml-36">DONOR DARAH</h1>
                <p className="font-medium text-2xl text-[#B16868] pt-2 ml-36">Setetes darahmu sangat berarti untuk mereka</p>
            </div>
            <div className="w-full md:w-auto pt-1 flex-1 lg:flex justify-end items-end">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
