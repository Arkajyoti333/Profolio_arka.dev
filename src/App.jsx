import About from './components/About/About.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './pages/Home/Home.jsx'
import Project from './pages/Project/Project.jsx'
import Resume from './pages/Resume/Skill.jsx'
import ContactUs from './pages/Contact/ContactUs.jsx'


function App() {
  

  return (
    <>
      <div className='bg-gray-100'>
       <NavBar/>
       <Home/>
       <About/>
       <Resume/>
       <Project/>
       <ContactUs/>
      </div>

    </>
  )
}

export default App
