import { FaAward, FaChalkboardTeacher, FaProjectDiagram, FaUserCheck } from 'react-icons/fa';

const StatsSection = () => {
  const trustItems = [
    {
      icon: <FaAward className="text-teal-700 text-2xl" />,
      title: "Industry-Aligned Curriculum",
      description: "Constantly updated syllabus reflecting actual enterprise engineering practices."
    },
    {
      icon: <FaProjectDiagram className="text-blue-600 text-2xl" />,
      title: "Practical Scenario Labs",
      description: "Learn by building live cloud infrastructure and Docker/K8s environments."
    },
    {
      icon: <FaChalkboardTeacher className="text-indigo-600 text-2xl" />,
      title: "Expert Practitioner Trainers",
      description: "Mentorship directly from working Senior Cloud & SRE Engineers."
    },
    {
      icon: <FaUserCheck className="text-amber-600 text-2xl" />,
      title: "Career & Interview Support",
      description: "Resume guidance, technical evaluation, and mock interview preparation."
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-500/40 transition-all shadow-sm"
            >
              <div className="flex-shrink-0 p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
