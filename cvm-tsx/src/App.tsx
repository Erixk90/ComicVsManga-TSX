import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Equipos from './components/Equipos'
import BatallasDestacadas from './components/BatallasDestacadas'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Equipos />
      <BatallasDestacadas />
      <Footer />

    </div>
  )
}

export default App