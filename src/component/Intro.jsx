import React from 'react'
import img from '../assets/img/about.jpeg'

const Intro = () => {
  return (
    <div className="font-sans grid grid-cols-2 gap-x-8 p-10 pl-20  flex-row md:justify-between items:center">
      <div className="md:w-auto pl-18">
            <h2 className="text-4xl mb-5 text-[#B73E3E] font-semibold">Donor Darah</h2>
            <p className="text-justify text-xm font-medium">Donor darah adalah saat seseorang memberikan darahnya secara sukarela untuk membantu individu lain yang membutuhkan transfusi darah. Darah yang disumbangkan akan diuji, diproses, dan disimpan sebelum digunakan untuk membantu pasien yang sakit dan membutuhkan transfusi darah.</p>

            <p className="mt-10">tabel data darah</p>
      </div>
      <div className="w-full">
            <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Intro
