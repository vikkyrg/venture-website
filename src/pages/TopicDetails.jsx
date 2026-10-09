import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';
import { getTopicBySlugs } from '../services/api';
import { FaCheckCircle, FaArrowLeft, FaArrowRight, FaBookReader, FaChevronRight } from 'react-icons/fa';

const TopicDetails = () => {
  const { courseSlug, moduleSlug, topicSlug } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getTopicBySlugs(courseSlug, moduleSlug, topicSlug);
        setTopicData(res.data);
      } catch (err) {
        console.error('Failed to load topic:', err);
        setError(`Topic "${topicSlug}" could not be retrieved from backend API.`);
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, [courseSlug, moduleSlug, topicSlug]);

  if (loading) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><Loader message="Loading dynamic topic details from database..." /></main>;
  if (error || !topicData) return <main className="pt-20 bg-[#F8FAFC] min-h-screen"><ErrorState message={error} /></main>;

  const { topic, course, module: mod, navigation } = topicData;

  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Banner Header */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[
            { label: 'Courses', link: '/courses' },
            { label: course.title, link: `/courses/${course.slug}` },
            { label: mod.title, link: `/courses/${course.slug}/module/${mod.slug}` },
            { label: topic.title }
          ]} />

          <div className="mt-4 bg-white border border-[#DCE7F5] p-6 sm:p-8 rounded-2xl shadow-sm space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#EEF6FF] text-[#087FC4] border border-[#DCE7F5] px-3 py-1 rounded-md inline-block">
              Learning Topic
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#101A32] tracking-tight">{topic.title}</h1>
            {topic.shortDescription && <p className="text-[#52647E] text-xs sm:text-sm leading-relaxed font-normal">{topic.shortDescription}</p>}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#DCE7F5] p-5 rounded-2xl shadow-sm space-y-4 sticky top-24">
              <h4 className="text-sm font-bold text-[#101A32] border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>Curriculum Sidebar</span>
                <span className="text-[10px] bg-[#EEF6FF] text-[#087FC4] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{course.title}</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block mb-1">Current Module</span>
                  <Link to={`/courses/${course.slug}/module/${mod.slug}`} className="font-bold text-[#087FC4] hover:underline block">
                    {mod.title}
                  </Link>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block mb-2">Module Topics</span>
                  {mod.topics && mod.topics.length > 0 ? (
                    <ul className="space-y-1">
                      {mod.topics.map((t) => (
                        <li key={t._id}>
                          <Link
                            to={`/courses/${course.slug}/module/${mod.slug}/topic/${t.slug}`}
                            className={`flex items-center gap-2 p-2 rounded-xl transition-all ${
                              t.slug === topic.slug
                                ? 'bg-[#EEF6FF] text-[#087FC4] font-bold border-l-4 border-[#087FC4]'
                                : 'text-[#52647E] hover:bg-[#F5F9FF] hover:text-[#101A32]'
                            }`}
                          >
                            <FaChevronRight className={`text-[9px] shrink-0 ${t.slug === topic.slug ? 'text-[#087FC4]' : 'text-slate-400'}`} />
                            <span className="line-clamp-1">{t.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-slate-400 italic">No other topics listed</span>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-xs font-bold text-slate-500 hover:text-[#087FC4] block"
                  >
                    ← View Full Course Syllabus
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Main Article Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Key Learning Objectives Callout Box */}
            {topic.learningObjectives && topic.learningObjectives.length > 0 && (
              <div className="bg-[#EEF6FF]/80 border border-[#DCE7F5] p-6 rounded-2xl space-y-3 shadow-xs">
                <h3 className="text-sm font-bold text-[#087FC4] flex items-center gap-2 uppercase tracking-wider">
                  <FaCheckCircle className="text-[#087FC4]" />
                  Key Learning Objectives
                </h3>
                <ul className="space-y-2 text-xs text-[#101A32] font-normal">
                  {topic.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087FC4] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Markdown / Main Topic Content */}
            <div className="bg-white border border-[#DCE7F5] p-6 sm:p-8 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#101A32] border-b border-slate-100 pb-3 flex items-center gap-2">
                <FaBookReader className="text-[#087FC4]" />
                Curriculum Topic Content
              </h3>
              <div className="prose max-w-none text-[#52647E] text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                {topic.content || 'Detailed learning material and documentation for this topic.'}
              </div>
            </div>

            {/* Subtopics Covered */}
            {topic.subTopics && topic.subTopics.length > 0 && (
              <div className="bg-white border border-[#DCE7F5] p-6 rounded-2xl shadow-xs space-y-3">
                <h4 className="text-xs font-bold text-[#101A32] uppercase tracking-wider">Subtopics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {topic.subTopics.map((sub, i) => (
                    <span key={i} className="text-xs bg-[#F5F9FF] border border-[#DCE7F5] px-3 py-1 rounded-md text-[#52647E] font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next Topic Navigation Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-[#DCE7F5]">
              {navigation.prev ? (
                <Link
                  to={`/courses/${course.slug}/module/${mod.slug}/topic/${navigation.prev.slug}`}
                  className="flex items-center gap-2 text-xs font-bold text-[#101A32] hover:text-[#087FC4] bg-white border border-[#DCE7F5] px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
                >
                  <FaArrowLeft />
                  <span>Previous Topic</span>
                </Link>
              ) : <div />}

              {navigation.next && (
                <Link
                  to={`/courses/${course.slug}/module/${mod.slug}/topic/${navigation.next.slug}`}
                  className="btn-animate flex items-center gap-2 text-xs font-bold text-white bg-[#087FC4] hover:bg-[#075A9C] px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <span>Next Topic</span>
                  <FaArrowRight />
                </Link>
              )}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default TopicDetails;
