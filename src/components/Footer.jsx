import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBook, FaBriefcase, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { getCourses } from '../services/api';

const Footer = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses(res.data || []);
      } catch (err) {
        console.error('Error fetching courses in Footer', err);
      }
    };
    fetchPublishedCourses();
  }, []);

  return (
    <footer className="bg-[#0b1220] border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-lg shadow-sm">
              <img src={logo} alt="Venture Soft" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Venture Soft is a premier corporate technology training institute providing industry-focused learning programs, hands-on practitioner mentorship, and real-world project skills to accelerate software careers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors text-xs">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors text-xs">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors text-xs">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-colors text-xs">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Dynamic Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <FaBook className="text-[#087FC1] text-xs" /> Programs
            </h4>
            <ul className="space-y-2.5 text-xs font-medium max-h-56 overflow-y-auto pr-1">
              {courses.length > 0 ? (
                courses.map((c) => (
                  <li key={c._id || c.slug}>
                    <Link to={`/courses/${c.slug}`} className="hover:text-blue-400 transition-colors line-clamp-1">
                      {c.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-slate-500 italic">No published programs</li>
              )}
            </ul>
          </div>

          {/* Career & Resources */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-2 flex items-center gap-1.5">
                <FaBriefcase className="text-[#087FC1] text-xs" /> Career
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><Link to="/placement" className="hover:text-blue-400 transition-colors">Placement Assistance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-2 flex items-center gap-1.5">
                <FaShieldAlt className="text-[#087FC1] text-xs" /> Resources
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#087FC1] mt-0.5 flex-shrink-0" />
                <span>Venture Soft Tech Campus, Electronic City, Bangalore</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-[#087FC1] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#087FC1] flex-shrink-0" />
                <span>contact@venturesoft.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Venture Soft. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
