// import Header from "Header.jsx";
import "./App.css";
import {LoadingScreen} from "./components/LoadingScreen";
import "./index.css"
import { useState, useEffect } from "react";
import {Navbar} from "./components/Navbar";
import {About} from "./components/About";
import { Certifications } from "./components/Certifications";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";

function App() {

  const [isLoaded,setIsLoaded] =  useState(false);

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar/>
      <About/>
      <Projects/>
      <Certifications/>
      <Contact/>
      </div>
    </>

  );
}

export default App;
