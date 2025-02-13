import Profile1 from "/src/assets/Profile1.svg"
import Profile2 from "/src/assets/Profile2.svg"
import Profile3 from "/src/assets/Profile3.svg"
import Arrow from "/src/assets/Arrow.svg"

function Section1() {
    return(
        <section>
            <div className="custom-container my-15">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-[15px] text-[#306EF7] font-[600]">OUR TEAM</p>
                        <h1 className="text-[55px] font-[600]">We love creators</h1>
                    </div>
                    <div className="flex flex-row items-center justify-around my-15">
                        <div className="flex flex-col items-center justify-center">
                            <img src={Profile1} alt="" className="w-[120px] my-2"/>
                            <h1 className="text-[25px] font-[600]">Jacob Mark</h1>
                            <p className="text-[15px] text-[#7f7f7f] font-[300]">CEO & Design</p>
                            <div className="flex items-center justify-center">
                                <a href="" className="flex items-center justify-center">Twitter</a>
                                <a href=""><img src={Arrow} alt="" className="mx-2 w-[15px]"/></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <img src={Profile2} alt="" className="w-[125px] my-2" />
                            <h1 className="text-[25px] font-[600]">Daniel</h1>
                            <p className="text-[15px] text-[#7f7f7f] font-[300]">CTO & Development</p>
                            <div className="flex items-center justify-center">
                                <a href="" className="flex items-center justify-center">Twitter</a>
                                <a href=""><img src={Arrow} alt="" className="mx-2 w-[15px]"/></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ">
                            <img src={Profile3} alt=""  className="w-[125px] my-2"/>
                            <h1 className="text-[25px] font-[600]">Ryan Trump</h1>
                            <p className="text-[15px] text-[#7f7f7f] font-[300]">COO & Sales</p>
                            <div className="flex items-center justify-center">
                                <a href="" className="flex items-center justify-center">Twitter</a>
                                <a href=""><img src={Arrow} alt="" className="mx-2 w-[15px]"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1