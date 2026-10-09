import { Link } from 'react-router-dom';
import { FaLaptop, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

const TrainingModes = () => {
  const modes = [
    {
      icon: <FaLaptop className="text-blue-700 text-2xl" />,
      title: "Live Interactive Online",
      desc: "Attend instructor-led sessions from anywhere with live code sharing, Q&A, and cloud lab instances.",
      cta: "Enquire Live Batches"
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
      title: "Classroom Training",
      desc: "In-person intensive training at our Bangalore tech campus with dedicated hardware labs.",
      cta: "View Campus Batches"
    },
    {
      icon: <FaBuilding className="text-indigo-600 text-2xl" />,
      title: "Corporate Upskilling",
      desc: "Tailored training solutions for enterprise engineering teams adapting to cloud & AIOps.",
      cta: "Corporate Enquiry"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
            Delivery Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Choose How You Want To Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-500/50 shadow-sm transition-all">
              <div>
                <div className="p-3.5 bg-slate-50 rounded-xl inline-block border border-slate-200 mb-6 shadow-sm">
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to="/contact" className="text-xs font-bold text-blue-700 hover:text-blue-800">
                  {m.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingModes;
