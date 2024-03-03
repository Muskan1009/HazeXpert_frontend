import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from "./style";
import { Navbar, Hero, Design, Design1, Upload, Step, Features, Footer } from "./components";
import About from './Pages/About';
import Support from './Pages/Support';
import FAQ from './Pages/FAQ';

const App = () => (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={
  <div className="bg-primary w-full overflow-hidden">
    <div className="absolute z-[1] w-[60%] h-[60%] bottom-[75%] right-[75%] rounded-full purple__gradient" />
    <div className="bg-[url('./assets/bgImg.png')] z-[0] lg:w-full object-contain lg:object-none h-full lg:h-auto">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <Design />
    <Upload />

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:mt-0 mt-[40rem]`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
          <span className="text-gradient">Steps To</span>{" "}
          Upload The File <br className="sm:block hidden" />{" "}
        </h1>
      </div>

      <Step />
      <Design1 />
    </div>

    <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative left-72 mt-10 md:mt-0`}>
      <div className="flex flex-row justify-between items-center w-full mb-10 relative -left-72 md:left-0">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] ss:leading-[70px] leading-[50px] text-[42px] text-white">
          <span className="text-gradient">Use Cases</span>{" "}
          Of HazeXpert <br className="sm:block hidden" />{" "}
        </h1>
      </div>

      <Features />
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
  }/>
  <Route path="/about" element={<About />} />
  <Route path="/support" element={<Support />} />
  <Route path="/faq" element={<FAQ />} />
  
   </Routes>
    </BrowserRouter>
);

export default App
