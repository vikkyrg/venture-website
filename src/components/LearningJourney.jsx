import { FaGraduationCap, FaLaptopCode, FaProjectDiagram, FaRocket, FaChartLine } from 'react-icons/fa';

const LearningJourney = () => {
  const steps = [
    { 
      number: "01", 
      title: "Learn", 
      icon: <FaGraduationCap className="text-[#087FC4] text-lg" />,
      desc: "Master foundational principles through structured live lectures and module breakdowns." 
    },
    { 
      number: "02", 
      title: "Practice", 
      icon: <FaLaptopCode className="text-[#087FC4] text-lg" />,
      desc: "Apply concepts in dedicated cloud environments with guided scenario labs." 
    },
    { 
      number: "03", 
      title: "Build", 
      icon: <FaProjectDiagram className="text-[#087FC4] text-lg" />,
      desc: "Develop portfolio-ready capstone projects reflecting enterprise architectures." 
    },
    { 
      number: "04", 
      title: "Apply", 
      icon: <FaRocket className="text-[#087FC4] text-lg" />,
      desc: "Solve complex troubleshooting challenges and infrastructure scenarios." 
    },
    { 
      number: "05", 
      title: "Grow", 
      icon: <FaChartLine className="text-[#087FC4] text-lg" />,
      desc: "Advance your technical capability with practitioner guidance and skill verification." 
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#EEF6FF]/60 via-[#F5F9FF] to-white border-b border-[#DCE7F5] relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#087FC4]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#087FC4] uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#DCE7F5] shadow-2xs inline-block">
            Learning Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] mt-3 tracking-tight">
            Our Structured Practical Learning Framework
          </h2>
          <p className="text-sm sm:text-base text-[#52647E] mt-3 leading-relaxed font-normal">
            A proven 5-stage progressive learning path engineered to transform theory into job-ready technical confidence.
          </p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-[#DCE7F5] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#DCE7F5] p-6 rounded-2xl flex flex-col justify-between hover:border-[#087FC4] shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 90}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#087FC4]/20 font-mono group-hover:text-[#087FC4] transition-colors">{s.number}</span>
                    <div className="p-3 bg-[#F5F9FF] rounded-xl border border-[#DCE7F5] group-hover:bg-[#EEF6FF] group-hover:border-[#087FC4]/50 transition-colors shadow-2xs">
                      {s.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-[#52647E] mt-2 leading-relaxed font-normal">{s.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#087FC4] transition-colors">
                  <span>Phase {s.number}</span>
                  <span className="text-[#087FC4]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;


