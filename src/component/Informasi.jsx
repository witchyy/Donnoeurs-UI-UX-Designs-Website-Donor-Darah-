import React from 'react'
import img1 from '../assets/img/card1.png'
import img2 from '../assets/img/card2.png'
import img3 from '../assets/img/card3.png'

const Informasi = () => {
  return (
        <div className="bg-[#EDEDED]">
            <h2 className="text-2xl mb-3 pt-10 text-[#B73E3E] font-semibold text-center">Alasan harus menggunakan Donnoeurs?</h2>
            <p className="text-xm font-medium text-center text-[#B73E3E]">info tagline?</p>
        <div>
        <div className="gap-8 columns-3 mx-16 mt-10">
            <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl">
                <img class="rounded-t-lg w-11/12 mt-5 mx-5" src={img1} alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 text-center">Ketahui data pendonor darah aktif sebagai alternatif jika stok darah pasien terbatas.</h5>
                    </a>
                </div>
            </div>
            <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl">
                <img class="rounded-t-lg w-9/12 mt-5 mx-11" src={img2} alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 text-center">Mengirim pengingat kepada pendonor terdaftar untuk mengingatkan  tentang jadwal donor darah.</h5>
                    </a>
                </div>
            </div>
            <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow-2xl">
                <img class="rounded-t-lg w-8/12 mt-8 mx-16" src={img3} alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 text-center">Membantu menyadarkan masyarakat tentang pentingnya donor darah, melalui video edukasi.</h5>
                    </a>
                </div>
            </div>
        </div> <br/><br/><br/>
        
      </div>
    </div>
  )
}

export default Informasi
