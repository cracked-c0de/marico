import Image from "/src/assets/image2.svg"

function Section6() {
    return(
        <section>
            <div className="relative flex justify-center items-center flex-col h-screen">
                <h1 className="text-[50px] font-[600]">We've helped over 1,000 creators to</h1>
                <h1 className="text-[50px] font-[600]">claim control of their audience.</h1>
                <img src={Image} alt="" className="bg-fixed absolute -z-10" />
            </div>
        </section>
    )
}

export default Section6