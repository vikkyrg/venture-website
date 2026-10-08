import { useState } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const PlacementFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do you provide placement assistance?",
      a: "Yes. Venture Soft offers placement support including resume feedback, public portfolio alignment, technical mock interviews, and career counseling to help you prepare for hiring opportunities."
    },
    {
      q: "Do courses include practical projects?",
      a: "All course tracks feature mandatory hands-on project labs and multi-stage capstone scenarios based on enterprise software patterns."
    },
    {
      q: "Are courses available online and in classroom mode?",
      a: "Yes. We conduct both Live Interactive Online batches and In-Person Classroom sessions at our Bangalore campus."
    },
    {
      q: "Do you provide interview preparation?",
      a: "Yes. We conduct targeted mock technical interviews, scenario Q&A practice, and architecture review sessions led by senior engineers."
    },
    {
      q: "Do you help with resume preparation?",
      a: "Yes. Our team reviews and refines your resume to properly articulate project experience, technical stack competencies, and lab outcomes."
    },
    {
      q: "Can beginners join the programs?",
      a: "Absolutely. Tracks start from foundational concepts and build progressively toward intermediate and advanced engineering concepts."
    },
    {
      q: "How do I choose the right course?",
      a: "You can schedule a free counseling session with our senior advisors via the Enquiry page to map your educational background and career goals to the best program."
    },
    {
      q: "How can I contact the VentureSoft team?",
      a: "Reach out via our Enquiry page, call us at +91 98765 43210, or visit our campus in Electronic City, Bangalore."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
            <FaQuestionCircle className="text-xs" /> Placement FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mt-3 tracking-tight">
            Frequently Asked Questions About Career Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear, honest answers regarding our training methodology, mock interviews, and placement enablement.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#101A35] hover:text-[#087FC1] transition-colors"
              >
                <span className="pr-4">{faq.q}</span>
                <span className="p-2 bg-white rounded-lg text-[#087FC1] text-xs flex-shrink-0 border border-slate-200 shadow-2xs">
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
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

export default PlacementFAQ;
