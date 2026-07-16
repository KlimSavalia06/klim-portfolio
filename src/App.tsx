import { Hero } from './components/sections/Hero'; 
import Projects from './components/sections/Projects'; 

function App() {
  return (
    <main className="relative w-full min-h-screen bg-brand-bg">
      {/* 1. Hero Section (Contains your "View Projects" button) */}
      <Hero />

      {/* 2. Projects Section (Where the button will scroll to) */}
      <Projects />
    </main>
  );
}

export default App;