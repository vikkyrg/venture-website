import { FaAward, FaChalkboardTeacher, FaLaptopCode, FaUserCheck } from 'react-icons/fa';

const StatsSection = () => {
  const trustItems = [
    {
      icon: <FaAward className="text-[#087FC1] text-lg" />,
      title: "Industry-Focused Training",
      description: "Enterprise syllabi aligned with modern cloud & infrastructure standards."
    },
    {
      icon: <FaLaptopCode className="text-[#087FC1] text-lg" />,
      title: "Hands-On Practical Learning",
      description: "Interactive scenario labs and practical terminal exercises."
    },
    {
      icon: <FaChalkboardTeacher className="text-[#087FC1] text-lg" />,
      title: "Live Instructor-Led Sessions",
      description: "Mentorship directly from active senior technology engineers."
    },
    {
      icon: <FaUserCheck className="text-[#087FC1] text-lg" />,
      title: "Career-Oriented Curriculum",
      description: "Structured project capstones and technical interview readiness."
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-white border-b border-slate-200/80 shadow-2xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:border-[#087FC1]/40 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="p-2.5 bg-white rounded-lg border border-slate-200/80 shadow-2xs shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 tracking-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

