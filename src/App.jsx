import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ScrollCards from './Components/GridCards/ScrollCards'
import MainContainer from './Components/MainContainer/Main'
import FooterCards from './Components/FooterCards/FooterCards'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <MainContainer/>
    <ScrollCards/>
    <FooterCards/>
    <Footer/>
    </>
  )
}

export default App