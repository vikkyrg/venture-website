import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What core training programs does Venture Soft offer?",
      a: "Venture Soft specializes in four primary programs: AIOps Mastery, AWS Cloud Architecture, DevOps & Kubernetes Engineering, and Linux Shell Scripting & Automation."
    },
    {
      q: "Are the courses suitable for beginners?",
      a: "Yes! Tracks like Linux Shell Scripting and AWS Cloud Solutions start from fundamental concepts and progressively advance to enterprise-grade scenario building."
    },
    {
      q: "Is real practical lab work included in the curriculum?",
      a: "Absolutely. All curriculum content is structured around hands-on scenario labs, multi-stage container builds, and live cloud environment provisioning."
    },
    {
      q: "Are learning contents dynamically fetched from MongoDB?",
      a: "Yes, all course syllabi, module structures, and detailed topic documents are dynamically retrieved via REST APIs connected to MongoDB."
    },
    {
      q: "How can I get started or enquire about upcoming batches?",
      a: "You can submit an online enquiry form through our 'Enquire Now' page or contact our counseling team directly via phone or email."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-teal-700 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="p-2 bg-slate-50 rounded-lg text-teal-700 text-xs ml-4 flex-shrink-0 border border-slate-200">
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
