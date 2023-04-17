//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer'
import News from './News';




export default function Home(){
    return(
        <div>
            <Navbar/>
            <News/>
            <Footer/>
        </div>
    
    )
}