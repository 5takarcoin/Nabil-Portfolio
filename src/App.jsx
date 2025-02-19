import { FaArrowDown } from "react-icons/fa";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Cover } from "./components/Cover";

function App() {
  const [cover, setCover] = useState(true);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Cover />
      <button className="absolute w-full bottom-0 text-white text-4xl">
        <FaArrowDown className="m-auto mb-16" />
      </button>
    </>
  );
}

export default App;
