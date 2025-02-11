import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/company_logo.svg"

function Navbar() {
    let location = useLocation()
    let navList = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Pricing", link: "/pricing"},
        {name: "Blog", link: "/blog"},
    ]
    return(
        <nav className="sticky top-0 bg-black z-10">
            <div className="custom-container">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="Company Logo" className="w-[155px] flex items-center"/>
                    </Link>
                    <ul className="gap-5 flex items-center text-[18px]">
                        {navList.map((obj, index) => (
                            <Link to={obj.link} key={index} className={`last:text-[20px] transition-all delay-75 ${obj.link == location.pathname ? "text-[#3C82F4]": "text-[#707070] hover:text-white"}`}>{obj.name}</Link>
                        ))}
                    </ul>
                    <div className="flex gap-5 items-center text-[18px]">
                        <Link to="/login" className="text-[#707070] hover:text-white transition-all delay-75">Login</Link>
                        <Link to="/signup" className="text-white bg-[#306EF7] rounded-lg px-3 py-2">Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar