
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Exp from "./Components/Exp";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-green-300 selection:text-aqua-900">
<div className="fixed inset-0 -z-10 h-full w-full">
<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Exp/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
