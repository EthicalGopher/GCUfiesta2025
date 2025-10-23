import "./Schedule.css";

function Dule({ title, subtitle }) {
    return (
        <div
            className="
    dule
    flex
    items-center
    gap-5
    "
        >
            <span className="circle block px-1 py-1">
                <span className="block w-[40px] h-[5px]"></span>
            </span>
            <div className="px-5 py-2">
                <h1 className="">{title}</h1>
                <h2 className="font-bold text-2xl">{subtitle}</h2>
            </div>
        </div>
    );
}

function Schedule() {
    return (
        <div
            className="
    schedule
    min-h-screen
    relative
    "
        >
            <div className="bar absolute top-0 bottom-0 w-[20px] md:left-30 lg:left-50" />
            <div className="dules md:pl-30 lg:pl-50 flex flex-col gap-40 pt-20">
                <Dule title={"Registration"} subtitle={"9:30 - 10:00"} />
        <Dule title={"Inaugural Session"} subtitle={"10:00 - 10:30"} />
        <Dule title={"Cultural Perfomance"} subtitle={"10:30 - 11:00"} />
        <Dule title={"Tea Time"} subtitle={"11:00 - 11:30"} />
        <Dule title={"Foreign Languages Workshop"} subtitle={"11:30 - 12:30"} />
        <Dule title={"Mini Quiz and Prize Distribution"} subtitle={"12:30 - 13:00"} />
        <Dule title={"Lunch Activties"} subtitle={"13:00 - "} />
            </div>
        </div>
    );
}

export default Schedule;
