import Dot from "/src/assets/dot.svg"

function Header() {
    return(
        <header>
            <div className="custom-container h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center font-[700] text-[75px] my-15">
                        <h1>Own your audience.</h1>
                        <h1 className="text-header">So you don't lose them.</h1>
                    </div>
                    <div className="flex flex-col items-center w-[600px] justify-center text-[25px] my-20">
                        <h3>Turn your audience into email and</h3>
                        <h3>text message subscribers.</h3>
                        <div className="flex gap-5 my-6">
                            <button className="text-[18px] bg-[#326CF9] border-[#326CF9] py-2 px-8 cursor-pointer border rounded-lg">Get Started Now</button>
                            <button className="text-[18px] border-[#707070] text-[#707070] hover:border-white hover:text-white transition-all delay-75 border cursor-pointer py-2 px-8 rounded-lg">View A Demo</button>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Dot} alt="Green Dot" />
                            <p className="text-[15px]">+1000 <span className="text-[#707070]">creators have already started</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header