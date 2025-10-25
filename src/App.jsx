import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "../component/hero.jsx";
import Navbar from "../component/nav.jsx";
import Loader from "../component/loader.jsx";
import ZoomParalax from "../component/ZoomParalax.jsx";
import Schedule from "../component/Schedule.jsx";
import Memory from "../component/memory.jsx"
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
                <div className="md:hidden max-w-screen">
                    <Memory/>
                </div>
                    </div>
            <div>
                    <ZoomParalax />
            </div>
            <div className="hidden md:block overflow-hidden">
            <Memory/>
            </div>
            <div id="schedule">
            <Schedule />
            </div>
                </div>
            )}
        </>
    );
}
