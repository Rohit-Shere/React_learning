import React from 'react'
import { Header, Footer, Home } from './components'
import { Outlet } from 'react-router'

function App(){
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
