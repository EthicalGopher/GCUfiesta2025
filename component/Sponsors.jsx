import dena from "@/assets/logo_DeNA_India_h.png";

function Sponsors() {
    return (
        <div className="p-10">
            <h1 className="text-4xl xl:text-7xl font-bold text-center font-serif">Our Sponsors</h1>
            <div className="py-25">

                <div className="py-10 grid place-items-center">
                    <img className="w-180" src={dena} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sponsors;
