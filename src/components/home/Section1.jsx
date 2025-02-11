import Emoji1 from "../../assets/smile_emoji.svg"
import Emoji2 from "../../assets/happy_emoji.svg"
import Emoji3 from "../../assets/party_emoji.svg"

function Section1() {
    return(
        <section>
            <div className="custom-container h-screen">

                <div className="flex items-center justify-center mb-15">
                    <h1 className="text-[55px] font-[600]">Why Creators Love Marico</h1>
                </div>
                <div className="flex items-center justify-around">

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 text-[25px] m-2">
                            <img src={Emoji1} alt="Emoji" className="w-[32px]"/>
                            <h1 className="font-[600]">Reduced Anxiety</h1>
                        </div>
                        <p className="text-[#707070]">Never worry about losing your audience.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 text-[25px] m-2">
                            <img src={Emoji2} alt="Emoji" className="w-[32px]"/>
                            <h1 className="font-[600]">Lower Workload</h1>
                        </div>
                        <p className="text-[#707070]">Just share one link. We'll handle the rest.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-2 text-[25px] m-2">
                            <img src={Emoji3} alt="Emoji" className="w-[32px]"/>
                            <h1 className="font-[600]">More Time</h1>
                        </div>
                        <p className="text-[#707070]">Spend less time on marketing tools</p>
                    </div>

                </div>

                <div className="flex items-center justify-center flex-col mt-45 gap-2">
                    <p className="text-[18px] text-[#3D82F2]">STEP 1</p>
                    <h1 className="font-[600] text-[55px]">Connect Your Content</h1>
                    <div className="text-center">
                        <p className="text-[#707070] text-[20px]">Bring all of your content together and get a Homepage that</p>
                        <p className="text-[#707070] text-[20px]">automatically updates whenever you create anywhere online.</p>
                    </div>
                    <button className="py-2 text-[18px] px-8 border rounded-lg mt-5 text-[#707070] border-[#707070] hover:text-white hover:border-white transition-all delay-75 cursor-pointer">View Available Sources</button>
                </div>
            </div>
        </section>
    )
}

export default Section1