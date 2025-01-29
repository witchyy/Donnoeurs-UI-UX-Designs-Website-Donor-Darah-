import React from 'react'
import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'
import img from '../assets/img/img.png'


const Forum = () => {
  return (
    <div>
      <Navbar2 />
      <main>
        <div>
            <Header />
        </div>
        <div className="flex p-10">
            <div className="w-8/12 ml-28">
                <div className="flex flex-col justify-center items-center">
                    <form className="w-8/12">
                        <div class="relative">
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100" placeholder="Let’s share what going on your mind...." required/>
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#DD5353] hover:bg-[#BC4A4A] font-medium rounded-lg text-sm px-4 py-2">Create Post</button>
                        </div>
                    </form>
                    <div className="mt-10 bg-[#EDDBC0] w-8/12 rounded-lg p-5">
                        p
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="w-3/12">
                <div className="p-5 bg-[#EDDBC0] rounded-xl">
                    <h2 className="font-semibold text-lg mb-7">Popular Tags</h2>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">82,645 Posted by this tag</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">65,523 Posted • Trending</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">51,354 • Trending in Bangladesh</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">48,029 Posted by this tag</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">51,354 • Trending in Bangladesh</p>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold text-md">#Lorem</p>
                        <p className="font-medium text-sm">82,645 Posted by this tag</p>
                    </div>
                </div>
            </div>
            
        </div>
      </main>

    </div>
  )
}

export default Forum
