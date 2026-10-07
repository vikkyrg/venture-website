import { Link } from 'react-router-dom';
import { FaClock, FaSignal, FaArrowRight, FaLaptopCode } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      
      {/* Top Banner / Status */}
      <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-0.5 rounded-md">
            {course.mode || 'Live Online'}
          </span>
          {course.featured && (
            <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-md">
              Featured Program
            </span>
          )}
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-teal-700 shadow-sm">
            <FaLaptopCode className="text-xl" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Training Program</span>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
              {course.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
          <div className="flex items-center gap-1.5">
            <FaClock className="text-teal-700" />
            <span>{course.duration || '8 Weeks'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaSignal className="text-blue-600" />
            <span>{course.level || 'Intermediate'}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 flex items-center gap-3">
          <Link
            to={`/courses/${course.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            View Syllabus
            <FaArrowRight className="text-[10px]" />
          </Link>
          <Link
            to="/enquiry"
            className="py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;
