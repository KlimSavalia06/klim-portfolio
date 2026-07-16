import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

export function Hero() {
  // Smooth scroll handler
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents instant harsh jump or page reload
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative z-10 font-body">
   
      <div className="inline-flex items-center gap-2 bg-[#e6f4ea] text-emerald-800 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border border-emerald-100 shadow-sm">
        
        Computer Science Junior at Arizona State University
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 font-display tracking-tight max-w-4xl leading-none mb-6">
        Hi, I'm <span className="text-indigo-600">Klim Savalia</span>
      </h1>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
        Passionate about building innovative technology that makes a difference.
        I enjoy creating software that blends creativity, problem-solving, and intuitive user experiences.
        My interests include software engineering, AR/VR, emerging technologies, and interactive computing.
        I'm always eager to learn, collaborate, and transform ideas into impactful solutions.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {/* VIEW PROJECTS BUTTON WITH SMOOTH SCROLL */}
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-md cursor-pointer text-sm"
        >
          View Projects <FiArrowRight size={16} />
        </a>

        <a 
          href="/resume.pdf" 
          download="Klim_Savalia_Resume.pdf"
          className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-sm text-sm"
        >
          Download Resume <FiDownload size={16} />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-slate-400">
        <a 
          href="https://github.com/KlimSavalia06" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-slate-900 transition-colors p-2"
          aria-label="GitHub Profile"
        >
          <FiGithub size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/klim-parimal-savalia-86197b334" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-slate-900 transition-colors p-2"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}

export default Hero;