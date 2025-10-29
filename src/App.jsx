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
                    <div className=" hero_background overflow-hidden">
                        <Navbar />
                        <Hero />
               
                    </div>
            <div>
                    <ZoomParalax />
            </div>
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
