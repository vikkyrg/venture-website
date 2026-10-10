import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { 
  LuGraduationCap, 
  LuTarget, 
  LuLightbulb, 
  LuCircleCheck, 
  LuBookOpen, 
  LuLaptop, 
  LuCode, 
  LuCloud, 
  LuTerminal, 
  LuServer, 
  LuCpu, 
  LuShield, 
  LuWrench, 
  LuTrendingUp,
  LuArrowRight
} from 'react-icons/lu';

const About = () => {
  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* 1. Hero Section: Fixed Scrolling Background with full-width photograph & dark overlay */}
      <section 
        className="relative py-14 lg:py-20 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 20, 43, 0.68), rgba(7, 20, 43, 0.68)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop")`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'About Us' }]} variant="dark" />

          <div className="mt-4 max-w-3xl" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <LuGraduationCap className="text-base text-cyan-300" />
              <span>Corporate Profile</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.16]">
              Empowering Future <span className="text-[#38BDF8]">Technology Leaders</span>
            </h1>
            
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed font-normal max-w-2xl">
              VentureSoft is a premier corporate technology training institute dedicated to bridging the gap between academic education and modern enterprise engineering requirements.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link 
                to="/courses" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#087FC4] hover:bg-[#075A9C] text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Explore Courses</span>
                <LuArrowRight className="text-base" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm sm:text-base shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission and Philosophy Section */}
      <section className="py-12 lg:py-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Company Overview intro */}
        <div className="mb-8 max-w-2xl">
          <span className="text-xs sm:text-sm font-bold text-[#087FC4] uppercase tracking-wider">Company Identity</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A32] tracking-tight mt-1">
            Driven by Technical Excellence & Practice
          </h2>
          <p className="text-sm sm:text-base text-[#52647E] mt-2 leading-relaxed">
            VentureSoft focuses on enterprise technology training, prioritizing hands-on execution and career readiness over generic theory.
          </p>
        </div>

        {/* 2-Column Cards for Mission & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE7F5] shadow-2xs hover:shadow-md hover:border-[#087FC4]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#DCE7F5] flex items-center justify-center text-[#087FC4] mb-4">
                <LuTarget className="text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101A32] mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#52647E] leading-relaxed">
                To deliver practical, high-impact, industry-aligned corporate IT training, equipping software engineers and technical professionals with real-world problem-solving capabilities in enterprise technology.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DCE7F5] shadow-2xs hover:shadow-md hover:border-[#087FC4]/50 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#DCE7F5] flex items-center justify-center text-[#087FC4] mb-4">
                <LuLightbulb className="text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#101A32] mb-2">Our Philosophy</h3>
              <p className="text-sm sm:text-base text-[#52647E] leading-relaxed">
                We believe in learning by doing. Every topic in our curriculum is backed by hands-on scenario labs, practical terminal executions, and production-level project architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Help Professionals Grow Section */}
      <section className="py-12 lg:py-16 bg-[#EEF6FF]/60 border-y border-[#DCE7F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A32] tracking-tight">
              How We Help Professionals Grow
            </h2>
            <p className="text-sm sm:text-base text-[#52647E] mt-2 leading-relaxed">
              Our structured approach prepares software engineers and IT specialists for production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#DCE7F5] shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#DCE7F5] flex items-center justify-center text-[#087FC4] mb-4">
                <LuWrench className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#101A32] mb-2">Industry-Relevant Skills</h3>
              <p className="text-sm text-[#52647E] leading-relaxed">
                Our curriculum aligns with current enterprise standards, covering high-demand areas like AWS Cloud, DevOps pipelines, Container Orchestration, and MLOps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DCE7F5] shadow-2xs hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#DCE7F5] flex items-center justify-center text-[#087FC4] mb-4">
                <LuLaptop className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#101A32] mb-2">Hands-on Practical Learning</h3>
              <p className="text-sm text-[#52647E] leading-relaxed">
                Learners work directly inside simulated production environments, writing deployment scripts, debugging cloud architecture, and executing live terminal labs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DCE7F5] shadow-2xs hover:shadow-md transition-all md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#DCE7F5] flex items-center justify-center text-[#087FC4] mb-4">
                <LuTrendingUp className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#101A32] mb-2">Career Development</h3>
              <p className="text-sm text-[#52647E] leading-relaxed">
                We provide tailored technical mentorship, real-world portfolio architecture guidance, and resume alignment to help engineers excel in technical interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Training Differentiators (Dark Navy Section) */}
      <section className="py-12 lg:py-16 bg-[#101A32] text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Technical Training Differentiators
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              We focus on job-ready practical capabilities rather than passive theoretical slide presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <LuBookOpen />, title: "Dynamic API Syllabi", desc: "Curriculum updated regularly to match active technology shifts." },
              { icon: <LuLaptop />, title: "Practitioner Mentors", desc: "Trainers with active hands-on experience in enterprise environments." },
              { icon: <LuTerminal />, title: "Scenario-Driven Labs", desc: "Simulated incident response and automated deployment pipelines." },
              { icon: <LuGraduationCap />, title: "Career Acceleration", desc: "Genuine guidance on technical interviews and profile optimization." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-[#087FC4] transition-all duration-200 group"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#087FC4] group-hover:text-white transition-colors mb-4">
                  <div className="text-lg">{v.icon}</div>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">{v.title}</h4>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Focus Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A32] tracking-tight">Our Technology Focus</h2>
            <p className="text-sm sm:text-base text-[#52647E] mt-2 leading-relaxed">
              We specialize in the high-demand disciplines driving modern enterprise engineering.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <LuCloud />, name: "AWS Cloud" },
              { icon: <LuServer />, name: "DevOps & K8s" },
              { icon: <LuCpu />, name: "AI / MLOps" },
              { icon: <LuTerminal />, name: "Linux & Shell" },
              { icon: <LuCode />, name: "Python Automation" },
              { icon: <LuShield />, name: "SecOps" }
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 bg-[#F8FAFC] rounded-xl border border-[#DCE7F5] hover:border-[#087FC4] hover:shadow-xs transition-all group">
                <div className="text-3xl text-[#087FC4] mb-2.5 group-hover:scale-105 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#101A32] text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Commitment Section */}
      <section className="py-12 lg:py-14 bg-gradient-to-r from-[#087FC4] to-[#1769FF] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LuCircleCheck className="text-4xl mx-auto mb-4 text-blue-200" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Our Commitment</h2>
          <p className="text-sm sm:text-base text-blue-50 leading-relaxed">
            We are committed to delivering continuous learning and verifiable practical skills. 
            When you train with VentureSoft, you aren't just memorizing syntax—you're adopting professional development practices that maintain your industry relevance long after graduation.
          </p>
        </div>
      </section>

      {/* 7. Action CTA Section */}
      <CTASection />
    </main>
  );
};

export default About;

