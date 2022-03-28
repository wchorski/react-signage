// import React, { useState } from 'react'
import { React, useEffect, useState } from 'react'
// import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export const ImageSlider = ({ slides }) => {
  console.log("ImageSlider.js Component");

  //? Grab media from backend
  const [ initialState, setInitialState ] = useState( [] )
  useEffect( () => {
    fetch('/api/media1').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setInitialState(jsonResponse.media))
  }, [] )

  //? Slider Control
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => { setCurrent(current === length - 1 ? 0          : current + 1) }
  const prevSlide = () => { setCurrent(current ===          0 ? length - 1 : current - 1) }

  function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  async function autoAdv(speed){
    await delay(speed)
    nextSlide()
  }
  //autoAdv(4)


  if(!Array.isArray(slides) || slides.length <= 0){ return null }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft  className='left-arrow'  onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      {initialState.map((slide, index) => {
        return(
          <ul className={index === current ? 'slide active' : 'slide'} key= {index}>
            { index === current && (

              <img key={index} src={"../../../../filebrowser/root/media/" + slide} alt={"slide " + (index + 1) + " out of " + slide.length } className='image'></img>

            ) }
            
          </ul>
        )
      })}
    </section>
  )
}

export default ImageSlider