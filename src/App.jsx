import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    {/* <Body/> */}
  {/* <Outlet/>  jo bhi childer in main.jsx meh hoga voh yah display hoga or jo isme hai voh fix rahega */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App