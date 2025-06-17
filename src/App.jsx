import Navbar from "./components/NavBar/Navbar"
import HeroSection from "./components/Hero/HeroSection"
import Footer from "./components/Footer"
import WorkTimeline from "./components/WorkTimeline"
import { Separator } from "./components/ui/separator"
import { TracingBeam } from "./components/ui/tracing-beam"

function App() {
  return (
    <>
      <Navbar/>
      <TracingBeam className="mt-12">
      <HeroSection id="home"/>
      <Separator />  
      <WorkTimeline id="about"/>
      <Separator />
      <Footer id="contact"/>
      </TracingBeam>
    </> 
  );
}

export default App
