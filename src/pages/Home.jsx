import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import LearnerPath from '../components/LearnerPath';
import CourseGrid from '../components/CourseGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import LearningJourney from '../components/LearningJourney';
import TrainingModes from '../components/TrainingModes';
import CareerSupport from '../components/CareerSupport';
import TechStackSection from '../components/TechStackSection';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
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
    <main className="bg-slate-50 text-slate-900">
      <Hero />
      <StatsSection />
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
              Structured Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Explore Our Industry Training Programs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Comprehensive courses stored in MongoDB. Select any track to explore complete module and topic breakdowns.
            </p>
          </div>

          <CourseGrid courses={courses} loading={loading} error={error} />
        </div>
      </section>

      <LearnerPath />
      <WhyChooseUs />
      <LearningJourney />
      <TechStackSection />
      <TrainingModes />
      <CareerSupport />
      <FAQ />
      <CTASection />
    </main>
  );
};

export default Home;
