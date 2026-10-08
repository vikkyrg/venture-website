import { FaLaptopCode, FaCubes, FaAward, FaUserCheck } from 'react-icons/fa';

const CareerSupport = () => {
  const benefits = [
    { 
      icon: <FaLaptopCode className="text-[#087FC1] text-xl" />, 
      title: "Hands-On Learning Labs", 
      desc: "Practice direct terminal commands, cloud provisioning, and container orchestration in dedicated environments." 
    },
    { 
      icon: <FaCubes className="text-[#087FC1] text-xl" />, 
      title: "Practical Module Architecture", 
      desc: "Curriculum organized around modular learning objectives matching real enterprise infrastructure setups." 
    },
    { 
      icon: <FaAward className="text-[#087FC1] text-xl" />, 
      title: "Industry-Relevant Skills", 
      desc: "Master modern tools, automation scripts, and deployment pipelines actively demanded by corporate tech teams." 
    },
    { 
      icon: <FaUserCheck className="text-[#087FC1] text-xl" />, 
      title: "Career Readiness & Guidance", 
      desc: "Technical interview preparation, architectural guidance, and capstone project reviews to build confidence." 
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/80 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-block shadow-2xs">
              Training Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Designed for Practical Technical Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We empower software engineers and IT professionals with genuine, practitioner-led training enablement tools to help you confidently master high-demand technical capabilities.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#087FC1]/60 shadow-xs hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="p-3 bg-slate-50 rounded-xl inline-block border border-slate-200/80 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-2xs mb-4">
                  {b.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors">{b.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSupport;
