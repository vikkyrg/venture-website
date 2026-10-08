import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CourseGrid from '../components/CourseGrid';
import CTASection from '../components/CTASection';
import { getCourses } from '../services/api';
import { FaSearch } from 'react-icons/fa';

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
        setError('Could not fetch courses from server.');
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
            c.shortDescription.toLowerCase().includes(q) ||
            c.slug.toLowerCase().includes(q)
        )
      );
    }
  }, [searchQuery, courses]);

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[{ label: 'All Courses' }]} />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50/80 px-3 py-1.5 rounded-md border border-blue-200/50 mb-3">
              <FaSearch className="text-[9px]" /> Training Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight">
              Explore Our <span className="text-[#087FC1]">Industry-Leading</span> Programs
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-lg">
              Choose from our flagship technology tracks. Click any course to view full module and topic breakdowns and begin your journey.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search courses by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#087FC1] focus:ring-1 focus:ring-[#087FC1] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="py-8">
          <CourseGrid courses={filteredCourses} loading={loading} error={error} />
        </div>

      </div>

      <CTASection />
    </main>
  );
};

export default Courses;
