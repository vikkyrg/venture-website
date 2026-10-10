import { useState, useEffect } from 'react';
import { LuPlus, LuMinus, LuCircleHelp } from 'react-icons/lu';
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-white border-b border-[#DCE7F5] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-0" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#087FC4]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-sm font-bold text-[#087FC4] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE7F5] inline-flex items-center gap-1.5 shadow-2xs">
            <LuCircleHelp className="text-sm text-[#087FC4]" /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#52647E] mt-2 font-normal">
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
                    ? 'bg-white border-[#087FC4] shadow-md ring-1 ring-[#087FC4]/20' 
                    : 'bg-white/80 border-[#DCE7F5] hover:border-[#087FC4]/50 hover:bg-white shadow-2xs'
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#101A32] hover:text-[#087FC4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#087FC4] focus:ring-inset"
                >
                  <span className="pr-4 leading-snug">{faq.q}</span>
                  <span className={`p-2.5 rounded-xl text-sm shrink-0 transition-all border ${
                    isOpen ? 'bg-[#087FC4] text-white border-[#087FC4]' : 'bg-[#F5F9FF] text-slate-600 border-[#DCE7F5]'
                  }`}>
                    {isOpen ? <LuMinus /> : <LuPlus />}
                  </span>
                </button>
                
                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#52647E] leading-relaxed border-t border-[#EEF6FF] pt-4 bg-white font-normal"
                  >
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

