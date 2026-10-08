import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import CourseGrid from '../components/CourseGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import LearningJourney from '../components/LearningJourney';
import TechStackSection from '../components/TechStackSection';
import CareerSupport from '../components/CareerSupport';
import FAQ from '../components/FAQ';
import PlacementCTA from '../components/PlacementCTA';
import { getCourses } from '../services/api';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getCourses({ status: 'published' });
        setCourses(response.data || []);
      } catch (err) {
        console.error('Failed to load courses:', err);
        setError('Could not fetch courses from backend API server.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / Benefits Strip */}
      <StatsSection />

      {/* 3. Training Programs (Dynamic Courses from MongoDB API) */}
      <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-bold text-[#087FC1] uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-2xs inline-block">
              Structured Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Explore Our Training Programs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Select any technology program track to explore complete module and topic breakdowns.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <CourseGrid courses={courses} loading={loading} error={error} />
          </div>
        </div>
      </section>

      {/* 4. Why VentureSoft */}
      <WhyChooseUs />

      {/* 5. Learning Methodology */}
      <LearningJourney />

      {/* 6. Technology / Skills */}
      <TechStackSection />

      {/* 7. Learning Benefits */}
      <CareerSupport />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA */}
      <PlacementCTA />

    </main>
  );
};

export default Home;
