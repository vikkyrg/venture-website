import { Link } from 'react-router-dom';
import { FaClock, FaSignal, FaArrowRight, FaLaptopCode, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  const formatDeliveryMode = (val) => {
    if (val === 'offline') return 'Classroom';
    if (val === 'online_offline') return 'Online + Classroom';
    return 'Online Live';
  };

  const handsOnText = course.handsOnProjects === 'included' || course.handsOnProjects === 'Included' || course.handsOnProjects === true
    ? 'Hands-on Projects: Included'
    : course.handsOnProjects === 'optional'
    ? 'Hands-on Projects: Optional'
    : 'Hands-on Projects: Included';

  return (
    <div className="group bg-white rounded-2xl border border-[#DCE7F5] shadow-xs hover:shadow-xl hover:border-[#087FC4] transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1 relative">
      
      {/* Top Brand Accent Line */}
      <div className="h-1 w-full bg-[#087FC4] group-hover:bg-[#1769FF] transition-colors" />

      {/* Top Header / Badges */}
      <div className="p-5 pb-4 border-b border-slate-100 bg-[#F5F9FF]/60">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EEF6FF] text-[#087FC4] border border-[#DCE7F5] px-2.5 py-1 rounded-md">
            {formatDeliveryMode(course.deliveryMode)}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md flex items-center gap-1">
            <FaCheckCircle className="text-[10px] text-emerald-600" /> Live Syllabus
          </span>
        </div>

        <div className="flex items-start gap-3 mt-1">
          <div className="p-2.5 bg-white border border-[#DCE7F5] rounded-xl text-[#087FC4] shadow-2xs group-hover:border-[#087FC4] group-hover:bg-[#EEF6FF] transition-colors shrink-0">
            <FaLaptopCode className="text-lg" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#087FC4] uppercase tracking-wider block">Technology Track</span>
            <h3 className="text-base font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors line-clamp-2 min-h-[3rem] mt-0.5 leading-snug">
              {course.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-[#52647E] leading-relaxed line-clamp-3 min-h-[3.375rem] font-normal">
          {course.shortDescription || 'Comprehensive IT training program with hands-on lab exercises and real-world project scenarios.'}
        </p>

        {/* Metadata Grid */}
        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-[#52647E]">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2 bg-[#F5F9FF] p-2.5 rounded-lg border border-[#DCE7F5]/80">
              <FaClock className="text-[#087FC4] text-xs shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Duration</span>
                <span className="text-[#101A32] font-bold leading-tight mt-0.5 text-xs">{course.duration || 'Flexible'}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-[#F5F9FF] p-2.5 rounded-lg border border-[#DCE7F5]/80">
              <FaSignal className="text-[#087FC4] text-xs shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Level</span>
                <span className="text-[#101A32] font-bold leading-tight mt-0.5 text-xs">{course.level || 'Intermediate'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#087FC4] bg-[#EEF6FF] px-3 py-2 rounded-lg border border-[#DCE7F5]">
            <FaProjectDiagram className="text-[#087FC4] text-xs shrink-0" />
            <span>{handsOnText}</span>
          </div>
        </div>

        {/* Action Buttons Aligned at Bottom */}
        <div className="pt-2 flex items-center gap-2 mt-auto">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#087FC4] hover:bg-[#075A9C] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
          >
            View Course
            <FaArrowRight className="text-[10px] text-blue-200 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-[#087FC4] border border-[#087FC4] font-bold text-xs transition-colors shrink-0"
          >
            Enquire
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;


