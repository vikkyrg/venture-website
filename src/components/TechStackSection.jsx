import { FaDocker, FaAws, FaLinux, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiKubernetes, SiPrometheus, SiGrafana, SiJenkins, SiTerraform, SiAnsible } from 'react-icons/si';

const TechStackSection = () => {
  const technologies = [
    { name: "Docker", category: "Containerization", icon: <FaDocker className="text-sky-500" /> },
    { name: "Kubernetes", category: "Orchestration", icon: <SiKubernetes className="text-blue-600" /> },
    { name: "AWS Enterprise", category: "Cloud Architecture", icon: <FaAws className="text-amber-500" /> },
    { name: "Prometheus", category: "AIOps Monitoring", icon: <SiPrometheus className="text-orange-500" /> },
    { name: "Grafana", category: "Observability", icon: <SiGrafana className="text-amber-600" /> },
    { name: "Linux Bash", category: "Shell Automation", icon: <FaLinux className="text-slate-800" /> },
    { name: "Jenkins", category: "CI/CD Pipeline", icon: <SiJenkins className="text-red-500" /> },
    { name: "Python ML & AIOps", category: "AI Operations", icon: <FaPython className="text-blue-500" /> },
    { name: "Terraform", category: "Infrastructure as Code", icon: <SiTerraform className="text-purple-600" /> },
    { name: "Git & GitHub", category: "Version Control", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Ansible", category: "Configuration Mgmt", icon: <SiAnsible className="text-red-600" /> }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-block shadow-2xs">
            Core Technology Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Enterprise Tools & Technologies Covered
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Master high-demand tools and platforms required across modern engineering teams.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-5xl mx-auto">
          {technologies.map((t, idx) => (
            <div 
              key={idx} 
              className="px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-[#087FC1]/60 hover:bg-white hover:shadow-md transition-all duration-300 flex items-center gap-3 shadow-2xs group cursor-default"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="text-lg p-1.5 bg-white rounded-lg border border-slate-200/60 shadow-2xs group-hover:scale-110 transition-transform">
                {t.icon}
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-slate-900 block group-hover:text-[#087FC1] transition-colors">{t.name}</span>
                <span className="text-xs text-slate-500 font-medium block">{t.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
