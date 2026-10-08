import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaGraduationCap } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rohan V.",
      role: "Software Development Track",
      course: "Full Stack Engineering",
      quote: "The practical lab scenarios and structured project modules gave me the confidence to handle real technical interviews with ease.",
      rating: 5,
      initials: "RV"
    },
    {
      id: 2,
      name: "Ananya S.",
      role: "Cloud & Infrastructure Trainee",
      course: "Cloud & DevOps Track",
      quote: "Working on live projects and receiving feedback from real lead engineers transformed how I approach system deployment and architecture.",
      rating: 5,
      initials: "AS"
    },
    {
      id: 3,
      name: "Karthik M.",
      role: "Systems Automation Learner",
      course: "Linux & Automation Track",
      quote: "The mock interviews were brutal in a good way — they helped me identify gaps in my system knowledge before actual hiring drives.",
      rating: 5,
      initials: "KM"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
            <FaGraduationCap className="text-xs" /> Learner Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mt-3 tracking-tight">
            Real Learners. Real Experiences.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Read how our practical, hands-on training model empowers engineers and technology professionals.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#087FC1]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-blue-200 text-xl" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#087FC1] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#101A35]">{t.name}</h4>
                  <span className="text-[11px] text-slate-500 block">{t.role}</span>
                  <span className="inline-block text-[10px] font-semibold text-[#087FC1] bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mt-0.5">
                    {t.course}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
