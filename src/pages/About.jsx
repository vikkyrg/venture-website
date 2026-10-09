import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { FaCheckCircle, FaLightbulb, FaBullseye, FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Branded Hero Banner */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#087FC4]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="mt-4 max-w-3xl" data-aos="fade-up">
            <span className="text-xs font-bold text-[#087FC4] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE7F5] inline-flex items-center gap-1.5 shadow-2xs mb-4">
              <FaGraduationCap className="text-xs text-[#087FC4]" /> Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] tracking-tight leading-tight">
              Empowering Future <span className="text-[#087FC4]">Technology Leaders</span>
            </h1>
            <p className="text-[#52647E] text-base sm:text-lg mt-4 leading-relaxed font-normal">
              VentureSoft is a premier corporate technology training institute dedicated to bridging the gap between academic education and modern enterprise engineering requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Split Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:shadow-xl hover:border-[#087FC4] transition-all duration-300 group hover:-translate-y-1" data-aos="fade-right">
            <div className="p-3.5 bg-[#EEF6FF] rounded-xl inline-block border border-[#DCE7F5] text-[#087FC4] text-2xl group-hover:bg-[#087FC4] group-hover:text-white transition-colors shadow-2xs mb-5">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors mb-3">Our Mission</h3>
            <p className="text-sm text-[#52647E] leading-relaxed font-normal">
              To deliver practical, high-impact, industry-aligned corporate IT training, equipping software engineers and technical professionals with real-world problem-solving capabilities in enterprise technology.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:shadow-xl hover:border-[#087FC4] transition-all duration-300 group hover:-translate-y-1" data-aos="fade-left">
            <div className="p-3.5 bg-[#EEF6FF] rounded-xl inline-block border border-[#DCE7F5] text-[#087FC4] text-2xl group-hover:bg-[#087FC4] group-hover:text-white transition-colors shadow-2xs mb-5">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-bold text-[#101A32] group-hover:text-[#087FC4] transition-colors mb-3">Our Philosophy</h3>
            <p className="text-sm text-[#52647E] leading-relaxed font-normal">
              We believe in learning by doing. Every topic in our curriculum is backed by hands-on scenario labs, practical terminal executions, and production-level project architectures.
            </p>
          </div>

        </div>
      </section>

      {/* Deep Navy Technical Differentiators Section */}
      <section className="py-16 lg:py-20 bg-[#101A32] text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#087FC4]/15 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-dots-light opacity-20 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-800/60 inline-block shadow-sm mb-3">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Training Differentiators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dynamic API Syllabi", desc: "Curriculum managed directly by lead instructors via MongoDB CMS." },
              { title: "Practitioner Mentors", desc: "Trainers with active hands-on experience in enterprise cloud environments." },
              { title: "Scenario-Driven Labs", desc: "Simulated incident response, log analytics, and K8s deployment pipelines." },
              { title: "Career Acceleration", desc: "Genuine guidance on technical interviews, profile optimization, and resume creation." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 shadow-md hover:border-[#087FC4] transition-all duration-300 hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="p-2.5 bg-slate-800 rounded-xl inline-block border border-slate-700 shadow-2xs group-hover:bg-[#087FC4] group-hover:text-white transition-colors">
                  <FaCheckCircle className="text-[#38BDF8] group-hover:text-white text-xl" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA Section */}
      <CTASection />
    </main>
  );
};

export default About;

