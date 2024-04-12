import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from "./Components/About"
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Prices from './Components/Prices';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className=' overflow-x-hidden '>
      {/* <Navbar/> */}
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
