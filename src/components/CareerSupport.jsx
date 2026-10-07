import { FaFileAlt, FaUserCheck, FaComments, FaCodeBranch } from 'react-icons/fa';

const CareerSupport = () => {
  const supports = [
    { icon: <FaFileAlt className="text-teal-700 text-xl" />, title: "Resume & Profile Optimization", desc: "Crafting ATS-friendly engineering resumes highlighting your lab projects." },
    { icon: <FaUserCheck className="text-blue-600 text-xl" />, title: "Technical Mock Interviews", desc: "Simulated technical interviews with experienced lead engineers." },
    { icon: <FaComments className="text-indigo-600 text-xl" />, title: "Architectural Guidance", desc: "1-on-1 counseling to map your career transition strategy." },
    { icon: <FaCodeBranch className="text-amber-600 text-xl" />, title: "GitHub Portfolio Review", desc: "Ensuring your code repositories follow enterprise best practices." }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
              Career Readiness
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Comprehensive Career Acceleration & Guidance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We empower software engineers and IT professionals with genuine, practical career enablement tools to help you confidently present your technical capabilities to hiring managers.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supports.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500/50 shadow-sm transition-all">
                <div className="p-3 bg-white rounded-xl inline-block border border-slate-200 shadow-sm mb-4">
                  {s.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSupport;
