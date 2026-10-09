import { Link } from 'react-router-dom';
import { FaPaperPlane, FaArrowRight, FaStar } from 'react-icons/fa';

const PlacementCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0A1329] text-white relative overflow-hidden">
      
      {/* Subtle Background Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#087FC1]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
          <FaStar className="text-amber-400 text-xs" />
          <span>Skill Acceleration</span>
        </div>

        <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Build Your Technical Skills?
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Join VentureSoft to gain enterprise-aligned practical expertise, practitioner mentorship, and real-world project builds. Start your structured learning journey today.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/courses"
            className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#087FC1] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all"
          >
            Explore Courses
            <FaArrowRight className="text-xs text-blue-200 arrow-icon" />
          </Link>
          <Link
            to="/contact"
            className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider backdrop-blur-xs transition-all"
          >
            <FaPaperPlane className="text-xs text-blue-400" />
            Enquire Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PlacementCTA;
