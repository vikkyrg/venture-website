import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { FaCheckCircle, FaLightbulb, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <main className="py-8 bg-slate-50/70 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero Banner */}
        <div className="py-10 border-b border-slate-200/80 relative" data-aos="fade-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <span className="text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-block shadow-2xs">
            About VentureSoft
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Empowering Future Technology Leaders
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-normal">
            VentureSoft is a premier technology training and career acceleration institute dedicated to bridging the gap between academic theory and enterprise engineering requirements.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 py-12 lg:py-16">
          <div className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#087FC1]/40 transition-all duration-300 group hover:-translate-y-1" data-aos="fade-right" data-aos-delay="100">
            <div className="p-3.5 bg-slate-50 rounded-xl inline-block border border-slate-200/80 text-[#087FC1] text-2xl group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-2xs mb-4">
              <FaBullseye />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver practical, high-impact, industry-aligned training in AIOps, Cloud Engineering, DevOps, and Systems Automation, equipping engineers with real-world problem-solving capabilities.
            </p>
          </div>

          <div className="p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#087FC1]/40 transition-all duration-300 group hover:-translate-y-1" data-aos="fade-left" data-aos-delay="200">
            <div className="p-3.5 bg-slate-50 rounded-xl inline-block border border-slate-200/80 text-[#087FC1] text-2xl group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-2xs mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors mb-3">Our Philosophy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe in learning by doing. Every topic in our curriculum is backed by hands-on scenario labs, multi-cloud setups, and production-level script execution.
            </p>
          </div>
        </div>

        {/* Key Values */}
        <div className="pb-16 lg:pb-24">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight" data-aos="fade-up">Core Pillars of Our Training</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "MongoDB Dynamic Syllabi", desc: "Curriculum managed directly by lead instructors via secure admin dashboard." },
              { title: "Practitioner Mentors", desc: "Trainers with active hands-on experience in enterprise cloud environments." },
              { title: "Scenario-Driven Labs", desc: "Simulated incident response, log analytics, and K8s deployment pipelines." },
              { title: "Career Acceleration", desc: "Genuine guidance on technical interviews, profile optimization, and resume creation." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-xs hover:shadow-lg hover:border-[#087FC1]/40 transition-all duration-300 hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="p-2.5 bg-slate-50 rounded-lg inline-block border border-slate-200/80 shadow-2xs group-hover:bg-blue-50 transition-colors">
                  <FaCheckCircle className="text-[#087FC1] text-xl" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#087FC1] transition-colors">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
    </main>
  );
};

export default About;
