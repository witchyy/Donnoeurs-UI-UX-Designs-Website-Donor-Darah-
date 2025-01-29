import React from 'react'
import Navbar2 from '../component/Navbar2'
import Header from '../component/Header'
import Persediaan from '../component/Persediaan'
import Aktivitas from '../component/Aktivitas'
import Footer from '../component/Footer'
import Welcome from '../component/Welcome'

const Home = () => {
  return (
    <div>
        <div>
        <Navbar2 />
        </div>
        <main>
            <div>
               <Header /> 
            </div>
            <div>
               <Welcome   /> 
            </div>
            <div>
              <Persediaan />
            </div>
            <div>
              <Aktivitas />
            </div>
            <div>
              <Footer />
            </div>
        </main>
    </div>
  )
}

export default Home
