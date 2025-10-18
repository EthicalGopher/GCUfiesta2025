import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "../component/hero.jsx";
import Navbar from "../component/nav.jsx";
import Loader from "../component/loader.jsx";

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
        <div className="min-h-screen hero_background ">
          <Navbar />
          <Hero />
        </div>
      )}
    </>
  );
}
