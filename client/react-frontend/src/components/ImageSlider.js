import { React, useEffect, useState } from 'react'
// import { SliderData } from './SliderData'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/fa'


let slideLength

export const ImageSlider = ({ slides }) => {
  // console.log("ImageSlider.js Component");

  //? Grab media from backend
  const [ initialState, setInitialState ] = useState( [] )
  useEffect( () => {
    fetch('/api/media1').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      slideLength = jsonResponse.media.length
      setInitialState(jsonResponse.media)
    })
  }, [] )

  // console.log("slideLenght = " + slideLength);

  //? Slider Control
  const [current, setCurrent] = useState(0)

  const nextSlide = () => { setCurrent(current === slideLength - 1 ? 0               : current + 1) }
  const prevSlide = () => { setCurrent(current ===               0 ? slideLength - 1 : current - 1) }

  function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  async function autoAdv(speed){
    await delay(speed)
    nextSlide()
  }
  autoAdv(10)

  async function refreshPage(speed){
    await delay(speed)
    window.location.reload(true);
  }
  refreshPage(35)


  if(!Array.isArray(slides) || slides.slideLength <= 0){ return null }

  return (
    <section className="slider">
      <MdKeyboardArrowLeft  className='left-arrow'  onClick={prevSlide} />
      <MdKeyboardArrowRight className='right-arrow' onClick={nextSlide} />

      {initialState.map((slide, index) => {
        return(
          <ul className={index === current ? 'slide active' : 'slide'} key= {index}>
            { index === current && (

              <img key={index} src={"./root/media/" + slide} alt={"slide " + (index + 1) + " out of " + slide.slideLength } className='image'></img>

            ) }
            
          </ul>
        )
      })}
    </section>
  )
}

export default ImageSlider