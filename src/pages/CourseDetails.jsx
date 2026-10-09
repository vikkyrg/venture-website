import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import { getCourseBySlug } from '../services/api';
import { FaClock, FaSignal, FaLaptop, FaChevronDown, FaBookOpen, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const CourseDetails = () => {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  const formatDeliveryMode = (val) => {
    if (val === 'offline') return 'Offline';
    if (val === 'online_offline') return 'Online + Offline';
    return 'Online';
  };

  const fetchDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getCourseBySlug(courseSlug);
      setCourse(response.data);
      if (response.data && response.data.modules && response.data.modules.length > 0) {
        setExpandedModule(response.data.modules[0]._id);
      }
    } catch (err) {
      console.error('Failed to load course details:', err);
      setError(`Unable to load course modules for "${courseSlug}".`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [courseSlug]);

  if (loading) return <main className="pt-20"><Loader message="Fetching dynamic course syllabus from MongoDB..." /></main>;
  if (error || !course) return <main className="pt-20"><ErrorState message={error || 'Course not found.'} onRetry={fetchDetails} /></main>;

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[
          { label: 'Courses', link: '/courses' },
          { label: course.title }
        ]} />

        {/* Hero Section */}
        <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm my-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-md">
                {formatDeliveryMode(course.deliveryMode)}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-md">
                {course.level || 'All Levels'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {course.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-700" />
                <span>Duration: <strong className="text-slate-900">{course.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FaSignal className="text-blue-600" />
                <span>Level: <strong className="text-slate-900">{course.level}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FaLaptop className="text-indigo-600" />
                <span>Format: <strong className="text-slate-900">{formatDeliveryMode(course.deliveryMode)}</strong></span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow transition-all"
              >
                <FaPaperPlane />
                Enquire For This Course
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Overview & Syllabi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
          
          {/* Main Syllabi List */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Overview */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Course Overview</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {course.description || course.shortDescription}
              </p>
            </div>

            {/* Modules Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FaBookOpen className="text-blue-700 text-lg" />
                  Course Syllabus & Modules
                </h3>
                <span className="text-xs text-slate-500 font-semibold bg-slate-200/60 px-2.5 py-1 rounded-md">
                  {course.modules ? course.modules.length : 0} {course.modules && course.modules.length === 1 ? 'Module' : 'Modules'}
                </span>
              </div>

              {course.modules && course.modules.length > 0 ? (
                course.modules.map((mod) => (
                  <div key={mod._id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all">
                    <button
                      onClick={() => setExpandedModule(expandedModule === mod._id ? null : mod._id)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <h4 className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                          {mod.title}
                        </h4>
                        {mod.description && <p className="text-xs text-slate-500 mt-1">{mod.description}</p>}
                      </div>
                      <FaChevronDown className={`text-blue-700 text-xs transition-transform ${expandedModule === mod._id ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedModule === mod._id && (
                      <div className="p-5 bg-slate-50/70 border-t border-slate-100 space-y-3">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Topics in this module:
                        </div>
                        {mod.topics && mod.topics.length > 0 ? (
                          <div className="space-y-2">
                            {mod.topics.map((t) => (
                              <Link
                                key={t._id}
                                to={`/courses/${course.slug}/module/${mod.slug}/topic/${t.slug}`}
                                className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-all text-xs font-semibold text-slate-800 group"
                              >
                                <div className="flex items-center gap-2.5">
                                  <FaCheckCircle className="text-blue-700 text-xs group-hover:scale-110 transition-transform" />
                                  <span>{t.title}</span>
                                </div>
                                <span className="text-[11px] text-blue-700 font-bold group-hover:translate-x-1 transition-transform">
                                  View Topic Details →
                                </span>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500">No topics added under this module yet.</p>
                        )}
                        <div className="pt-2">
                          <Link
                            to={`/courses/${course.slug}/module/${mod.slug}`}
                            className="text-xs text-blue-700 hover:underline font-bold block text-right"
                          >
                            Explore Module Page →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
                  <p className="text-sm font-semibold text-slate-700">No modules have been published for this course yet.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Sidebar Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-6 sticky top-24">
              <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Program Summary
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-semibold text-slate-900">{course.duration}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Level:</span>
                  <span className="font-semibold text-slate-900">{course.level}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-semibold text-slate-900">{formatDeliveryMode(course.deliveryMode)}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Hands-on Projects:</span>
                  <span className="font-bold text-blue-700">
                    {course.handsOnProjects === 'included' || course.handsOnProjects === 'Included' || course.handsOnProjects === true
                      ? 'Included'
                      : course.handsOnProjects === 'optional'
                      ? 'Optional'
                      : 'Included'}
                  </span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Enroll / Enquire Now
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default CourseDetails;
