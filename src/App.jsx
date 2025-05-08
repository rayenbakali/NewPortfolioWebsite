import Navbar04Page from "./components/navbar-04/navbar-04"
import HeroSection from "./components/hero-01/hero-01"
import Footer from "./components/Footer"
import WorkTimeline from "./components/WorkTimeline"
import { Separator } from "./components/ui/separator"
function App() {

  return (
    <>
      <Navbar04Page />
      <HeroSection />
      <Separator className="w-full" />
      <WorkTimeline />
      <Separator className="w-full" />
      <Footer />
    </>
  );
}

export default App
