import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaLaptopCode, FaGraduationCap, FaPaperPlane, FaLayerGroup, FaShieldAlt, FaStar, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';
import { getCourses } from '../services/api';

const Hero = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses((res.data || []).slice(0, 4));
      } catch (err) {
        console.error('Error fetching courses in Hero', err);
      }
    };
    fetchPublishedCourses();
  }, []);

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-[#EEF6FF]/70 to-[#F5F9FF] border-b border-[#DCE7F5] overflow-hidden">
      
      {/* Soft Background Glows & Decorative SVG Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#087FC4]/10 rounded-full blur-3xl pointer-events-none -z-0 hero-glow-1" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1769FF]/10 rounded-full blur-3xl pointer-events-none -z-0 hero-glow-2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />
      <div className="absolute top-20 right-1/4 w-64 h-64 border border-[#087FC4]/15 rounded-full pointer-events-none -z-0" />
      <div className="absolute top-36 right-1/4 w-96 h-96 border border-[#1769FF]/10 rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Outlined Badge */}
            <div data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DCE7F5] text-[#101A32] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#087FC4] animate-pulse" />
              <FaGraduationCap className="text-[#087FC4] text-sm" />
              <span>Corporate Technology Training Institute</span>
            </div>

            {/* Bold Headline */}
            <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101A32] tracking-tight leading-[1.12]">
              Empowering Professionals With <br className="hidden sm:inline" />
              <span className="text-[#087FC4] relative inline-block mt-1">
                Job-Ready Technical Expertise
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#1769FF]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p data-aos="fade-up" data-aos-delay="300" className="text-base sm:text-lg text-[#52647E] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              VentureSoft delivers practitioner-led IT training designed for enterprise technologies. Master modern engineering through live interactive labs, capstone builds, and career guidance.
            </p>

            {/* CTAs */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                to="/courses"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#087FC4] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20"
              >
                Explore Programs
                <FaArrowRight className="text-xs text-blue-200 arrow-icon" />
              </Link>
              <Link
                to="/contact"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#087FC4] border border-[#087FC4] font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                <FaPaperPlane className="text-xs text-[#087FC4]" />
                Enquire Now
              </Link>
            </div>

            {/* 3 Compact Benefit Checkpoints */}
            <div data-aos="fade-in" data-aos-delay="500" className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#101A32] font-semibold border-t border-[#DCE7F5] mt-6">
              <div className="flex items-center gap-2 hover:text-[#087FC4] transition-colors">
                <FaCheckCircle className="text-[#087FC4] text-sm shrink-0" />
                <span>Practitioner-Led Instruction</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#087FC4] transition-colors">
                <FaCheckCircle className="text-[#087FC4] text-sm shrink-0" />
                <span>Hands-on Scenario Labs</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#087FC4] transition-colors">
                <FaCheckCircle className="text-[#087FC4] text-sm shrink-0" />
                <span>Verified Career Certificate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Corporate Training Visual Card */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="300" data-aos-duration="900">
            {/* Soft Ambient Shadow Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#087FC4] to-[#1769FF] rounded-3xl opacity-20 blur-xl pointer-events-none" />

            <div className="relative bg-white border border-[#DCE7F5] rounded-2xl shadow-xl overflow-hidden">
              
              {/* Photo Banner with floating badge */}
              <div className="image-zoom-container relative">
                <img 
                  src="/hero-image.jpg" 
                  alt="Corporate IT Training Cohort" 
                  className="w-full h-56 object-cover object-center border-b border-[#DCE7F5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A32]/80 via-transparent to-transparent flex items-end p-4 justify-between">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#101A32]/60 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                    <FaStar className="text-amber-400 text-xs" /> Real-World Enterprise Labs
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#087FC4] text-white px-2.5 py-1 rounded-full shadow-sm">
                    Interactive
                  </span>
                </div>
              </div>

              {/* Featured Programs Panel */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-[#087FC4]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101A32]">Featured Training Programs</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#087FC4] px-2.5 py-1 rounded-full border border-blue-200/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FC4] animate-ping" /> Live Enrolling
                  </span>
                </div>

                {/* Dynamic Course Rows */}
                <div className="grid grid-cols-1 gap-2.5 py-0.5">
                  {courses.length > 0 ? (
                    courses.map((c, idx) => (
                      <Link
                        key={c._id || c.slug}
                        to={`/courses/${c.slug}`}
                        className="group p-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] hover:border-[#087FC4] hover:bg-white transition-all duration-300 hover:shadow-md flex items-center justify-between"
                        data-aos="fade-up"
                        data-aos-delay={400 + (idx * 80)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-white rounded-lg border border-[#DCE7F5] text-[#087FC4] group-hover:bg-[#EEF6FF] transition-colors shrink-0 shadow-2xs">
                            <FaLaptopCode className="text-sm" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors line-clamp-1">
                              {c.title}
                            </h4>
                            <span className="text-[11px] text-[#52647E] block mt-0.5">
                              {c.duration || 'Flexible'} • {c.level || 'Intermediate'}
                            </span>
                          </div>
                        </div>
                        <FaArrowRight className="text-xs text-slate-400 group-hover:text-[#087FC4] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </Link>
                    ))
                  ) : (
                    <div className="text-center text-xs text-slate-500 py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      <FaLayerGroup className="mx-auto text-xl text-slate-300 mb-1" />
                      Dynamic catalog loading...
                    </div>
                  )}
                </div>

                {/* Dark Navy Footer Strip */}
                <div className="bg-[#101A32] rounded-xl p-3.5 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-xs border border-slate-800">
                  <div className="flex items-center gap-2">
                    <FaChalkboardTeacher className="text-[#087FC4] text-sm shrink-0" />
                    <span className="font-semibold text-white text-[11px]">Classroom & Live Online Cohorts</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#087FC4] text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                    Updated Syllabi
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


