import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import SlideshowWithAnimations from './components/Styles/Styles'
import Stickers from './components/Stickers/Stickers'

export default function App() {
  
  return (
    <>
    <Navbar/>
    <SlideshowWithAnimations/>
    </>
  );
}


