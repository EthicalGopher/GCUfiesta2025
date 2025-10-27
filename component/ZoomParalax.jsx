import { useState, useRef, useEffect, use } from "react";
import { useScroll, useMotionValueEvent, useInView, useMotionValue, useTransform, motion, animate } from "motion/react";
import { ReactLenis, useLenis } from "lenis/react";
import "./ZoomParalax.css";
import SVGCircleCarousel from "./SVGCircleCarousel.jsx";
import gimt_building_img from "../src/assets/gimt-building.png";

function ZoomParalax() {
    const svgCircleCarousel_ref = useRef(null);
    const zoom_container_ref = useRef(null);
    const app_container_ref = useRef(null);

    const [scrollSVGCarousel, setScrollSVGCarousel] = useState(0);
    const [zoomIncrementValue, setZoomIncrementValue] = useState(10);
    const [maskPosVal, setMaskPosVal] = useState(50);

    const isInView = useInView(svgCircleCarousel_ref, {
        amount: "all",
        root: app_container_ref,
    });


    const { scrollYProgress } = useScroll({
        target: zoom_container_ref,
        offset: ["start start", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollSVGCarousel(latest);
        const tmp = latest * 280;
        if (tmp < 55) {
            setZoomIncrementValue(10);
            setMaskPosVal(50);
        } else if (tmp >= 55 && tmp < 88) {
            setZoomIncrementValue(4);
            setMaskPosVal(45);
        } else if (tmp >= 88 && tmp < 100) {
            setZoomIncrementValue(1);
            setMaskPosVal(39);
        } else if (tmp >= 100) {
            setZoomIncrementValue(0.2);
        }
        
    });

    useEffect(() => {
        // console.log("SVGCircleCarousel is in view: ", isInView);
    }, [isInView]);

    return (
        <>
            <ReactLenis root />
            <div
                className="zoom_paralax"
                ref={app_container_ref}
                style={{
                    position: "relative",
                }}
            >
                <div className="zoom_container" ref={zoom_container_ref} style={{ position: "relative" }}>
                    <div
                        className="
                        zoom1
                        "
                        style={{
                            position: "sticky",
                            top: 0,
                        }}
                    >
                        <SVGCircleCarousel
                            style={{
                                color: `hsla(0, 0%, 100%, ${1 - (1*scrollSVGCarousel*3)})`,
                            }}
                            ref={svgCircleCarousel_ref}
                            scroll={scrollSVGCarousel}
                        />
                        <motion.img src={gimt_building_img} alt="gimt_building_img" style={{
                            maskSize: `calc(10% + ${1490 * scrollSVGCarousel / zoomIncrementValue}%)`,
                              maskPosition: `${maskPosVal}% center`, 
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ZoomParalax;
