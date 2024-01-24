import LeftBar from "../../components/leftBar/LeftBar";
import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useState } from "react";


const Home = () => {  
  const [showLeftBar, setShowLeftBar] = useState(false);
  


  return (
    <div className="home">
        {showLeftBar && <LeftBar closeLeftBar={setShowLeftBar} />} 
        <Navbar openLeftBar={setShowLeftBar} />                
        <Hero />
        <Content />   
    </div>
  )
}

export default Home