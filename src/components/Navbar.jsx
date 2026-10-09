import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaBookOpen, FaAward } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { getCourses } from '../services/api';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [coursesList, setCoursesList] = useState([]);
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCourseDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses({ status: 'published' });
        const list = response.data || [];
        setCoursesList(list);
      } catch (err) {
        console.error('Failed to load courses for navbar:', err);
      }
    };
    fetchCourses();
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
      isScrolled ? 'shadow-md py-3' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#087FC4] rounded-lg p-1">
            <div className="relative flex items-center">
              <img 
                src={logo} 
                alt="VentureSoft Corporate Training" 
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive('/') && location.pathname === '/' 
                  ? 'bg-[#EEF6FF] text-[#087FC4]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#087FC4]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-[#EEF6FF] text-[#087FC4]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#087FC4]'
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
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive('/courses') 
                    ? 'bg-[#EEF6FF] text-[#087FC4]' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#087FC4]'
                }`}
              >
                Courses
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isCourseDropdownOpen ? 'rotate-180 text-[#087FC4]' : 'text-slate-400'}`} />
              </Link>

              {/* Dropdown Menu */}
              {isCourseDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-white border border-slate-200/90 rounded-2xl shadow-xl p-3 z-50 dropdown-animate">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FaBookOpen className="text-[#087FC4]" /> Training Programs
                    </span>
                    <span className="text-[10px] font-bold bg-blue-50 text-[#087FC4] px-2.5 py-0.5 rounded-full border border-blue-200/70">
                      {coursesList.length} Tracks
                    </span>
                  </div>
                  
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                    {coursesList.length > 0 ? (
                      coursesList.map((course) => (
                        <Link
                          key={course._id || course.slug}
                          to={`/courses/${course.slug}`}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#EEF6FF] hover:text-[#087FC4] transition-all group"
                        >
                          <span className="line-clamp-1">{course.title}</span>
                          <span className="text-[10px] bg-white text-slate-500 group-hover:text-[#087FC4] px-2 py-0.5 rounded border border-slate-200/80 font-medium whitespace-nowrap ml-2 shrink-0">
                            {course.duration || 'Flexible'}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <div className="px-3 py-4 text-center text-xs text-slate-500 italic">
                        No published courses available.
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      to="/courses"
                      className="block text-center text-xs text-[#087FC4] hover:text-[#075A9C] font-bold py-2 hover:bg-blue-50/70 rounded-xl transition-colors"
                    >
                      View All Programs Catalog →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/placement" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive('/placement') 
                  ? 'bg-[#EEF6FF] text-[#087FC4]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#087FC4]'
              }`}
            >
              Placement Assistance
            </Link>

            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'bg-[#EEF6FF] text-[#087FC4]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#087FC4]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-[#087FC4] focus:outline-none focus:ring-2 focus:ring-[#087FC4] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/' ? 'bg-blue-50 text-[#087FC4] font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/about' ? 'bg-blue-50 text-[#087FC4] font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>
            
            <div className="py-2 px-1 space-y-1.5 border-y border-slate-100 my-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">Course Catalog</div>
              {coursesList.map((c) => (
                <Link
                  key={c._id || c.slug}
                  to={`/courses/${c.slug}`}
                  className="block text-xs font-medium text-slate-700 hover:text-[#087FC4] hover:bg-blue-50/50 px-3 py-1.5 rounded-md transition-colors"
                >
                  • {c.title}
                </Link>
              ))}
            </div>

            <Link 
              to="/placement" 
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/placement' ? 'bg-blue-50 text-[#087FC4] font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Placement Assistance
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/contact' ? 'bg-blue-50 text-[#087FC4] font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact Us
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


