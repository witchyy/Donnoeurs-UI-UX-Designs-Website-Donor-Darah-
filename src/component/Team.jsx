import React from 'react'
import img1 from '../assets/img/del.jpg'
import img2 from '../assets/img/del.jpg'
import img3 from '../assets/img/del.jpg'
import img4 from '../assets/img/del.jpg'
import img5 from '../assets/img/del.jpg'
import img6 from '../assets/img/del.jpg'
import img7 from '../assets/img/del.jpg'

const Team = () => {
  return (
    <div>
        <h2 className="text-[#B73E3E] text-3xl font-semibold p-10 text-center">Meet Our Team</h2>
        <div className="text-center px-10 mb-5 flex">
            <div class="kiri mt-20">
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img2} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Name</h5>
                        <p class="mb-3 font-normal text-gray-700"></p>
                        
                    </div>
                </div>
                <div class="mt-20 max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img7} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900"></h5>
                        <p class="mb-3 font-normal text-gray-700">Back End</p>
                        
                    </div>
                </div>
            </div>
            
            <div class="tengah ml-32">
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img1} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Adelia Divandariga S</h5>
                        <p class="mb-3 font-normal text-gray-700">Front End</p>
                        
                    </div>
                </div>
                <div class="mt-20 max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img3} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Name</h5>
                        <p class="mb-3 font-normal text-gray-700">....</p>
                        
                    </div>
                </div>
                <div class="mt-20 max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img6} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Name</h5>
                        <p class="mb-3 font-normal text-gray-700">....</p>
                        
                    </div>
                </div>
            </div>

            <div class="kanan ml-32 mt-20">
                <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img4} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Name</h5>
                        <p class="mb-3 font-normal text-gray-700"></p>
                        
                    </div>
                </div>
                <div class="mt-20 max-w-sm bg-white border border-gray-200 rounded-xl shadow-[4px_4px_15px_0px_rgba(0,0,0,0.50)]">
                    <img class="rounded-t-lg p-14" src={img5} alt="" />
                    
                    <div class="p-5">
                        <h5 class="text-lg font-bold tracking-tight text-gray-900">Name</h5>
                        <p class="mb-3 font-normal text-gray-700">Back End</p>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Team
