const TechStackSection = () => {
  const technologies = [
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS EC2", category: "Cloud" },
    { name: "AWS VPC", category: "Cloud" },
    { name: "Prometheus", category: "AIOps" },
    { name: "Grafana", category: "AIOps" },
    { name: "Linux Bash", category: "Shell" },
    { name: "SED & AWK", category: "Shell" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Python ML", category: "AIOps" },
    { name: "Terraform", category: "IaC" },
    { name: "Git", category: "DevOps" }
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
          Core Technologies Covered Across Our Curriculum
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {technologies.map((t, idx) => (
            <div key={idx} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:border-teal-500/50 transition-colors flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-700" />
              <span className="text-xs font-bold text-slate-800">{t.name}</span>
              <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-semibold">{t.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
