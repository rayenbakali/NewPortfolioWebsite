import Navbar from "./components/NavBar/Navbar"
import HeroSection from "./components/Hero/HeroSection"
import Footer from "./components/Footer"
import WorkTimeline from "./components/WorkTimeline"
import { Separator } from "./components/ui/separator"

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection id="home"/>
      <Separator />  
      <WorkTimeline id="about"/>
      <Separator />
      <Footer id="contact"/>
    </> 
  );
}

export default App
