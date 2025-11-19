import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <div className="
        min-h-screen w-full 
        app-gradient 
        overflow-x-hidden 
        snap-y snap-mandatory 
        h-screen overflow-scroll
    ">
      <Navbar />

      <main className="w-full">
        <section id="home" className="snap-start h-screen section-padding"><Home /></section>
        <section id="about" className="snap-start h-screen section-padding"><About /></section>
        <section id="skills" className="snap-start h-screen section-padding"><Skills /></section>
        <section id="projects" className="snap-start h-screen section-padding"><Projects /></section>
        <section id="contact" className="snap-start h-screen section-padding"><Contact /></section>
      </main>
    </div>
  );
}
