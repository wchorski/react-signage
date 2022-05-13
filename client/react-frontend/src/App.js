import { React } from 'react'
import logo from './logo.svg';
import './App.css';
// import { Hello } from './components/Hello'
// import { BuildMedia } from './components/BuildMedia'
import { ImageSlider } from './components/ImageSlider'
import { SliderData } from './components/SliderData';

// const chokidar = require('chokidar')
// const watcher = chokidar.watch('../../json/*.json', {
//   persistent: true
// })
// watcher.on('change', path => {
//   console.log(path, '[[ REACT FILE CHANGED ]]')
//   window.location.reload(true)
// })

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
