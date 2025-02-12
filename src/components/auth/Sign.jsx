import { useState } from "react"
import { BsApple, BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { FaFacebook, FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"


function Sign() {
    let [shown, updShown] = useState(false)
    return(
        <header>
            <div className="custom-container">
                <div className="flex flex-col justify-center items-center my-10">
                    <h1 className="text-[55px] font-[600]">Sign Up</h1>
                    <p className="text-[20px] font-[300]">Fill all field for create an account.</p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="relative mx-15 my-5 group">
                        <input type="text" name="username" id="username" placeholder="Username" className="placeholder:text-white bg-black text-white group-hover:border-b-white transition-all delay-75 outline-none w-full border-b-[#707070] border-b py-2"/>
                        <FaUser className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-lg group-hover:text-white transition delay-75"/>
                    </div>
                    <div className="relative mx-15 my-5 group">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="placeholder:text-white bg-black text-white group-hover:border-b-white transition-all delay-75 outline-none w-full border-b-[#707070] border-b py-2"/>
                        <MdEmail className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-lg group-hover:text-white transition delay-75"/>
                    </div>
                    <div className="relative mx-15 my-5 group">
                        <input type={shown ? `text` : `password`} name="password" id="password" placeholder="Password" className="placeholder:text-white focus:border-white group-hover:border-b-white transition-all delay-75 bg-black text-white outline-none w-full border-b-[#707070] border-b py-2" />
                        {!shown ? <BsEyeFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-xl cursor-pointer focus:text-white group-hover:text-white transition delay-75" onClick={() => updShown(!shown)}/> :
                        <BsEyeSlashFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#707070] text-xl cursor-pointer focus:text-white group-hover:text-white transition delay-75" onClick={() => updShown(!shown)} />}
                    </div>
                    <button className="border bg-[#326CF9] border-[#326CF9] cursor-pointer hover:border-white hover:bg-white hover:text-[#326CF9] transition-all delay-75 font-[600] my-5 mx-15 py-3 rounded-lg text-[18px]">Sign Up</button>
                </div>
                <div>
                    <div className="text-center mt-15 mb-10">
                        <h1 className="text-[45px] font-[600]">Or</h1>
                        <p className="text-[18px] font-[300]">Sign up with...</p>
                    </div>
                    <div className="grid grid-cols-3 my-15">
                        <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><BsApple className="text-[20px]"/> Log in with Apple</button></a>
                        <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><FcGoogle className="text-[20px]"/> Log in with Google</button></a>
                        <a href=""><button className="flex items-center gap-2 mx-7 text-nowrap border py-2 px-25 rounded-lg text-[18px] hover:bg-white cursor-pointer hover:border-white hover:text-black transition-all delay-75"><FaFacebook className="text-[#4267B2] text-[20px]"/> Log in with Facebook</button></a>
                    </div>
                    <p className="text-center">Already have an account? <Link to="/signup" className="underline">Please Log in.</Link></p>
                </div>
            </div>
        </header>
    )
}

export default Sign