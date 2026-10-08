import { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import { getCourses } from '../services/api';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses((res.data || []));
      } catch (err) {
        console.error('Error fetching courses in FAQ', err);
      }
    };
    fetchPublishedCourses();
  }, []);

  const courseNames = courses.length > 0 ? courses.map(c => c.title).join(', ') : 'our specialized IT training programs';
  const exampleCourses = courses.length >= 2 ? `${courses[0].title} and ${courses[1].title}` : 'our courses';

  const faqs = [
    {
      q: "What core training programs does VentureSoft offer?",
      a: `VentureSoft specializes in several primary enterprise programs including: ${courseNames}. Each program track features complete module and topic breakdowns.`
    },
    {
      q: "Are the courses suitable for beginners as well as experienced engineers?",
      a: `Yes! Tracks like ${exampleCourses} start from foundational principles and progressively advance to enterprise-grade lab scenarios.`
    },
    {
      q: "Is hands-on practical lab work included in every syllabus?",
      a: "Absolutely. All curriculum content is structured around interactive hands-on scenario labs, multi-stage container builds, and live cloud environment provisioning."
    },
    {
      q: "Are training course details dynamically managed from MongoDB?",
      a: "Yes, all course syllabi, module structures, and detailed topic documents are dynamically retrieved via REST APIs connected directly to MongoDB."
    },
    {
      q: "How can I get started or enquire about upcoming training batches?",
      a: "You can submit an online enquiry form through our 'Enquire Now' page or contact our counseling team directly via phone or email."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-flex items-center gap-1.5 shadow-2xs">
            <FaQuestionCircle className="text-xs text-[#087FC1]" /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear answers regarding our training delivery, lab curriculum, and batch structure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-blue-50/30 border-[#087FC1]/60 shadow-md' 
                    : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#087FC1] transition-colors"
                >
                  <span className="pr-4 leading-snug">{faq.q}</span>
                  <span className={`p-2.5 rounded-xl text-xs shrink-0 transition-colors border ${
                    isOpen ? 'bg-[#087FC1] text-white border-[#087FC1]' : 'bg-white text-slate-600 border-slate-200'
                  }`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-4 bg-white/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
