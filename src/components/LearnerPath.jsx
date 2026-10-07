import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBriefcase, FaExchangeAlt, FaArrowRight } from 'react-icons/fa';

const LearnerPath = () => {
  const paths = [
    {
      icon: <FaGraduationCap className="text-teal-700 text-2xl" />,
      title: "Students & Freshers",
      subtitle: "Kickstart Your IT Career",
      description: "Gain hands-on practical skills in Linux, AWS, and DevOps to stand out during campus drives and off-campus tech hiring.",
      badge: "Beginner Friendly"
    },
    {
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      title: "Working Professionals",
      subtitle: "Upskill for Promotions",
      description: "Transition into high-paying SRE, Cloud Architect, or AIOps roles by adding AI telemetry and Kubernetes orchestration to your profile.",
      badge: "Skill Elevation"
    },
    {
      icon: <FaExchangeAlt className="text-indigo-600 text-2xl" />,
      title: "Career Switchers",
      subtitle: "Cross-Industry Transition",
      description: "Structured step-by-step guidance starting from Linux command fundamentals to enterprise Cloud and CI/CD pipelines.",
      badge: "Guided Pathway"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
            Tailored Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Find The Right Learning Path For You
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Whether you are stepping into IT for the first time or looking to elevate your current engineering stack, Venture Soft provides focused tracks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <div 
              key={index}
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    {path.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase bg-slate-200/60 px-2.5 py-1 rounded-md">
                    {path.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {path.title}
                </h3>
                <p className="text-xs font-bold text-teal-700 mt-1">{path.subtitle}</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {path.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 group-hover:translate-x-1 transition-all"
                >
                  Explore Suitable Courses
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearnerPath;
