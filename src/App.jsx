import Navbar from "./components/NavBar/navbar"
import HeroSection from "./components/Hero/HeroSection"
import Footer from "./components/Footer"
import WorkTimeline from "./components/WorkTimeline"
import { Separator } from "./components/ui/separator"
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Separator className="w-full" />
      <WorkTimeline />
      <Separator className="w-full" />
      <Footer />
    </>
  );
}

export default App
