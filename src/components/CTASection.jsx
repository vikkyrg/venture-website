import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuSend, LuArrowRight } from 'react-icons/lu';
import { getCourses } from '../services/api';

const CTASection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses((res.data || []));
      } catch (err) {
        console.error('Error fetching courses in CTASection', err);
      }
    };
    fetchPublishedCourses();
  }, []);

  return (
    <section className="py-16 bg-[#0A192F] text-white relative overflow-hidden border-t border-[#0A192F]/20">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[#087FC1]/10 blur-[100px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10" data-aos="fade-up">
        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-900/40 px-4 py-1.5 rounded-full border border-blue-400/20 inline-block shadow-2xs backdrop-blur-sm">
          Start Your Skill Acceleration
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Build Your Next Skill?
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Join VentureSoft to gain enterprise-aligned practical expertise, practitioner mentorship, and real-world project builds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" data-aos="fade-up" data-aos-delay="100">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#087FC1] hover:bg-blue-600 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-0.5 group btn-animate"
          >
            Explore Courses
            <LuArrowRight className="text-base text-white/80 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold text-sm tracking-wide shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <LuSend className="text-sm text-blue-400" />
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

