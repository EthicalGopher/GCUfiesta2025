import { useEffect, useState } from "react";
import "./SVGCircleCarousel.css";
import { pre, s } from "motion/react-client";

const INITIAL_RADIUS = 398; // 346

function SVGCircleCarousel({ style, ref, scroll }) {
    const [styleState, setStyleState] = useState({});

    useEffect(() => {
        console.log("rotate: ", scroll * 280);
    }, [scroll]);

    useEffect(() => {
        setStyleState({
            color: style?.color || "black",
            fontSize: 25,
            width: INITIAL_RADIUS * 2 + 10,
            height: INITIAL_RADIUS * 2 + 10,
            radius1: INITIAL_RADIUS,
            radius2: INITIAL_RADIUS - 100, // - 87 // 259
            radius3: INITIAL_RADIUS - 100 - 99, // -87 -86 // 173
            letterSpacing: 4,
            rotate1: scroll / 2 * 100,
            rotate2: scroll / 2 * -100,
            rotate3: scroll / 2 * 100,
            scale1: 1 + (scroll * 10),
            scale2: 1 + (scroll * 10),
            scale3: 1 + (scroll * 10),
        });
    }, [style, scroll]);

    return (
        <>
            <div className="SVGCircleCarousel" style={style} ref={ref}>
                <svg
                    viewBox={`0 0 ${styleState.width} ${styleState.height}`}
                    width={styleState.width}
                    height={styleState.height}
                    style={{
                        transform: `translate(-50%, -50%) rotate(${styleState.rotate1}deg) scale(${styleState.scale1})`
                    }}
                >
                    {/*   <defs>*/}
                    <path
                        id="circlePath1"
                        d={`M ${styleState.width / 2} ${styleState.height / 2}
                                m ${-styleState.radius1} 0
                                a ${styleState.radius1} ${
                            styleState.radius1
                        } 0 0 0 ${2 * styleState.radius1} 0
                                a ${styleState.radius1} ${
                            styleState.radius1
                        } 0 0 0 ${-2 * styleState.radius1} 0`}
                        fill="none"
                    />
                    {/*</defs>  */}

                    <text
                        letterSpacing={styleState.letterSpacing + "px"}
                        font-size={styleState.fontSize}
                        fill={styleState.color}
                        font-family="sans-serif"
                    >
                        <textPath
                            href="#circlePath1"
                            startOffset="0%"
                            textLength="1884"
                            lengthAdjust="spacingAndGlyphs"
                        >
                            Foreign Language Cultural Fiesta 2025 ● Foreign
                            Language Cultural Fiesta 2025 ● Foreign Language
                            Cultural Fiesta 2025 ● Foreign Language Cultural
                            Fiesta 2025 ●
                        </textPath>
                    </text>
                </svg>
                <svg
                    viewBox={`0 0 ${styleState.width} ${styleState.height}`}
                    width={styleState.width}
                    height={styleState.height}
                    style={{
                        transform: `translate(-50%, -50%) rotate(${styleState.rotate2}deg) scale(${styleState.scale2})`
                    }}
                >
                    {/*   <defs>*/}
                    <path
                        id="circlePath2"
                        d={`M ${styleState.width / 2} ${styleState.height / 2}
                                m ${-styleState.radius2} 0
                                a ${styleState.radius2} ${
                            styleState.radius2
                        } 0 0 0 ${2 * styleState.radius2} 0
                                a ${styleState.radius2} ${
                            styleState.radius2
                        } 0 0 0 ${-2 * styleState.radius2} 0`}
                        fill="none"
                    />
                    {/*</defs>  */}

                    <text
                        letterSpacing={styleState.letterSpacing + "px"}
                        font-size={styleState.fontSize}
                        fill={styleState.color}
                        font-family="sans-serif"
                    >
                        <textPath
                            href="#circlePath2"
                            startOffset="0%"
                            textLength="1884"
                            lengthAdjust="spacingAndGlyphs"
                        >
                            Foreign Language Cultural Fiesta 2025 ● Foreign
                            Language Cultural Fiesta 2025 ● Foreign Language
                            Cultural Fiesta 2025 ●
                        </textPath>
                    </text>
                </svg>
                <svg
                    viewBox={`0 0 ${styleState.width} ${styleState.height}`}
                    width={styleState.width}
                    height={styleState.height}
                    style={{
                        transform: `translate(-50%, -50%) rotate(${styleState.rotate3}deg) scale(${styleState.scale3})`
                    }}
                >
                    {/*   <defs>*/}
                    <path
                        id="circlePath3"
                        d={`M ${styleState.width / 2} ${styleState.height / 2}
                                m ${-styleState.radius3} 0
                                a ${styleState.radius3} ${
                            styleState.radius3
                        } 0 0 0 ${2 * styleState.radius3} 0
                                a ${styleState.radius3} ${
                            styleState.radius3
                        } 0 0 0 ${-2 * styleState.radius3} 0`}
                        fill="none"
                    />
                    {/*</defs>  */}

                    <text
                        letterSpacing={styleState.letterSpacing + "px"}
                        font-size={styleState.fontSize}
                        fill={styleState.color}
                        font-family="sans-serif"
                    >
                        <textPath
                            href="#circlePath3"
                            startOffset="0%"
                            textLength="1884"
                            lengthAdjust="spacingAndGlyphs"
                        >
                            Foreign Language Cultural Fiesta 2025 ● Foreign
                            Language Cultural Fiesta 2025 ●
                        </textPath>
                    </text>
                </svg>
            </div>
        </>
    );
}

export default SVGCircleCarousel;
