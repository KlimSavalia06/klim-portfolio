import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
// 1. Import the new sections
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Hero />
      <Projects />
      {/* 2. Add them directly inside the render block */}
      <Experience />
      <Contact />
    </div>
  );
}

export default App;