import React from 'react'
import Header from './components/Header/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
