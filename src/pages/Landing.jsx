import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Intro from '../component/Intro'
import Informasi from '../component/Informasi'
import Discuss from '../component/Discuss'
import Berita from '../component/Berita'
import Footer from '../component/Footer'

const Landing = () => {
  return (
    <div>
      <div>
      <Navbar />

      <main>
        <div id='header'>
          <Header/>
        </div>
        <div>
          <Intro />
        </div>
        <div>
          <Informasi />
        </div>
        <div>
          <Discuss />
        </div>
        <div>
          <Berita />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default Landing
