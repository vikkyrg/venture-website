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
    <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#087FC1]/60 transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1">
      
      {/* Top Banner / Badges */}
      <div className="p-5 pb-4 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-800 px-2.5 py-1 rounded-md">
            {formatDeliveryMode(course.deliveryMode)}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#087FC1] border border-blue-200/80 px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <FaCheckCircle className="text-[10px] text-[#087FC1]" /> Live Syllabus
          </span>
        </div>

        <div className="flex items-start gap-3.5 mt-2">
          <div className="p-3 bg-white border border-slate-200/90 rounded-xl text-[#087FC1] shadow-2xs group-hover:border-[#087FC1] group-hover:bg-blue-50/50 transition-colors shrink-0">
            <FaLaptopCode className="text-xl" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#087FC1] uppercase tracking-wider block">Training Track</span>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors line-clamp-2 min-h-[3rem] mt-0.5 leading-snug">
              {course.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 min-h-[3.375rem]">
          {course.shortDescription || 'Comprehensive IT training program with hands-on lab exercises and real-world project scenarios.'}
        </p>

        {/* Metadata Strip */}
        <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <FaClock className="text-[#087FC1] text-xs shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Duration</span>
                <span className="text-slate-900 font-bold leading-tight mt-0.5">{course.duration || 'Flexible'}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaSignal className="text-slate-400 text-xs shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Level</span>
                <span className="text-slate-900 font-bold leading-tight mt-0.5">{course.level || 'Intermediate'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#087FC1] bg-blue-50/70 px-3 py-1.5 rounded-lg border border-blue-100">
            <FaProjectDiagram className="text-[#087FC1] text-xs shrink-0" />
            <span>{handsOnText}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 flex items-center gap-2 mt-auto">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#087FC1] hover:bg-[#075A9C] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
          >
            View Course
            <FaArrowRight className="text-[10px] text-blue-200 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/enquiry"
            className="py-2.5 px-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#087FC1] border border-[#087FC1]/80 font-bold text-xs transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;

