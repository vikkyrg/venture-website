import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import ModuleDetails from './pages/ModuleDetails';
import TopicDetails from './pages/TopicDetails';
import Placement from './pages/Placement';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter">
      {children}
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-back',
      offset: 100,
    });
  }, []);

  console.log('App loaded with Placement route');
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <div className="flex-1">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseSlug" element={<CourseDetails />} />
              <Route path="/courses/:courseSlug/module/:moduleSlug" element={<ModuleDetails />} />
              <Route path="/courses/:courseSlug/module/:moduleSlug/topic/:topicSlug" element={<TopicDetails />} />
              <Route path="/placement" element={<Placement />} />
              <Route path="/career-support" element={<Placement />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// force trigger vite hmr 
