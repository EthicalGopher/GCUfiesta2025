import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "../component/hero.jsx";
import Navbar from "../component/nav.jsx";
import Loader from "../component/loader.jsx";
import ZoomParalax from "../component/ZoomParalax.jsx";
import Schedule from "../component/Schedule.jsx";
import Memory from "../component/memory.jsx"
import Footer from "../component/footer.jsx";
import Sponsors from "../component/Sponsors.jsx";
import FlowbiteCarousel from "../component/FlowbiteCarousel.jsx";

const slides = [
  "https://images2.imgbox.com/01/d7/HArIwlSo_o.png",
  "https://images2.imgbox.com/c3/24/ybLcrqdW_o.jpg",
  "https://images2.imgbox.com/d0/85/m6uaHl0N_o.jpg",
  "https://images2.imgbox.com/3d/9d/DwAfMh6B_o.jpg",
];


export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Navbar />
                    <div className="overflow-hidden">
                        <div className="hero_background hidden md:block">
                          
                        <Hero/>
                        </div>
                        <div className="block h-[100%] w-screen md:hidden">
                <img src="mobile_bg.png" className=""/>
                      </div>
                      <div className="h-8 md:hidden bg-orange-300 w-full"></div>
                     <div className="md:hidden">
<FlowbiteCarousel slides={slides}/>
              </div>    
            </div>
            <ZoomParalax />
            <div className="">
            <Memory/>
            </div>
            <Schedule />
            <Sponsors />
            <Footer />
                </div>
            )}
        </>
    );
}
