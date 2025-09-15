import Navbar from "./components/Navbar/Navbar";
import Hero from "../src/components/Hero/hero";
import Skills from"./components/Skills/skills";
import Contact from"./components/Contact/contact";
import Education from"./components/Education/education";
import Project from "./components/Projects/project"
import Footer from "../src/components/Footer/footer";



function App() {
  

  

  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Skills />
     <Project />
     <Education />
     <Contact />
      <Footer/>
    </div>
  );
}

export default App;
