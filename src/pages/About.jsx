import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { FaCheckCircle, FaLightbulb, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero Banner */}
        <div className="py-10 border-b border-slate-200">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
            About Venture Soft
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Empowering Future Technology Leaders
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl mt-3 leading-relaxed">
            Venture Soft is a premier technology training and career acceleration institute dedicated to bridging the gap between academic theory and enterprise engineering requirements.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="p-3 bg-blue-50 rounded-xl inline-block border border-blue-100 text-blue-700 text-2xl">
              <FaBullseye />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver practical, high-impact, industry-aligned training in AIOps, Cloud Engineering, DevOps, and Systems Automation, equipping engineers with real-world problem-solving capabilities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
            <div className="p-3 bg-blue-50 rounded-xl inline-block border border-blue-100 text-blue-700 text-2xl">
              <FaLightbulb />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Our Philosophy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We believe in learning by doing. Every topic in our curriculum is backed by hands-on scenario labs, multi-cloud setups, and production-level script execution.
            </p>
          </div>
        </div>

        {/* Key Values */}
        <div className="pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Pillars of Our Training</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "MongoDB Dynamic Syllabi", desc: "Curriculum managed directly by lead instructors via secure admin dashboard." },
              { title: "Practitioner Mentors", desc: "Trainers with active hands-on experience in enterprise cloud environments." },
              { title: "Scenario-Driven Labs", desc: "Simulated incident response, log analytics, and K8s deployment pipelines." },
              { title: "Career Acceleration", desc: "Genuine guidance on technical interviews, profile optimization, and resume creation." }
            ].map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <FaCheckCircle className="text-blue-700 text-lg" />
                <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
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
