import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaLaptopCode, FaGraduationCap, FaPaperPlane, FaLayerGroup, FaShieldAlt, FaStar } from 'react-icons/fa';
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
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 border-b border-slate-200/80 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-slate-300/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Corporate Badge */}
            <div data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200/80 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <FaGraduationCap className="text-[#087FC1] text-sm" />
              <span>Corporate Technology Training Institute</span>
            </div>

            {/* Main Headline */}
            <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Empowering Professionals With <br className="hidden sm:inline" />
              <span className="text-[#087FC1] relative inline-block mt-1">
                Job-Ready Technical Expertise
              </span>
            </h1>

            {/* Subheading */}
            <p data-aos="fade-up" data-aos-delay="300" className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              VentureSoft delivers structured, practitioner-led IT training programs. Master modern enterprise technologies through live interactive labs, capstone builds, and career guidance.
            </p>

            {/* Action Buttons */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                to="/courses"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#087FC1] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all"
              >
                Explore Programs
                <FaArrowRight className="text-xs text-blue-200 arrow-icon" />
              </Link>
              <Link
                to="/enquiry"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#087FC1] border border-[#087FC1]/80 font-bold text-xs uppercase tracking-wider shadow-xs transition-all"
              >
                <FaPaperPlane className="text-xs text-[#087FC1]" />
                Enquire Now
              </Link>
            </div>

            {/* Value Checkpoints */}
            <div data-aos="fade-in" data-aos-delay="500" className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-700 font-semibold border-t border-slate-200/60 mt-6">
              <div className="flex items-center gap-2 hover:text-[#087FC1] transition-colors">
                <FaCheckCircle className="text-[#087FC1] text-sm shrink-0" />
                <span>Practitioner-Led Instruction</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#087FC1] transition-colors">
                <FaCheckCircle className="text-[#087FC1] text-sm shrink-0" />
                <span>Hands-on Scenario Labs</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#087FC1] transition-colors">
                <FaCheckCircle className="text-[#087FC1] text-sm shrink-0" />
                <span>Verified Career Certificate</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            {/* Soft Glow behind visual */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500"></div>

            <div className="relative bg-white border border-slate-200/90 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="image-zoom-container relative">
                <img 
                  src="/hero-image.jpg" 
                  alt="IT Professionals Collaborating" 
                  className="w-full h-52 object-cover object-center border-b border-slate-200/80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <FaStar className="text-amber-300 text-xs" /> Real-World Enterprise Labs & Workflows
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-[#087FC1]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Featured Programs</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#087FC1] px-2.5 py-1 rounded-md border border-blue-200">
                    Live Enrolling
                  </span>
                </div>

                {/* Dynamic Course Cards Grid */}
                <div className="grid grid-cols-1 gap-3 py-1">
                  {courses.length > 0 ? (
                    courses.map((c, idx) => (
                      <Link
                        key={c._id || c.slug}
                        to={`/courses/${c.slug}`}
                        className="group p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#087FC1] hover:bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex items-center justify-between"
                        data-aos="fade-up"
                        data-aos-delay={400 + (idx * 100)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-white rounded-lg border border-slate-200/80 text-[#087FC1] group-hover:bg-blue-50 transition-colors shrink-0 shadow-2xs">
                            <FaLaptopCode className="text-base" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors line-clamp-1">
                              {c.title}
                            </h4>
                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              {c.duration || 'Structured Track'} • {c.level || 'Intermediate'}
                            </span>
                          </div>
                        </div>
                        <FaArrowRight className="text-xs text-slate-400 group-hover:text-[#087FC1] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </Link>
                    ))
                  ) : (
                    <div className="text-center text-xs text-slate-500 py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      <FaLayerGroup className="mx-auto text-2xl text-slate-300 mb-2" />
                      Published courses will appear here dynamically.
                    </div>
                  )}
                </div>

                {/* Status Footer Strip */}
                <div className="bg-[#0B152C] rounded-xl p-3.5 text-xs text-slate-300 flex items-center justify-between shadow-xs">
                  <span className="font-semibold text-slate-200">Classroom & Online Training</span>
                  <span className="text-[10px] font-bold bg-[#087FC1] text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
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

