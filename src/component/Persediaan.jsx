import React from 'react'
import img from '../assets/img/home.png'

const Persediaan = () => {
  return (
    <div className="bg-gray-100">
      <h2 className="text-[#B73E3E] font-bold text-3xl p-10 text-center">PERSEDIAAN DARAH</h2>

        <div className="font-sans grid grid-cols-2 pl-20">
            <div className="font-sans grid grid-cols-2 gap-4  flex-row md:justify-between items:center">
              <div className="w-36 h-32 text-center py-7 shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)] rounded-xl">
                <h2 className="text-5xl text-[#B73E3E] font-bold">23</h2>
                 <p className="text-2xl text-[#B73E3E] font-semibold">A</p>
              </div>
              <div className="w-36 h-32 text-center py-7 shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)] rounded-xl">
                <h2 className="text-5xl text-[#B73E3E] font-bold">16</h2>
                <p className="text-2xl text-[#B73E3E] font-semibold">B</p>
              </div>
              <div className="w-36 h-32 text-center py-7 shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)] rounded-xl mt-20">
                <h2 className="text-5xl text-[#B73E3E] font-bold">27</h2>
                <p className="text-2xl text-[#B73E3E] font-semibold">AB</p>
              </div>
              <div className="w-36 h-32 text-center py-7 shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)] rounded-xl mt-20">
                <h2 className="text-5xl text-[#B73E3E] font-bold">10</h2>
                <p className="text-2xl text-[#B73E3E] font-semibold">O</p>
              </div>
            </div>
            
            <div>
                <img className="max-w-full mx-auto" src={img} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Persediaan
