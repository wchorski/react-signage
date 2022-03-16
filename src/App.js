// import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';

function App() {


  // class App extends Component {
  //   constructor(props){
  //     super(props);

  //     this.state={
  //       newItem:"",
  //       list: []
  //     }
  //   }
  // }


  return (
    <div className="App">

      <ImageSlider slides={SliderData}/> 

      {/* <div id="img-cont">
        <div className="frame"><img src="media/2.jpg" alt="slider image"></img></div>
        <div className="frame"><img src="media/3.jpg" alt="slider image"></img></div>
        <div className="frame"><img src="media/5.jpg" alt=""></img></div>
        <div className="frame"><img src="media/4.jpeg" alt=""></img></div>
      </div> */}
    </div>
  );
}

export default App;
