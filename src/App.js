import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Prices from "./Components/Prices";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
function App() {
  return (
    <div className=" overflow-x-hidden ">
      <Analytics id="G-1ZQZQZQZQZ" />
      <SpeedInsights id="G-1ZQZQZQZQZ" />
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
