import { FaRegCheckCircle, FaLaptopCode, FaProjectDiagram, FaUserTie, FaClock, FaCertificate } from 'react-icons/fa';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <FaRegCheckCircle className="text-teal-700 text-xl" />,
      title: "Production Curriculum",
      description: "No outdated theories. Syllabus designed strictly around modern enterprise cloud and SRE workflows."
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-xl" />,
      title: "Interactive Hands-on Labs",
      description: "Build real VPC networks, Docker containers, K8s manifests, and SED/AWK log parsers."
    },
    {
      icon: <FaUserTie className="text-indigo-600 text-xl" />,
      title: "Practitioner Instructors",
      description: "Learn directly from working Cloud Engineers and DevOps architects with active industry experience."
    },
    {
      icon: <FaProjectDiagram className="text-amber-600 text-xl" />,
      title: "Capstone Capable Projects",
      description: "Graduate with real GitHub repository projects you can demonstrate during tech job interviews."
    },
    {
      icon: <FaClock className="text-teal-700 text-xl" />,
      title: "Flexible Learning Schedules",
      description: "Weekend and evening batches designed specifically for working software professionals."
    },
    {
      icon: <FaCertificate className="text-blue-600 text-xl" />,
      title: "Industry Skill Certificate",
      description: "Earn a verified Venture Soft Course Completion Certificate upon clearing final lab assessments."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
            Why Venture Soft
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Why Learn Engineering With Us?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            We focus on job-ready practical capabilities rather than passive slide presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-500/50 transition-all flex gap-4 items-start shadow-sm">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
