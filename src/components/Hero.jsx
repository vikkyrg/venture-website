import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaLaptopCode, FaCloud, FaBrain, FaTerminal, FaGraduationCap } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <FaGraduationCap className="text-teal-700 text-sm" />
              Professional Technology Education
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Advance Your Career in <br />
              <span className="text-teal-700">
                Cloud, DevOps & AIOps
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Venture Soft provides structured, hands-on training programs designed by industry experts. Master enterprise-grade technologies with real-world project labs and career mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm tracking-wide shadow transition-all transform hover:-translate-y-0.5"
              >
                Explore All Programs
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm shadow-sm transition-all"
              >
                Talk to a Career Advisor
              </Link>
            </div>

            {/* Trust Bulletins */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Hands-on Live Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Industry-Aligned Syllabi</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Career Placement Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Training Pillars</span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">Venture Soft Institute</span>
              </div>

              {/* Visual Tech Grid */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-all">
                  <FaBrain className="text-3xl text-teal-700 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">AIOps Mastery</h4>
                  <p className="text-xs text-slate-500 mt-1">ML anomaly detection & incident correlation</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-all">
                  <FaCloud className="text-3xl text-blue-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">AWS Cloud Architect</h4>
                  <p className="text-xs text-slate-500 mt-1">EC2, VPC, IAM, S3 & High Availability</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-all">
                  <FaLaptopCode className="text-3xl text-indigo-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">DevOps & K8s</h4>
                  <p className="text-xs text-slate-500 mt-1">Docker, CI/CD, Terraform & Ansible</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition-all">
                  <FaTerminal className="text-3xl text-amber-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">Linux Automation</h4>
                  <p className="text-xs text-slate-500 mt-1">Bash, SED, AWK & process scripting</p>
                </div>
              </div>

              {/* Status Code Strip */}
              <div className="bg-slate-900 rounded-xl p-3 text-xs text-slate-200 flex items-center justify-between font-mono">
                <span className="text-teal-400">Classroom & Live Online Sessions</span>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-semibold uppercase">Enrollment Open</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
