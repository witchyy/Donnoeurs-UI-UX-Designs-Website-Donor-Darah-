import React from 'react'
import img1 from '../assets/img/b1.jpg'
import img2 from '../assets/img/b2.jpg'
import img3 from '../assets/img/b3.jpg'
import img4 from '../assets/img/b4.jpg'
import img5 from '../assets/img/b5.jpg'
import img6 from '../assets/img/b6.jpeg'

const Berita = () => {
  return (
    <div className="p-10 pl-20">
        <h2 className="text-4xl text-[#B73E3E] font-semibold mb-5">Berita Terkait</h2>
      
        <div className="gap-3 columns-3">
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img1} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">PMI Aceh Tengah Dukung Donor Darah untuk Masyarakat Bersama TribunGayo</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">20 Juli 2023 21:03</p>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img2} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">Dewan Kehormatan dan Pengurus PMI Aceh Tengah Resmi Dilantik</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">6 Juli 2021 12:55</p>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img3} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">Aulia Putra Terpilih Sebagai Ketua PMI Aceh Tengah</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">22 Februari 2022 13:50</p>
                </div>
            </div>
            
        </div>

        <div className="gap-3 columns-3 mt-10">
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img4} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">PMI Kota Banda Aceh Kumpulkan 200 Kantong Darah saat Peringatan HDDS</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">17 Juli 2024 09:59</p>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img5} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">Donor Darah Kemenag Aceh Tengah Kumpulkan 35 Kantong</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">14 Desember 2022 15:11</p>
                </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
                <img class="rounded-t-lg" src={img6} alt="" />
                <div class="p-5">
                    <h5 class="text-lg font-medium tracking-tight text-gray-900">HUT Humas ke-73, Polres Aceh Tengah Donor darah</h5>
                    <p class="mt-5 font-normal text-gray-400 text-xs">29 Oktober 2024 21:08</p>
                </div>
            </div>
            
        </div>

        <div className="mt-10">
            <h4 className="font-medium mb-5">Tag :</h4>
            <button type="button" class="text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 shadow-md">Aceh Tengah</button>
            <button type="button" class="text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 shadow-md">PMI</button>
            <button type="button" class="text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 shadow-md">Takengon</button>
            <button type="button" class="text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 shadow-md">Cabang PMI</button>
            <button type="button" class="text-black bg-[#D9D9D9] font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 shadow-md">Donor Darah Takengon</button>

        </div>
            

    </div>
  )
}

export default Berita
