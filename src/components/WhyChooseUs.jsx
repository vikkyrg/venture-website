import { FaRegCheckCircle, FaLaptopCode, FaProjectDiagram, FaUserTie, FaClock, FaCertificate } from 'react-icons/fa';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <FaRegCheckCircle className="text-[#087FC1] text-xl" />,
      title: "Industry-Aligned Curriculum",
      description: "No outdated theory. Syllabus designed around real enterprise tech workflows and industry requirements."
    },
    {
      icon: <FaLaptopCode className="text-[#087FC1] text-xl" />,
      title: "Interactive Live Labs",
      description: "Hands-on experience in cloud environments, container orchestration, and automated script testing."
    },
    {
      icon: <FaUserTie className="text-[#087FC1] text-xl" />,
      title: "Practitioner Mentors",
      description: "Learn directly from active technology leads and senior engineers with real enterprise experience."
    },
    {
      icon: <FaProjectDiagram className="text-[#087FC1] text-xl" />,
      title: "Portfolio Capstone Projects",
      description: "Graduate with real GitHub repository projects you can confidently demonstrate during technical job interviews."
    },
    {
      icon: <FaClock className="text-[#087FC1] text-xl" />,
      title: "Flexible Training Modes",
      description: "Weekend and evening batches structured specifically for working professionals and full-time students."
    },
    {
      icon: <FaCertificate className="text-[#087FC1] text-xl" />,
      title: "Verified Skill Certification",
      description: "Earn an official VentureSoft Course Completion Certificate upon clearing final practical lab assessments."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none -z-0" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-block shadow-2xs">
            Why VentureSoft
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Technology Professionals Choose VentureSoft
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            We focus on job-ready practical capabilities rather than passive theoretical slide presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#087FC1]/60 hover:bg-white hover:shadow-xl transition-all duration-300 flex gap-4 items-start group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs group-hover:border-[#087FC1] group-hover:bg-blue-50/60 transition-colors shrink-0">
                {p.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors">{p.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

