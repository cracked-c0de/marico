import { useState } from "react"
import { BsApple, BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { FaFacebook, FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"


function Log() {
    let [shown, updShown] = useState(false)
    return(
        <header>
            <div className="custom-container">
                <div className="flex flex-col items-center justify-center">
                    <div className="my-15 flex flex-col items-center">
                        <h1 className="text-[55px] font-[600]">Log in</h1>
                        <p className="text-[18px] font-[300]">Login into existing account.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="relative group w-[350px] mx-15">
                                <input type="text" name="username" id="username" placeholder="Username" className="placeholder:text-white bg-black text-white group-hover:border-b-white transition-all delay-75 outline-none w-full border-b-[#707070] border-b py-2" />
                                <FaUser className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-lg group-hover:text-white transition delay-75"/>
                            </div>
                            <div className="relative group w-[350px] mx-15">
                                <input type={shown ? `text` : `password`} name="password" id="password" placeholder="Password" className="placeholder:text-white focus:border-white group-hover:border-b-white transition-all delay-75 bg-black text-white outline-none w-full border-b-[#707070] border-b py-2" />
                                {!shown ? <BsEyeFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-xl cursor-pointer focus:text-white group-hover:text-white transition delay-75" onClick={() => updShown(!shown)}/> :
                                <BsEyeSlashFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-xl cursor-pointer focus:text-white group-hover:text-white transition delay-75" onClick={() => updShown(!shown)} />}
                            </div>
                        </div>
                        <button className="flex text-[18px] font-[300] justify-self-center self-center my-15 bg-[#326CF9] py-3 px-25 border border-[#326cf9] rounded-lg cursor-pointer">Log In</button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-[45px] font-[600]">Or</h1>
                            <p className="text-[18px] font-[300]">Log in with...</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 my-15">
                    <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><BsApple className="text-[20px]"/> Log in with Apple</button></a>
                    <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><FcGoogle className="text-[20px]"/> Log in with Google</button></a>
                    <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><FaFacebook className="text-[#4267B2] text-[20px]"/> Log in with Facebook</button></a>
                </div>
                <p className="text-center">Don't have an account? <Link to="/signup" className="underline">Create One.</Link></p>
            </div>
        </header>
    )
}

export default Log