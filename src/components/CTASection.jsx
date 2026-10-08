import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaArrowRight } from 'react-icons/fa';
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
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-3.5 py-1 rounded-md border border-blue-200 inline-block">
          Start Your Skill Acceleration
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Ready to Build Your Next Skill?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Join Venture Soft to gain enterprise-aligned practical expertise, practitioner mentorship, and real-world project builds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            Explore Courses
            <FaArrowRight className="text-xs text-blue-400" />
          </Link>
          <Link
            to="/enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs uppercase tracking-wider shadow-xs transition-all"
          >
            <FaPaperPlane className="text-xs text-blue-700" />
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

