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
        setError('Error loading module data.');
      } finally {
        setLoading(false);
      }
    };
    fetchModuleData();
  }, [courseSlug, moduleSlug]);

  if (loading) return <main className="pt-20"><Loader message="Loading module breakdown..." /></main>;
  if (error || !targetModule) return <main className="pt-20"><ErrorState message={error} /></main>;

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[
          { label: 'Courses', link: '/courses' },
          { label: course.title, link: `/courses/${course.slug}` },
          { label: targetModule.title }
        ]} />

        {/* Module Header */}
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-3 my-6">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-3 py-1 rounded-md">
            Module Detail
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{targetModule.title}</h1>
          <p className="text-slate-600 text-sm">{targetModule.description}</p>
        </div>

        {/* Topics List */}
        <div className="py-6 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FaBookOpen className="text-teal-700" />
            Module Topics ({targetModule.topics ? targetModule.topics.length : 0})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targetModule.topics && targetModule.topics.length > 0 ? (
              targetModule.topics.map((t) => (
                <Link
                  key={t._id}
                  to={`/courses/${course.slug}/module/${targetModule.slug}/topic/${t.slug}`}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-teal-500/50 shadow-sm hover:shadow transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-teal-700 text-xs" />
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {t.title}
                      </h4>
                    </div>
                    {t.shortDescription && (
                      <p className="text-xs text-slate-500 line-clamp-1 pl-5">{t.shortDescription}</p>
                    )}
                  </div>
                  <FaArrowRight className="text-xs text-teal-700 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              ))
            ) : (
              <p className="text-xs text-slate-500">No topics currently available in this module.</p>
            )}
          </div>

          <div className="pt-4">
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-teal-700 transition-colors"
            >
              <FaArrowLeft className="text-[10px]" />
              Back to {course.title} Syllabus
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ModuleDetails;
