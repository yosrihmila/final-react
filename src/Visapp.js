import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Formulaire from './Formulaire'
import Navbar from './Navbar'
import Pricing from './Pricing'
function Visapp() {
return (
    <div>
    <Routes>
        <Route path='/' element={<App></App>} ></Route>
        <Route path='/Form/Pricing' element={<App></App>} ></Route>
        <Route path='/Form' element={<Formulaire/>} ></Route>
    </Routes>
    </div>
)
}

export default Visapp
