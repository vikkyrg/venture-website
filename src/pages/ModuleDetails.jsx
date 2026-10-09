import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import { getCourseBySlug } from '../services/api';
import { FaBookOpen, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ModuleDetails = () => {
  const { courseSlug, moduleSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [targetModule, setTargetModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getCourseBySlug(courseSlug);
        if (res.data) {
          setCourse(res.data);
          const found = (res.data.modules || []).find((m) => m.slug === moduleSlug);
          if (found) {
            setTargetModule(found);
          } else {
            setError(`Module "${moduleSlug}" not found in course "${courseSlug}".`);
          }
        }
      } catch (err) {
        console.error('Failed to load module:', err);
        setError('Error loading module data from backend API.');
      } finally {
        setLoading(false);
      }
    };
    fetchModuleData();
  }, [courseSlug, moduleSlug]);

  if (loading) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><Loader message="Loading module breakdown..." /></main>;
  if (error || !targetModule) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><ErrorState message={error} /></main>;

  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[
            { label: 'Courses', link: '/courses' },
            { label: course.title, link: `/courses/${course.slug}` },
            { label: targetModule.title }
          ]} />

          <div className="mt-4 bg-white border border-[#DCE7F5] p-6 sm:p-8 rounded-2xl shadow-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EEF6FF] text-[#087FC4] border border-[#DCE7F5] px-3 py-1 rounded-md inline-block">
              Module Detail
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#101A32] tracking-tight">{targetModule.title}</h1>
            {targetModule.description && <p className="text-[#52647E] text-sm leading-relaxed font-normal">{targetModule.description}</p>}
          </div>
        </div>
      </section>

      {/* Topics Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <h3 className="text-xl font-bold text-[#101A32] flex items-center gap-2">
          <FaBookOpen className="text-[#087FC4]" />
          Module Topics ({targetModule.topics ? targetModule.topics.length : 0})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetModule.topics && targetModule.topics.length > 0 ? (
            targetModule.topics.map((t) => (
              <Link
                key={t._id}
                to={`/courses/${course.slug}/module/${targetModule.slug}/topic/${t.slug}`}
                className="p-5 rounded-2xl bg-white border border-[#DCE7F5] hover:border-[#087FC4] shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#087FC4] text-xs shrink-0" />
                    <h4 className="text-sm font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors">
                      {t.title}
                    </h4>
                  </div>
                  {t.shortDescription && (
                    <p className="text-xs text-[#52647E] line-clamp-1 pl-5 font-normal">{t.shortDescription}</p>
                  )}
                </div>
                <FaArrowRight className="text-xs text-[#087FC4] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
              </Link>
            ))
          ) : (
            <p className="text-xs text-slate-500 italic">No topics currently available in this module.</p>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200">
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#52647E] hover:text-[#087FC4] transition-colors"
          >
            <FaArrowLeft className="text-[10px]" />
            Back to {course.title} Full Syllabus
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ModuleDetails;

