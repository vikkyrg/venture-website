import { Link } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaTwitter, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg">
              <img src={logo} alt="Venture Soft" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Venture Soft is a premier technology training institute providing industry-focused programs in AIOps, AWS Cloud Solutions, DevOps Engineering, and Linux Automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500 transition-colors text-xs">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500 transition-colors text-xs">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500 transition-colors text-xs">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500 transition-colors text-xs">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-teal-400 transition-colors">All Programs</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/enquiry" className="hover:text-teal-400 transition-colors">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Column 3: Courses Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/courses/aiops" className="hover:text-teal-400 transition-colors">AIOps Mastery</Link></li>
              <li><Link to="/courses/aws" className="hover:text-teal-400 transition-colors">AWS Solutions</Link></li>
              <li><Link to="/courses/devops" className="hover:text-teal-400 transition-colors">DevOps & K8s</Link></li>
              <li><Link to="/courses/shell-scripting" className="hover:text-teal-400 transition-colors">Linux Shell Scripting</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span>Venture Soft Tech Campus, Electronic City, Bangalore</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-teal-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-teal-400 flex-shrink-0" />
                <span>contact@venturesoft.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Venture Soft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
