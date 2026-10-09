import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBook, FaBriefcase, FaGraduationCap, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
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
    <footer className="bg-[#101A32] relative border-t border-slate-800/80 text-slate-300 pt-16 pb-12 overflow-hidden">
      
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#087FC4] via-[#1769FF] to-sky-400" />
      
      {/* Background Decorative Ambient Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#087FC4]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#1769FF]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white px-3 py-2 rounded-xl shadow-md transition-transform hover:scale-105">
              <img src={logo} alt="VentureSoft Corporate Technology Training Institute" className="h-8 sm:h-9 w-auto object-contain" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-normal">
              VentureSoft is a premier corporate technology training institute providing industry-focused learning programs, practitioner mentorship, and real-world project skills to accelerate software engineering careers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#087FC4] hover:border-[#087FC4] transition-all text-xs shadow-xs">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all text-xs shadow-xs">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1769FF] hover:border-[#1769FF] transition-all text-xs shadow-xs">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all text-xs shadow-xs">
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
              <li><Link to="/" className="footer-link hover:text-[#38BDF8] transition-colors">Home</Link></li>
              <li><Link to="/about" className="footer-link hover:text-[#38BDF8] transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="footer-link hover:text-[#38BDF8] transition-colors">Training Catalog</Link></li>
              <li><Link to="/placement" className="footer-link hover:text-[#38BDF8] transition-colors">Placement Assistance</Link></li>
              <li><Link to="/contact" className="footer-link hover:text-[#38BDF8] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Dynamic Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <FaBook className="text-[#087FC4] text-xs" /> Flagship Programs
            </h4>
            <ul className="space-y-2.5 text-xs font-medium max-h-56 overflow-y-auto pr-2">
              {courses.length > 0 ? (
                courses.map((c) => (
                  <li key={c._id || c.slug}>
                    <Link to={`/courses/${c.slug}`} className="footer-link hover:text-[#38BDF8] transition-colors line-clamp-1">
                      {c.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-slate-500 italic">No published programs</li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Corporate Campus
            </h4>
            <ul className="space-y-3.5 text-xs font-medium">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#087FC4] text-sm mt-0.5 shrink-0" />
                <span className="text-slate-400 leading-relaxed">VentureSoft Tech Campus, Electronic City Phase 1, Bangalore 560100</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#087FC4] text-xs shrink-0" />
                <span className="text-slate-300 font-semibold">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#087FC4] text-xs shrink-0" />
                <span className="text-slate-300 font-semibold">contact@venturesoft.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} VentureSoft. All rights reserved. Corporate Technology Training Institute.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy-policy" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms-conditions" className="hover:text-[#38BDF8] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

