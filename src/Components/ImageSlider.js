import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

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
  autoAdv(2)


  if(!Array.isArray(slides) || slides.length <= 0){ return null }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft  className='left-arrow'  onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key= {index}>
            { index === current && (

              <img src={slide.image} alt="slide" key={index} />

            ) }
            
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider