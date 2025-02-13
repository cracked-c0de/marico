import Dot from "/assets/dot.svg"
import Logo from "/assets/logo.svg"
import Company from "/assets/company_logo.svg"
import { Link, useLocation } from "react-router-dom"

function Footer() {
    let location = useLocation()
    let navList = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Pricing", link: "/pricing"},
        {name: "Blog", link: "/blog"},
    ]
    return(
        <footer>
            <div className="custom-container">
                <div className=" flex flex-col items-center justify-center">
                    <img src={Logo} alt="" className="w-[130px]"/>
                    <h1 className="text-[55px] font-[600] mt-4">Get Started Now</h1>
                    <p className="text-[20px] font-[400]">Setup is easy and takes under 5 minutes.</p>
                    <button className="text-[18px] bg-[#326CF9] border-[#326CF9] py-2 px-8 cursor-pointer border rounded-lg my-5">Get Started Now</button>
                    <div className="flex items-center gap-2">
                        <img src={Dot} alt="Green Dot" />
                        <p className="text-[15px]">+1000 <span className="text-[#707070]">creators have already started</span></p>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between mt-45">
                    <div className="flex flex-col">
                        <Link to="/">
                            <img src={Company} alt="Company Logo" className="w-[120px] flex items-center"/>
                        </Link>
                        <a href="mailto:info@marico.co" className="text-[15px] font-[400] text-[#707070]">info@marico.co</a>
                    </div>
                    <ul className="gap-5 flex items-center text-[18px]">
                        {navList.map((obj, index) => (
                            <Link to={obj.link} key={index} className={`last:text-[20px] transition-all delay-75 ${obj.link == location.pathname ? "text-[#3C82F4]": "text-[#707070] hover:text-white"}`}>{obj.name}</Link>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer