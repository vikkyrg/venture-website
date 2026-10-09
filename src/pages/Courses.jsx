import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CourseGrid from '../components/CourseGrid';
import CTASection from '../components/CTASection';
import { getCourses } from '../services/api';
import { FaSearch, FaBookOpen } from 'react-icons/fa';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getCourses({ status: 'published' });
        const list = response.data || [];
        setCourses(list);
        setFilteredCourses(list);
      } catch (err) {
        console.error('Failed to load courses:', err);
        setError('Could not fetch courses from backend API server.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCourses(courses);
    } else {
      const q = searchQuery.toLowerCase();
      setFilteredCourses(
        courses.filter(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            (c.shortDescription && c.shortDescription.toLowerCase().includes(q)) ||
            (c.slug && c.slug.toLowerCase().includes(q))
        )
      );
    }
  }, [searchQuery, courses]);

  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Page Header Hero */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-10 lg:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'All Programs' }]} />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FC4] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE7F5] shadow-2xs mb-3">
                <FaBookOpen className="text-xs text-[#087FC4]" /> Training Catalog
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] tracking-tight leading-tight">
                Explore Our <span className="text-[#087FC4]">Industry-Leading</span> Programs
              </h1>
              <p className="text-[#52647E] text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Choose from our flagship technology tracks. Click any course to view complete module and topic breakdowns and begin your learning path.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search courses by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#DCE7F5] text-[#101A32] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:ring-2 focus:ring-[#087FC4]/20 shadow-sm transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CourseGrid courses={filteredCourses} loading={loading} error={error} />
      </section>

      <CTASection />
    </main>
  );
};

export default Courses;

