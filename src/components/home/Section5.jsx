import Image from "../../assets/image.svg"

function Section5() {
    return(
        <section>
            <div className="custom-container">
                <div className="text-center mt-25 mb-15">
                    <h1 className="text-[55px] font-[600]">Experts Agree</h1>
                </div>
                <img src={Image} alt="" className="w-full"/>
            </div>
        </section>
    )
}

export default Section5