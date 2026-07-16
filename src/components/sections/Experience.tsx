import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  timeline: string;
  bullets: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Academia Officer",
    organization: "Association for Computing Machinery (ACM), ASU",
    location: "Tempe, AZ",
    timeline: "Jan 2026 – Present",
    bullets: [
      "Coordinate technical programming and workshops for 50+ students on topics including data mining, cybersecurity, and computer vision.",
      "Collaborate with professors, researchers, and industry professionals to organize technical events that promote student learning and professional development."
    ]
  },
  {
    role: "Devils 4 Devils Peer Leader",
    organization: "EOSS Counseling Services – ASU",
    location: "Tempe, AZ",
    timeline: "Mar 2026 – Present",
    bullets: [
      "Facilitate peer support conversations and connect students with campus resources to promote well-being and student success.",
      "Present mental health awareness workshops and collaborate with campus leaders to foster an inclusive and supportive student community."
    ]
  },
  {
    role: "Peer Educator & International Outreach Lead",
    organization: "SRVP – ASU",
    location: "Tempe, AZ",
    timeline: "May 2025 – Mar 2026",
    bullets: [
      "Developed and delivered educational workshops on violence prevention, healthy relationships, and student well-being for diverse campus audiences.",
      "Mentored students and collaborated with university staff to improve student engagement and create an inclusive learning environment."
    ]
  },
  {
    role: "Events Committee Lead",
    organization: "Hindu Yuva – ASU",
    location: "Tempe, AZ",
    timeline: "Aug 2024 – Present",
    bullets: [
      "Led event logistics and volunteer coordination in collaboration with student leaders to successfully execute cultural and community programs that enhanced student engagement at ASU."
    ]
  },
  {
    role: "Front Desk Executive",
    organization: "Enbee Education Center Pvt. Ltd.",
    location: "Remote / On-site",
    timeline: "Apr 2024 – Jul 2024",
    bullets: [
      "Managed records for 100+ students and assisted 50+ clients weekly, improving front desk efficiency and reducing average wait times by 20% through effective organization and customer support."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-6 max-w-5xl mx-auto font-body">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 font-display mb-4">Leadership & Experience</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Committees, campus operations, and community engagement initiatives outside the classroom.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-100">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`relative flex flex-col md:flex-row items-start gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-9 h-9 bg-blue-50 text-blue-600 border border-blue-100 rounded-full flex items-center justify-center z-10 shadow-sm">
              <FiBriefcase size={14} />
            </div>

            {/* Content Panel */}
            <div className="w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 bg-[#faf9f6] p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-white text-slate-600 rounded-md border border-slate-100">
                  <FiCalendar size={12} /> {exp.timeline}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <FiMapPin size={12} /> {exp.location}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 font-display">{exp.role}</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">{exp.organization}</p>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}