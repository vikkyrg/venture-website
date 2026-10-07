const LearningJourney = () => {
  const steps = [
    { number: "01", title: "Select Track", desc: "Choose your primary focus: AIOps, AWS, DevOps, or Shell Scripting." },
    { number: "02", title: "Master Fundamentals", desc: "Build solid foundations in Linux, cloud architecture, and automation." },
    { number: "03", title: "Real-world Scenario Labs", desc: "Configure multi-tier cloud environments and container clusters." },
    { number: "04", title: "Build Capstone Projects", desc: "Complete end-to-end projects with production GitOps pipelines." },
    { number: "05", title: "Career & Interview Prep", desc: "Mock technical interviews and resume optimization for top roles." },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
            Structured Stepper
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Your Learning & Mastery Journey
          </h2>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between hover:border-teal-500/50 shadow-sm transition-all">
              <div>
                <span className="text-3xl font-black text-teal-700/20 font-mono">{s.number}</span>
                <h4 className="text-base font-bold text-slate-900 mt-2">{s.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
