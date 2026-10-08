import { FaGraduationCap, FaCodeBranch, FaUserTie, FaRocket, FaChevronRight } from 'react-icons/fa';

const PlacementMethodology = () => {
  const steps = [
    {
      step: "STEP 01",
      title: "Learn",
      icon: <FaGraduationCap className="text-[#087FC1] text-lg" />,
      desc: "Build strong technical foundations through structured curriculum and expert instructor guidance."
    },
    {
      step: "STEP 02",
      title: "Build",
      icon: <FaCodeBranch className="text-[#087FC1] text-lg" />,
      desc: "Apply knowledge through practical projects, cloud labs, and hands-on production scenarios."
    },
    {
      step: "STEP 03",
      title: "Prepare",
      icon: <FaUserTie className="text-[#087FC1] text-lg" />,
      desc: "Refine your profile with resume crafting, GitHub reviews, and technical mock interviews."
    },
    {
      step: "STEP 04",
      title: "Progress",
      icon: <FaRocket className="text-[#087FC1] text-lg" />,
      desc: "Receive dedicated career counseling, interview strategy, and ongoing placement guidance."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
            Career Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mt-3 tracking-tight">
            How We Help You Succeed
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            A structured 4-step methodology to transition learners from technical fundamentals to job-ready engineering professionals.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal Grid) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          
          {/* Connector Line behind steps */}
          <div className="absolute top-12 left-16 right-16 h-0.5 bg-slate-200 z-0 pointer-events-none" />

          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="relative z-10 bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-[#087FC1]/60 shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-[#087FC1] bg-blue-50 px-2.5 py-1 rounded border border-blue-100 font-mono">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#101A35] mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden">
                  <FaChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Timeline (Vertical Stack) */}
        <div className="lg:hidden space-y-4 relative border-l-2 border-blue-200 pl-6 ml-4">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="relative bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs space-y-2"
            >
              <div className="absolute -left-[35px] top-4 w-4 h-4 rounded-full bg-[#087FC1] border-2 border-white shadow-xs" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#087FC1] uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {s.step}
                </span>
                <div className="p-1.5 bg-white rounded-lg border border-slate-200 text-xs">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-[#101A35]">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlacementMethodology;
