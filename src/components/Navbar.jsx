import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes, FaPaperPlane, FaBookOpen } from 'react-icons/fa';
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

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 ${
      isScrolled ? 'shadow-sm py-3' : 'py-4'
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
              className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                location.pathname === '/' ? 'text-blue-700 font-bold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                location.pathname === '/about' ? 'text-blue-700 font-bold' : 'text-slate-700'
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
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-blue-700 ${
                  location.pathname.startsWith('/courses') ? 'text-blue-700 font-bold' : 'text-slate-700'
                }`}
              >
                Courses
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isCourseDropdownOpen ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
              </Link>

              {/* Dropdown Menu */}
              {isCourseDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FaBookOpen className="text-blue-700" /> Training Programs
                    </span>
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                      {coursesList.length} Available
                    </span>
                  </div>
                  
                  <div className="max-h-72 overflow-y-auto py-1">
                    {coursesList.length > 0 ? (
                      coursesList.map((course) => (
                        <Link
                          key={course._id || course.slug}
                          to={`/courses/${course.slug}`}
                          className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                        >
                          <span className="font-medium line-clamp-1">{course.title}</span>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-medium whitespace-nowrap ml-2">
                            {course.duration || 'Flexible'}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <div className="px-3 py-4 text-center text-xs text-slate-500">
                        No published courses available.
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-100 mt-1 pt-2 px-1">
                    <Link
                      to="/courses"
                      className="block text-center text-xs text-blue-700 hover:text-blue-800 font-bold py-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      View All Programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>


            <Link 
              to="/placement" 
              className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                location.pathname === '/placement' ? 'text-blue-700 font-bold' : 'text-slate-700'
              }`}
            >
              Placement Assistance
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                location.pathname === '/contact' ? 'text-blue-700 font-bold' : 'text-slate-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white bg-[#087FC1] hover:bg-[#075A9C] px-5 py-2.5 rounded-lg shadow-sm transition-all"
            >
              <FaPaperPlane className="text-xs text-blue-200" />
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-700 focus:outline-none"
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
              className="text-base font-semibold text-slate-800 hover:text-blue-700 px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base font-semibold text-slate-800 hover:text-blue-700 px-2 py-1"
            >
              About Us
            </Link>
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase px-2">Courses</div>
              {coursesList.map((c) => (
                <Link
                  key={c._id || c.slug}
                  to={`/courses/${c.slug}`}
                  className="block text-sm text-slate-600 hover:text-blue-700 pl-4 py-1.5"
                >
                  {c.title}
                </Link>
              ))}
            </div>

            <Link 
              to="/placement" 
              className="text-base font-semibold text-slate-800 hover:text-blue-700 px-2 py-1"
            >
              Placement Assistance
            </Link>
            <Link 
              to="/contact" 
              className="text-base font-semibold text-slate-800 hover:text-blue-700 px-2 py-1"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              to="/enquiry"
              className="block w-full text-center text-xs uppercase tracking-wider font-bold text-white bg-[#087FC1] hover:bg-[#075A9C] py-3 rounded-lg shadow-sm"
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

