import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Pages/Home/Home'
import Dishes from '../Pages/Dishes/Dishes'
import Booking from '../Pages/Booking/Booking'
import About from '../Pages/About/About'
import NotFound from '../Pages/NotFound/NotFound'
function Layout() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Restaurant_React' element={<Home/>}/>
        <Route path='/Dishes' element={<Dishes/>}/>
        <Route path='/Services' element={<Booking/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/*' element={<NotFound/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Layout
