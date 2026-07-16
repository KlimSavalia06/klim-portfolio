import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#faf9f6] px-6 border-t border-slate-100 font-body">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 font-display mb-4">Connect With Me</h2>
          <p className="text-slate-600">
            Let's discuss software engineering opportunities, research collaborations, or open-source builds.
          </p>
        </div>

        <div className="bg-white border border-slate-100 shadow-glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Identity Stack */}
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900 font-display mb-1">Klim Savalia</h3>
            <p className="text-sm font-semibold text-blue-600 mb-6">Computer Science Student at ASU</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FiMail className="text-blue-500 flex-shrink-0" size={16} />
                <div>
                  <a href="mailto:ksavali3@asu.edu" className="hover:underline font-medium">ksavali3@asu.edu</a>
                  <span className="text-xs text-slate-400 block">(ASU ID / Primary Email)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FiPhone className="text-blue-500 flex-shrink-0" size={16} />
                <a href="tel:6027709302" className="hover:underline font-medium">602.770.9302</a>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FiMapPin className="text-blue-500 flex-shrink-0" size={16} />
                <span className="font-medium">Tempe, AZ</span>
              </div>
            </div>
          </div>

          {/* Action Call / Social Matrix */}
          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
            <a 
              href="mailto:ksavali3@asu.edu"
              className="w-full md:w-auto text-center bg-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-sm text-sm"
            >
              Send an Email
            </a>
            
            <div className="flex gap-4 text-slate-400 mt-2">
              <a 
                href="https://linkedin.com/in/klim-parimal-savalia-86197b334" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-slate-900 p-2 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/KlimSavalia06" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-slate-900 p-2 border border-slate-100 rounded-xl bg-slate-50 hover:bg-white transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}