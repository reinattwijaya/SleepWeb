import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from '../core/Navbar'
import Home from '../pages/Home'
import Predict from '../pages/Predict'

export default function MainRoute(){
    return(
        <Router>
            <header>
                <Navbar/>
            </header>
            <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = 'predict' element = {<Predict/>}/>
            </Routes>
        </Router>
    )
}