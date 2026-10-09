import { FaRegCheckCircle, FaLaptopCode, FaProjectDiagram, FaUserTie, FaClock, FaCertificate, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <FaRegCheckCircle className="text-[#38BDF8] text-xl" />,
      title: "Industry-Aligned Curriculum",
      description: "No outdated theory. Syllabi designed around live enterprise tech workflows and current industry requirements."
    },
    {
      icon: <FaLaptopCode className="text-[#38BDF8] text-xl" />,
      title: "Interactive Live Labs",
      description: "Hands-on experience in cloud environments, container orchestration, and automated script testing."
    },
    {
      icon: <FaUserTie className="text-[#38BDF8] text-xl" />,
      title: "Practitioner Mentors",
      description: "Learn directly from active technology leads and senior architects with real enterprise engineering experience."
    },
    {
      icon: <FaProjectDiagram className="text-[#38BDF8] text-xl" />,
      title: "Portfolio Capstone Projects",
      description: "Graduate with production-ready GitHub repository projects you can confidently present during technical interviews."
    },
    {
      icon: <FaClock className="text-[#38BDF8] text-xl" />,
      title: "Flexible Training Modes",
      description: "Weekend and evening cohorts structured specifically for working professionals and full-time students."
    },
    {
      icon: <FaCertificate className="text-[#38BDF8] text-xl" />,
      title: "Verified Skill Certification",
      description: "Earn an official VentureSoft Certificate of Completion upon clearing practical lab assessments."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#101A32] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Deep Navy Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FC4]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1769FF]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-dots-light opacity-20 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60 inline-flex items-center gap-1.5 shadow-sm">
            <FaStar className="text-xs text-[#38BDF8]" /> Strategic Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Why Technology Professionals Choose VentureSoft
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            We focus on job-ready practical capabilities rather than passive theoretical slide presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-[#087FC4] hover:bg-slate-900/90 transition-all duration-300 flex gap-4 items-start group shadow-md hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="p-3.5 bg-slate-800/90 rounded-xl border border-slate-700/80 shadow-2xs group-hover:border-[#087FC4] group-hover:bg-[#087FC4]/20 transition-colors shrink-0">
                {p.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">{p.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;


