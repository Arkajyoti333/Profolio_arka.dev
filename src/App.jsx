import About from './components/About/About.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './pages/Home/Home.jsx'
import Project from './pages/Project/Project.jsx'
import Resume from './pages/Resume/Resume.jsx'
import ContactUs from './pages/Contact/ContactUs.jsx'
import Footer from './components/Footer/Footer.jsx'
import { motion, useScroll } from "framer-motion"



function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="min-h-screen">
       
        <motion.div
          className="fixed top-[5.4rem] left-0 right-0  mx-3 h-[5px] bg-blue-600 origin-left rounded-md"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Page Content */}
        <NavBar />
        <Home />
        <About />
        <Resume />
        <Project />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;