import { Link } from 'react-router-dom';
import { FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Ready to Elevate Your Technology Career?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Enroll in Venture Soft’s industry-focused programs. Master AIOps, AWS, DevOps, and Shell Automation through hands-on scenario labs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm tracking-wide shadow transition-all"
          >
            <FaPaperPlane className="text-xs" />
            Enquire Now
          </Link>
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-sm transition-all"
          >
            Explore Syllabi
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
