import './App.css';
import Navbar from "./components/Navbar";
import Carousel from './components/Carousel.js';
import c1 from './images/c1.png';
import c2 from './images/c2.png';
import c3 from './images/c3.jpg';
import c4 from './images/c4.jpg';

function App() {
  
  return (
    <div >
    <Navbar />
     <Carousel>

    <img src={c1} alt="placeholder" height={480} />
    <img src={c2} alt="placeholder" height={480}/>
    <img src={c3} alt="placeholder" height={480}/>
    <img src={c4} alt="placeholder" height={480}/>


      </Carousel>
    </div>
    
  );

  
}

export default App;
