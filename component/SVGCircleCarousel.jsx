import { useEffect, useState } from "react";
import "./SVGCircleCarousel.css";
import circle_1 from "../src/assets/svg_circle/circle_1.svg";
import circle_2 from "../src/assets/svg_circle/circle_2.svg";
import circle_3 from "../src/assets/svg_circle/circle_3.svg";

function IMG({ src, rotate=0, scale=1 }) {
    return (
        <img
            src={src}
            alt=""
            className={`
            absolute
            top-1/2
            left-1/2
            origin-center
            w-500
        `}
            style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${1 + scale * 10})`,
                transformBox: "fill-box",
                    opacity: `${1 - (scale * 3.5)}`
            }}
        />
    );
}
function SVGCircleCarousel({ style, ref, scroll }) {
    return (
        <>
            <div
                className="
            SVGCircleCarousel
            absolute
            top-[0] w-full h-screen
            "
                style={style}
                ref={ref}
            >
                <IMG src={circle_1} rotate={scroll * 100} scale={scroll}/>
                <IMG src={circle_2} rotate={scroll * -100} scale={scroll}/>
                <IMG src={circle_3} rotate={scroll * 100} scale={scroll}/>
            </div>
        </>
    );
}

export default SVGCircleCarousel;
