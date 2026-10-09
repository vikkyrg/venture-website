import { FaStar, FaGoogle, FaShieldAlt, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewTrustSection = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-blue-50/50 to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Column: Rating & Brand */}
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 text-xs font-bold text-[#087FC1]">
              <FaShieldAlt className="text-xs" /> Verified Learner Feedback
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] tracking-tight">
              Trusted by Software Engineers & Learners
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our training focus remains firmly on quality instruction, technical depth, and real project practice. Learner reviews reflect authentic course experiences.
            </p>
          </div>

          {/* Center Column: Platform Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            
            {/* Google Reviews Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-500 shadow-2xs">
                <FaGoogle className="text-xl" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-900 block">Learner Reviews</span>
                <span className="text-[10px] text-slate-500">Google Verified Ratings</span>
              </div>
            </div>

            {/* Practical Quality Badge */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#087FC1] shadow-2xs">
                <FaCheckCircle className="text-xl" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Hands-on Standards</span>
                <span className="text-[10px] text-slate-500">Industry Practitioner Labs</span>
              </div>
            </div>

          </div>

          {/* Right Action */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#087FC1] hover:bg-[#075A9C] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
            >
              <span>Explore Programs</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewTrustSection;
