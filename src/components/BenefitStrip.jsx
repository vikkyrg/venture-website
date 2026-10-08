import { FaProjectDiagram, FaFileAlt, FaUserCheck, FaComments, FaGraduationCap } from 'react-icons/fa';

const BenefitStrip = () => {
  const benefits = [
    { icon: <FaProjectDiagram className="text-[#087FC1]" />, label: "Live Project Experience" },
    { icon: <FaFileAlt className="text-[#087FC1]" />, label: "Resume Guidance" },
    { icon: <FaUserCheck className="text-[#087FC1]" />, label: "Mock Interviews" },
    { icon: <FaComments className="text-[#087FC1]" />, label: "Technical Interview Preparation" },
    { icon: <FaGraduationCap className="text-[#087FC1]" />, label: "Career Mentorship" }
  ];

  return (
    <div className="bg-white border-b border-slate-200 py-4 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 py-1">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 text-slate-800 text-xs font-bold">
              <div className="p-1.5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-xs">
                {b.icon}
              </div>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitStrip;
