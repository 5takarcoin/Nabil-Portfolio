import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Cover } from "./components/Cover";

function App() {
  return (
    <div className="">
      {/* <div className="absolute bgholder -z-30 h-full w-full"></div> */}
      <div className="max-w-[1024px] m-auto ">
        {/* <div className="absolute blurry bg-white -z-30 h-full w-full"></div> */}
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
        <Cover />
        {/* <button className="absolute w-full bottom-0 text-white text-4xl">
        <FaArrowDown className="m-auto mb-16" />
      </button> */}
      </div>
    </div>
  );
}

export default App;
