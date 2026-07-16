import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiPlay, FiFileText } from 'react-icons/fi';

// 1. Import your local images from the assets folder
import bakeryImg from '../../assets/bakery.png';
import vrTourImg from '../../assets/vr-tour.png';
import ev3SideImg from '../../assets/robotic-car-side.png';
import ev3TopImg from '../../assets/robotic-car-top.png';
import veginationsImg from '../../assets/veginations.png';

interface Project {
  title: string;
  role: string;
  timeline: string;
  association: string;
  description: string;
  bullets: string[];
  tags: string[];
  category: 'Web' | 'AR/VR' | 'Robotics';
  imageSrc?: string;          // Added to hold regular single images
  hasMultipleImages?: boolean; 
  github?: string;  
  demo?: string;   
  video?: string;  
  docs?: string;   
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web' | 'AR/VR' | 'Robotics'>('All');
  const [ev3View, setEv3View] = useState<'side' | 'top'>('side');

  const projectsData: Project[] = [
    {
      title: "20Twenty7.8 Dessert Studio",
      role: "Software Developer",
      timeline: "July 2026 – Present",
      association: "Client Project (In Progress)",
      category: "Web",
      tags: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel", "Git/GitHub"],
      imageSrc: bakeryImg, // <-- Linked here
      description: "Full-stack web application built for a local bakery.",
      bullets: [
        "Developing a production-ready, full-stack e-commerce platform for a real small-business client, including product catalog browsing, shopping cart, and secure online ordering.",
        "Designing and integrating a PostgreSQL database with Supabase to manage products, customer accounts, and online orders.",
        "Developing an admin dashboard for inventory management, pricing updates, and customer order tracking, reducing manual order processing.",
        "Designed reusable, responsive React components with TypeScript and Tailwind CSS for a scalable, mobile-friendly interface."
      ],
      github: "https://github.com/KlimSavalia06", 
      demo: "https://your-bakery-demo-link.vercel.app" 
    },
    {
      title: "FSE AR/VR Tour",
      role: "AR/VR Developer",
      timeline: "Aug 2025 – Dec 2025",
      association: "Arizona State University",
      category: "AR/VR",
      tags: ["Unity", "C#", "AR/VR Development", "Educational Tech"],
      imageSrc: vrTourImg, // <-- Linked here
      description: "Developed immersive AR/VR learning experiences using Unity and C# to integrate interactive technology into the FSE100 engineering curriculum.",
      bullets: [
        "Designed and implemented user-centered features that improved usability, engagement, and the overall learning experience for students.",
        "Built and tested software prototypes through iterative feedback from faculty and users, strengthening problem-solving and product development skills.",
        "Collaborated with cross-functional student and faculty teams to deliver scalable and innovative educational technology solutions."
      ],
      video: "https://docs.google.com/document/d/11gB6cT-rg-Dh4YTQlk2T60lqe9LXNHtOPheHChNaDi0/edit?usp=sharing", 
    },
    {
      title: "Autonomous EV3 Robotic Car",
      role: "Execution Lead",
      timeline: "Aug 2025 – Dec 2025",
      association: "Fulton Schools of Engineering, ASU",
      category: "Robotics",
      tags: ["MATLAB", "Robotics", "LEGO EV3 Mindstorms", "Algorithms"],
      hasMultipleImages: true, // Uses multi-view toggle setup below
      description: "Led the development of a sensor-driven autonomous robotic vehicle using LEGO EV3, enabling object detection and autonomous navigation capabilities.",
      bullets: [
        "Programmed control algorithms in MATLAB to process sensor data and execute real-time movement and lifting operations.",
        "Designed and tested system logic to ensure reliable vehicle performance under project constraints and operational requirements.",
        "Coordinated project planning and team collaboration using structured documentation and Gantt charts to ensure timely project completion."
      ],
      video: "https://docs.google.com/document/d/1OwoNglilbXwctBxkDsuat2hJ3M1clcUoNBqKHbKiIOU/edit?usp=sharing" 
    },
    {
      title: "Veginations Food Delivery Platform",
      role: "Software Developer",
      timeline: "Dec 2023 – Mar 2024",
      association: "Delhi Public School Surat",
      category: "Web",
      tags: ["Python", "SQL", "MySQL", "Relational Database"],
      imageSrc: veginationsImg, // <-- Linked here
      description: "Developed a consumer-facing food delivery platform using Python and SQL with secure user authentication and dynamic menu management functionality.",
      bullets: [
        "Designed and optimized SQL database queries, improving system performance and reducing load times by 30%.",
        "Implemented a Python-based \"Lucky Draw\" feature to enhance user engagement and platform interaction.",
        "Integrated backend logic with database operations to ensure efficient data handling and seamless user experience."
      ]
    }
  ];

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-[#faf9f6] px-6 max-w-7xl mx-auto font-body">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 font-display mb-4">Technical Projects</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          An interactive showcase of software architecture, game engines, and autonomous systems designed for academic and commercial applications.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {(['All', 'Web', 'AR/VR', 'Robotics'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-glass flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Image Area */}
            <div className="h-56 bg-slate-50 relative overflow-hidden border-b border-slate-100 flex items-center justify-center">
              {project.hasMultipleImages ? (
                <div className="w-full h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={ev3View}
                      src={ev3View === 'side' ? ev3SideImg : ev3TopImg}
                      alt={`${project.title} - ${ev3View} view`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* EV3 Image Toggle Controls */}
                  <div className="absolute bottom-3 right-3 flex gap-2 z-20">
                    <button 
                      onClick={() => setEv3View('side')}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                        ev3View === 'side' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Side View
                    </button>
                    <button 
                      onClick={() => setEv3View('top')}
                      className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                        ev3View === 'top' ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Top View
                    </button>
                  </div>
                </div>
              ) : (
                project.imageSrc ? (
                  <img 
                    src={project.imageSrc} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-4">
                    <span className="text-sm font-semibold text-slate-400 font-display tracking-wider uppercase">
                      {project.title} Asset Slot
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Project Details */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  {project.timeline}
                </span>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-display mb-0.5">{project.title}</h3>
              <p className="text-xs text-slate-400 font-medium mb-1">{project.association}</p>
              <p className="text-sm text-slate-500 font-medium mb-4">{project.role}</p>
              
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{project.description}</p>
              
              <ul className="space-y-2 mb-6 flex-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links & Buttons */}
              <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-4 mt-auto">
                {project.video && (
                  <a 
                    href={project.video} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-indigo-100 transition-colors"
                  >
                    <FiPlay size={13} className="fill-indigo-600" /> Watch Demo Video
                  </a>
                )}

                {project.docs && (
                  <a 
                    href={project.docs} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-600 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-sky-100 transition-colors"
                  >
                    <FiFileText size={13} /> View Unity Docs
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    <FiExternalLink size={13} /> Live Application
                  </a>
                )}

                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5 px-2"
                  >
                    <FiGithub size={14} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}