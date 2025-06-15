import { Divider } from "@mui/material"
import About from "../components/About/About"
import Contact from "../components/ContactUs/Contact"
import HeroSection from "../components/HeroSection/HeroSection"
import Join from "../components/Join/Join"
import KeyBenefits from "../components/KeyBenefits/KeyBenefits"
import Marketing from "../components/Marketing/Marketing"
import Navbar from "../components/Navbar/Navbar"
import Partners from "../components/Partners/Partners"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <Marketing />
    <Partners />
    <KeyBenefits />
    <Join />
    <Contact />
    <Divider style={{backgroundColor:"gray"}} />
    <Footer />
    </>
  )
}

export default Home