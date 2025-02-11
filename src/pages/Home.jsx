import Footer from "../components/home/Footer"
import Header from "../components/home/Header"
import Section1 from "../components/home/Section1"
import Section2 from "../components/home/Section2"
import Section3 from "../components/home/Section3"
import Section4 from "../components/home/Section4"
import Section5 from "../components/home/Section5"
import Section6 from "../components/home/Section6"
import Navbar from "../components/Navbar"


function Home() {
    return(
        <>
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </>
    )
}

export default Home