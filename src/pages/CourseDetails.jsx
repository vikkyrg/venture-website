import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import { getCourseBySlug } from '../services/api';
import { FaClock, FaSignal, FaLaptop, FaChevronDown, FaBookOpen, FaCheckCircle, FaPaperPlane, FaLayerGroup, FaArrowRight } from 'react-icons/fa';

const CourseDetails = () => {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  const formatDeliveryMode = (val) => {
    if (val === 'offline') return 'Classroom';
    if (val === 'online_offline') return 'Online + Classroom';
    return 'Online Live';
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

  if (loading) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><Loader message="Fetching dynamic course syllabus from database..." /></main>;
  if (error || !course) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><ErrorState message={error || 'Course not found.'} onRetry={fetchDetails} /></main>;

  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Course Banner Hero */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[
            { label: 'Courses', link: '/courses' },
            { label: course.title }
          ]} />

          <div className="mt-4 bg-white border border-[#DCE7F5] p-6 sm:p-10 rounded-2xl shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EEF6FF] text-[#087FC4] border border-[#DCE7F5] px-3 py-1 rounded-md">
                  {formatDeliveryMode(course.deliveryMode)}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-md">
                  {course.level || 'All Levels'}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-md flex items-center gap-1">
                  <FaCheckCircle className="text-[10px] text-emerald-600" /> Active Syllabus
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-[#52647E] text-sm sm:text-base leading-relaxed font-normal">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#52647E] font-medium border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#087FC4]" />
                  <span>Duration: <strong className="text-[#101A32]">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSignal className="text-[#087FC4]" />
                  <span>Level: <strong className="text-[#101A32]">{course.level}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <FaLaptop className="text-[#087FC4]" />
                  <span>Delivery: <strong className="text-[#101A32]">{formatDeliveryMode(course.deliveryMode)}</strong></span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-animate inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#087FC4] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20"
                >
                  <FaPaperPlane className="text-xs text-blue-200" />
                  Enquire For This Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Syllabus & Overview Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Course Overview */}
            <div className="bg-white border border-[#DCE7F5] p-6 sm:p-8 rounded-2xl shadow-xs space-y-3">
              <h3 className="text-xl font-bold text-[#101A32]">Course Overview</h3>
              <p className="text-xs sm:text-sm text-[#52647E] leading-relaxed font-normal whitespace-pre-line">
                {course.description || course.shortDescription}
              </p>
            </div>

            {/* Modules & Topics Accordion */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#101A32] flex items-center gap-2">
                  <FaBookOpen className="text-[#087FC4] text-lg" />
                  Course Syllabus & Modules
                </h3>
                <span className="text-xs font-bold text-[#087FC4] bg-[#EEF6FF] border border-[#DCE7F5] px-3 py-1 rounded-full">
                  {course.modules ? course.modules.length : 0} {course.modules && course.modules.length === 1 ? 'Module' : 'Modules'}
                </span>
              </div>

              {course.modules && course.modules.length > 0 ? (
                course.modules.map((mod) => (
                  <div key={mod._id} className="bg-white border border-[#DCE7F5] rounded-2xl overflow-hidden shadow-xs transition-all">
                    <button
                      onClick={() => setExpandedModule(expandedModule === mod._id ? null : mod._id)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-[#F5F9FF] transition-colors focus:outline-none"
                    >
                      <div>
                        <h4 className="text-base font-bold text-[#101A32] hover:text-[#087FC4] transition-colors">
                          {mod.title}
                        </h4>
                        {mod.description && <p className="text-xs text-[#52647E] mt-1 font-normal">{mod.description}</p>}
                      </div>
                      <FaChevronDown className={`text-[#087FC4] text-xs transition-transform duration-200 shrink-0 ml-3 ${expandedModule === mod._id ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedModule === mod._id && (
                      <div className="p-5 bg-[#F5F9FF] border-t border-[#DCE7F5] space-y-3">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Topics included in this module:
                        </div>
                        {mod.topics && mod.topics.length > 0 ? (
                          <div className="space-y-2">
                            {mod.topics.map((t) => (
                              <Link
                                key={t._id}
                                to={`/courses/${course.slug}/module/${mod.slug}/topic/${t.slug}`}
                                className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#EEF6FF] border border-[#DCE7F5] transition-all text-xs font-semibold text-[#101A32] group shadow-2xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  <FaCheckCircle className="text-[#087FC4] text-xs group-hover:scale-110 transition-transform" />
                                  <span>{t.title}</span>
                                </div>
                                <span className="text-[11px] text-[#087FC4] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                  View Topic Details <FaArrowRight className="text-[9px]" />
                                </span>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500 italic">No topics added under this module yet.</p>
                        )}
                        <div className="pt-2 text-right">
                          <Link
                            to={`/courses/${course.slug}/module/${mod.slug}`}
                            className="text-xs text-[#087FC4] hover:underline font-bold inline-flex items-center gap-1"
                          >
                            Explore Full Module Page →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-8 bg-white border border-[#DCE7F5] rounded-2xl text-center space-y-2">
                  <FaLayerGroup className="mx-auto text-2xl text-slate-300" />
                  <p className="text-sm font-semibold text-slate-700">No modules have been published for this course yet.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Sidebar Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#DCE7F5] p-6 rounded-2xl shadow-sm space-y-6 sticky top-24">
              <h4 className="text-base font-bold text-[#101A32] border-b border-slate-100 pb-3">
                Program Summary
              </h4>
              <ul className="space-y-3.5 text-xs text-[#52647E]">
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-normal">Duration:</span>
                  <span className="font-bold text-[#101A32]">{course.duration}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-normal">Skill Level:</span>
                  <span className="font-bold text-[#101A32]">{course.level}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-normal">Delivery Format:</span>
                  <span className="font-bold text-[#101A32]">{formatDeliveryMode(course.deliveryMode)}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500 font-normal">Hands-on Projects:</span>
                  <span className="font-bold text-[#087FC4]">
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
                  className="btn-animate w-full block text-center py-3.5 rounded-xl bg-[#101A32] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
                >
                  Enroll / Enquire Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default CourseDetails;

