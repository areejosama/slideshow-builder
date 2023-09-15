import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Swiper } from 'swiper/react';
import SwiperCore, { EffectFade, EffectCube, EffectFlip, EffectCoverflow } from 'swiper';

SwiperCore.use([EffectFade, EffectCube, EffectFlip, EffectCoverflow]);

export default function SlideshowWithAnimations() {
    const [selectedAnimation, setSelectedAnimation] = useState('coverflow');
    const animations = ['fade', 'cube', 'flip', 'coverflow'];

  return (
    <>

<div className="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-layer-group fa-2xl"></i>
  </button>
  <ul className="dropdown-menu">
  <div className='animtype text-center '>
        {animations.map((animation, index) => (
          <div className='d-flex flex-column'>
          <button type="button" className="btn text-capitalize"
           key={index}
            onClick={() => setSelectedAnimation(animation)}>
           {animation}
          </button>
          </div>
        ))}

      </div>
  </ul>
</div>
    <Header selectedAnimation={selectedAnimation}/>
   </>
  );
}



