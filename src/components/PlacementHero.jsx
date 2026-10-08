import { Link } from 'react-router-dom';
import { FaPaperPlane, FaBookOpen, FaCheckCircle, FaLaptopCode, FaUserCheck, FaProjectDiagram } from 'react-icons/fa';

const PlacementHero = () => {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-16 sm:py-24 border-b border-slate-200">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-md border border-blue-200 shadow-sm">
              <FaUserCheck className="text-[#087FC1] text-xs" /> CAREER & PLACEMENT SUPPORT
            </span>

            <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Skills.<br />
              <span className="text-[#087FC1] inline-block" data-aos="zoom-in" data-aos-delay="400">Prepare for Interviews.</span><br />
              Move Toward Your Career.
            </h1>

            <p data-aos="fade-up" data-aos-delay="300" className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Venture Soft provides structured technical training, live project exposure, resume crafting, and technical mock interview preparation to bridge the gap between classroom learning and hiring requirements.
            </p>

            {/* Action CTAs */}
            <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#087FC1] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <FaBookOpen className="text-xs arrow-icon" />
                Explore Courses
              </Link>
              <Link
                to="/enquiry"
                className="btn-animate w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-sm transition-all"
              >
                <FaPaperPlane className="text-xs text-[#087FC1] arrow-icon" />
                Talk to Our Team
              </Link>
            </div>

          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
            <div className="relative bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 hover:shadow-2xl transition-shadow duration-500">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#087FC1]">
                    <FaLaptopCode className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Engineering Career Track</h3>
                    <span className="text-[11px] text-slate-500">Practitioner Enablement Model</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Active Support
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-[#087FC1] text-xs shadow-sm border border-slate-100">
                      <FaProjectDiagram />
                    </div>
                    <span className="text-xs font-semibold text-slate-800">Capstones & Scenario Labs</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700">Included</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-[#087FC1] text-xs shadow-sm border border-slate-100">
                      <FaUserCheck />
                    </div>
                    <span className="text-xs font-semibold text-slate-800">Technical Interview Scenarios</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700">Included</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-[#087FC1] text-xs shadow-sm border border-slate-100">
                      <FaPaperPlane />
                    </div>
                    <span className="text-xs font-semibold text-slate-800">Placement & Counseling</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700">Assistance</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <p className="text-xs text-blue-800 font-medium">
                  "Focused on building verifiable technical skills that speak for themselves in interviews."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default PlacementHero;
