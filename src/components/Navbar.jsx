import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaPaperPlane } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsCourseDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsCourseDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCourseDropdownOpen(false);
  }, [location]);

  const coursesList = [
    { title: 'AIOps Mastery', slug: 'aiops', tag: 'High Demand' },
    { title: 'AWS Cloud Solutions', slug: 'aws', tag: 'Popular' },
    { title: 'DevOps & Kubernetes', slug: 'devops', tag: 'Enterprise' },
    { title: 'Linux Shell Scripting', slug: 'shell-scripting', tag: 'Essential' },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 ${
      isScrolled ? 'shadow-md py-3' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Venture Soft Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors hover:text-teal-700 ${
                location.pathname === '/' ? 'text-teal-700 font-bold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors hover:text-teal-700 ${
                location.pathname === '/about' ? 'text-teal-700 font-bold' : 'text-slate-700'
              }`}
            >
              About Us
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/courses"
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-teal-700 ${
                  location.pathname.startsWith('/courses') ? 'text-teal-700 font-bold' : 'text-slate-700'
                }`}
              >
                Courses
                <FaChevronDown className={`text-xs transition-transform duration-200 ${isCourseDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'}`} />
              </Link>

              {/* Dropdown Menu */}
              {isCourseDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
                    Training Programs
                  </div>
                  {coursesList.map((course) => (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors"
                    >
                      <span className="font-medium">{course.title}</span>
                      <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-md border border-teal-200 font-semibold">
                        {course.tag}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      to="/courses"
                      className="block text-center text-xs text-teal-700 hover:text-teal-800 font-bold py-1.5 hover:underline"
                    >
                      View All Courses →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors hover:text-teal-700 ${
                location.pathname === '/contact' ? 'text-teal-700 font-bold' : 'text-slate-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-teal-700 hover:bg-teal-800 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <FaPaperPlane className="text-xs" />
              ENQUIRE NOW
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-base font-semibold text-slate-800 hover:text-teal-700 px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base font-semibold text-slate-800 hover:text-teal-700 px-2 py-1"
            >
              About Us
            </Link>
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase px-2">Courses</div>
              {coursesList.map((c) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  className="block text-sm text-slate-600 hover:text-teal-700 pl-4 py-1.5"
                >
                  {c.title}
                </Link>
              ))}
            </div>
            <Link 
              to="/contact" 
              className="text-base font-semibold text-slate-800 hover:text-teal-700 px-2 py-1"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              to="/enquiry"
              className="block w-full text-center text-xs uppercase tracking-wider font-bold text-white bg-teal-700 hover:bg-teal-800 py-3 rounded-lg shadow"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
