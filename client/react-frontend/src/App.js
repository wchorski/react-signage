import { React } from 'react'
import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello'
import { BuildMedia } from './components/BuildMedia'
import { ImageSlider } from './components/ImageSlider'
import { SliderData } from './components/SliderData';

function App() {
  return (
    <div className="App">
      {/* <BuildMedia/> */}
      {/* < Hello/> */}
      <ImageSlider slides={SliderData}/> 
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default App;
