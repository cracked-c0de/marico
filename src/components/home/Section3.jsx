import Mobile from "../../assets/mobile.svg"

function Section3() {

    return(
        <section>
            <div className="custom-container">
                <div className="flex justify-center items-center">
                    <div className="max-w-[600px] min-h-[450px] w-full pl-8 pt-5 mx-2 bg-[#0D0D0D] relative flex flex-col overflow-hidden">
                        <p className="text-[#0FC65C] text-[20px] font-[400]">One Link</p>
                        <h1 className="text-[#919191] text-[55px] font-[600] mt-4">All You Create.</h1>
                        <h1 className="text-white text-[60px] font-[600] -mt-4">One Link</h1>
                        <img src={Mobile} alt="" className="w-[600px] absolute bottom-0 -right-25"/>
                    </div>
                    <div className="max-w-[600px] min-h-[450px] w-full pl-8 pt-5 mx-2 bg-[#0D0D0D] relative flex flex-col overflow-hidden">
                        <p className="text-[#0FC65C] text-[20px] font-[400]">Collect Subscribers</p>
                        <h1 className="text-[#919191] text-[55px] font-[600] mt-15">Emails.</h1>
                        <h1 className="text-[#919191] text-[55px] font-[600] -mt-4">Phones.</h1>
                        <h1 className="text-white text-[60px] font-[600] -mt-4">All Yours.</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button className="text-[18px] bg-[#326CF9] border-[#326CF9] py-3 px-10 cursor-pointer border rounded-lg">Get Started</button>
                </div>
                
                <div className="flex items-center justify-center flex-col mt-45 gap-2">
                    <p className="text-[18px] text-[#3D82F2]">STEP 3</p>
                    <h1 className="font-[600] text-[55px]">Send Emails & Text Messages</h1>
                    <div className="text-center">
                        <p className="text-[#707070] text-[20px]">No more going through a social platform. Reach and engage</p>
                        <p className="text-[#707070] text-[20px]">your audience directly over email and text massage.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3