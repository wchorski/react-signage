import { React } from 'react'
import logo from './logo.svg';
import './App.css';
// import { Hello } from './components/Hello'
// import { BuildMedia } from './components/BuildMedia'
import { ImageSlider } from './components/ImageSlider'
import { SliderData } from './components/SliderData';

function App() {
  return (
    <div className="App">
      {/* <BuildMedia/> */}
      {/* < Hello/> */}

      {/* TODO show "UPDATING... when no slides are present" */}
      {/* <h1 class="updating">UPDATING...</h1> */}
      <ImageSlider slides={SliderData}/> 
      {/* <img src={logo}></img> */}
    </div>
  );
}

export default App;
