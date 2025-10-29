import { useRef, useState } from "react";
import { motion, useScroll, useMotionValue, useMotionValueEvent } from "motion/react";
import schedule_line from "@/assets/schedule_line.svg";
import "./Schedule.css";

function Dule({ title, subtitle }) {
    return (
        <div
            className="
    dule
    flex
    items-center
    gap-5
    max-md:max-w-80
    z-20
    "
        >
            <span className="circle block px-1 py-1 rounded-r">
                <span className="block w-[40px] h-[5px]"></span>
            </span>
            <div 
                className="
                border-b border-solid border-black/10
                    px-3 py-2
                    xl:px-5 xl:py-4
                    bg-me-light-20 rounded-sm
                    shadow-xs shadow-black/10
                    inset-shadow-xs inset-shadow-white
                "
            >
                <h1 
                    className="
                        px-5 py-2
                        font-medium
                        text-xl
                    "
                >{title}</h1>
                <h2 className="
                        bg-me-light-10
                        text-center
                        font-bold text-xl xl:text-2xl
                        px-5 py-2
                        rounded-sm
                        inset-shadow-xs inset-shadow-black/5
                        border-t border-solid border-black/10
                    "
                >{subtitle}</h2>
            </div>
        </div>
    );
}

function Schedule() {
    const barRef = useRef();
    const [h, setH] = useState(0);

    const {scrollYProgress} = useScroll({
        target: barRef 
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setH(100 * latest)
    })

    return (
        <div
            className="
    schedule
    relative
    bg-me-light-30
    "
        >
            <div className="py-10">
                <h1 className="text-6xl text-center font-bold font-['asdf']">Schedule</h1>
            </div>
            <div className="relative mt-15 ">
                <img
                    className="
                        absolute
                        right-0
                        h-full
                        opacity-70
                        z-2
                    "
                    src={schedule_line} alt="" />
                <div ref={barRef} className="
                        bar absolute top-1
                        bottom-1 w-[20px] left-8
                        md:left-30 lg:left-50 rounded-sm
                        grid place-items-start py-2 px-2
                        z-30
                    ">
                    <motion.div style={{height: `${h}%`}} className="w-full rounded-xs bg-white"></motion.div>
                </div>
                <div className="z-20 dules pl-8 md:pl-30 lg:pl-50 flex flex-col gap-30 py-20">
                    <Dule title={"Registration"} subtitle={"9:30 - 10:00"} />
                    <Dule title={"Inaugural Session"} subtitle={"10:00 - 10:30"} />
                    <Dule title={"Cultural Perfomance"} subtitle={"10:30 - 11:00"} />
                    <Dule title={"Tea Time"} subtitle={"11:00 - 11:30"} />
                    <Dule title={"Foreign Languages Workshop"} subtitle={"11:30 - 12:30"} />
                    <Dule title={"Mini Quiz and Prize Distribution"} subtitle={"12:30 - 13:00"} />
                    <Dule title={"Lunch Activties"} subtitle={"13:00 - "} />
                </div>
            </div>
        </div>
    );
}

export default Schedule;
