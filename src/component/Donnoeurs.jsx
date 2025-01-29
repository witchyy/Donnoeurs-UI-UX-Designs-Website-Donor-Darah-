import React from 'react'
import img from '../assets/img/tentang.jpeg'

const Donnoeurs = () => {
  return (
    <div>
      <div className="font-sans grid grid-cols-2 gap-4 flex-row md:justify-between items:center mt-10">
        <div>
            <img className="w-[60%] mx-auto" src={img} alt="" />
        </div>
        <div>
            <p className="text-sm text-slate-500 font-semibold mb-2">Introduction to</p>
            <h2 className="text-4xl text-[#B73E3E] font-semibold mb-2">Donnoeurs</h2>
            <p className="text-lg font-medium text-justify pr-10">Diambil dari kata donor yang berasal dari bahasa Prancis. Website ini dirancang untuk memudahkan pendonor dalam memberikan informasi detail tentang proses donor darah, serta membantu dalam situasi stok darah terbatas dengan pencarian pendonor sukarelawan.</p>
        </div>
      </div>
    </div>
  )
}

export default Donnoeurs
