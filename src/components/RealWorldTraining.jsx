import { FaLaptopCode, FaCloudUploadAlt, FaGitAlt, FaTerminal, FaTasks, FaComments, FaCheck } from 'react-icons/fa';

const RealWorldTraining = () => {
  const cards = [
    {
      icon: <FaLaptopCode className="text-[#087FC1] text-xl" />,
      title: "Practical Projects",
      desc: "Build full multi-tier applications and infrastructure setups rather than isolated code snippets."
    },
    {
      icon: <FaTasks className="text-[#087FC1] text-xl" />,
      title: "Industry Scenarios",
      desc: "Troubleshoot realistic bug fixes, container crashes, and system outage simulation scenarios."
    },
    {
      icon: <FaTerminal className="text-[#087FC1] text-xl" />,
      title: "Hands-on Terminal Labs",
      desc: "Dedicated sandbox terminal access for real command execution and environment setup."
    },
    {
      icon: <FaGitAlt className="text-[#087FC1] text-xl" />,
      title: "Git / GitHub Workflows",
      desc: "Branching strategies, pull request reviews, and building a clean, public GitHub repository."
    },
    {
      icon: <FaCloudUploadAlt className="text-[#087FC1] text-xl" />,
      title: "Deployment Exposure",
      desc: "Containerizing services, deploying to cloud staging environments, and setup of CI pipelines."
    },
    {
      icon: <FaComments className="text-[#087FC1] text-xl" />,
      title: "Interview-Oriented Prep",
      desc: "System design discussions, technical Q&A drills, and simulated lead engineering interviews."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-white px-3 py-1 rounded-md border border-slate-200 shadow-2xs">
            Applied Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mt-3 tracking-tight">
            From Learning to Real-World Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Our curriculum focuses on what modern technology teams actually use and look for during hiring drives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div 
              key={i}
              className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-[#087FC1]/60 shadow-2xs hover:shadow-md transition-all space-y-3"
            >
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 inline-block">
                {c.icon}
              </div>
              <h3 className="text-base font-bold text-[#101A35]">{c.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#087FC1]">
                <FaCheck className="text-[9px]" /> Verified Skill Outcome
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealWorldTraining;
