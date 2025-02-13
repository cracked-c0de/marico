import Screen from "/src/assets/screen2.svg"
import Bullet1 from "/src/assets/bullet.svg"
import Bullet2 from "/src/assets/bullet2.svg"

function Section4() {
    return(
        <section>
            <div className="custom-container flex flex-col pr-0 mt-25">
                
                <h1 className="text-[20px] mt-5">Your Homepage</h1>
                <div className="flex flex-col font-[600] text-[55px] mt-25">
                    <h1>Reach Your</h1>
                    <h1>Audience <span className="text-[#3C82F4]">Directly.</span></h1>
                </div>
                <div className="my-5">
                    <div className="flex text-[15px] gap-2 items-center my-1">
                        <img src={Bullet1} alt="" className="w-[25px]" />
                        <p className="font-[400]">Embed content or create something new to share.</p>
                    </div>
                    <div className="flex text-[15px] gap-2 items-center my-1">
                        <img src={Bullet2} alt="" className="w-[25px]"/>
                        <p className="font-[400]">Share content over email, text message or your homepage.</p>
                    </div>

                    <div className="flex gap-5 mt-25">
                        <button className="text-[18px] bg-[#326CF9] border-[#326CF9] py-2 px-3 cursor-pointer border rounded-lg">Get Started Now</button>
                        <button className="text-[18px] border-[#707070] text-[#707070] hover:border-white hover:text-white transition-all delay-75 border cursor-pointer py-2 px-3 rounded-lg">View A Demo</button>
                    </div>
                </div>

                <img src={Screen} alt="" className="absolute w-[750px] right-0 z-0"/>
            </div>
        </section>
    )
}

export default Section4