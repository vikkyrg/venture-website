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

  if (loading) return <main className="pt-20"><Loader message="Loading dynamic topic details from MongoDB..." /></main>;
  if (error || !topicData) return <main className="pt-20"><ErrorState message={error} /></main>;

  const { topic, course, module: mod, navigation } = topicData;

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[
          { label: 'Courses', link: '/courses' },
          { label: course.title, link: `/courses/${course.slug}` },
          { label: mod.title, link: `/courses/${course.slug}/module/${mod.slug}` },
          { label: topic.title }
        ]} />

        {/* Topic Banner */}
        <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-2 my-6">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-md">
            Learning Topic
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{topic.title}</h1>
          {topic.shortDescription && <p className="text-xs sm:text-sm text-slate-600">{topic.shortDescription}</p>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4 sticky top-24">
              <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>Curriculum Sidebar</span>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-semibold uppercase">{course.title}</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block mb-1">Current Module</span>
                  <Link to={`/courses/${course.slug}/module/${mod.slug}`} className="font-semibold text-blue-700 hover:underline block">
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
                            className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                              t.slug === topic.slug
                                ? 'bg-blue-50 text-blue-800 font-bold border-l-4 border-blue-700'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            <FaChevronRight className={`text-[9px] ${t.slug === topic.slug ? 'text-blue-700' : 'text-slate-400'}`} />
                            <span className="line-clamp-1">{t.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-slate-400">No other topics listed</span>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-xs font-bold text-slate-500 hover:text-blue-700 block"
                  >
                    ← View Full Course Syllabus
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Learning Objectives */}
            {topic.learningObjectives && topic.learningObjectives.length > 0 && (
              <div className="bg-blue-50/60 border border-blue-100 p-6 rounded-2xl space-y-3 shadow-sm">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <FaCheckCircle className="text-blue-700" />
                  Key Learning Objectives
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {topic.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Markdown / Main Topic Content */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <FaBookReader className="text-blue-700" />
                Curriculum Topic Content
              </h3>
              <div className="prose max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {topic.content || 'Detailed learning material and documentation for this topic.'}
              </div>
            </div>

            {/* Subtopics List */}
            {topic.subTopics && topic.subTopics.length > 0 && (
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Subtopics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {topic.subTopics.map((sub, i) => (
                    <span key={i} className="text-xs bg-slate-100 border border-slate-200 px-3 py-1 rounded-md text-slate-700 font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prev / Next Navigation Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              {navigation.prev ? (
                <Link
                  to={`/courses/${course.slug}/module/${mod.slug}/topic/${navigation.prev.slug}`}
                  className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-700 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
                >
                  <FaArrowLeft />
                  <span>Previous Topic</span>
                </Link>
              ) : <div />}

              {navigation.next && (
                <Link
                  to={`/courses/${course.slug}/module/${mod.slug}/topic/${navigation.next.slug}`}
                  className="flex items-center gap-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-4 py-2.5 rounded-lg shadow transition-all"
                >
                  <span>Next Topic</span>
                  <FaArrowRight />
                </Link>
              )}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default TopicDetails;
