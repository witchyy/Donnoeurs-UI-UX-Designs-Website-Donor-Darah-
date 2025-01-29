import React from 'react'
import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'
import Donnoeurs from '../component/Donnoeurs'
import Team from '../component/Team'
import Footer from '../component/Footer'

const Tentang = () => {
  return (
    <div>
      <Navbar2 />
      <main>
        <div>
            <Header />
        </div>
        <div>
            <Donnoeurs />
        </div>
        <div>
            <Team />
        </div>
        <div>
            <Footer />
        </div>
      </main>
    </div>
  )
}

export default Tentang
