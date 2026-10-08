import PlacementHero from '../components/PlacementHero';
import BenefitStrip from '../components/BenefitStrip';
import StatsSection from '../components/StatsSection';
import PlacementMethodology from '../components/PlacementMethodology';
import RealWorldTraining from '../components/RealWorldTraining';
import Testimonials from '../components/Testimonials';
import PlacementFAQ from '../components/PlacementFAQ';
import PlacementCTA from '../components/PlacementCTA';

const Placement = () => {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      
      {/* 1. Page Hero */}
      <PlacementHero />

      {/* 2. Benefit Strip */}
      <div data-aos="fade-up">
        <BenefitStrip />
      </div>

      {/* 3. Career Statistics / Impact Section */}
      <div data-aos="fade-up">
        <StatsSection />
      </div>

      {/* 4. Methodology ("How We Help") */}
      <div data-aos="fade-up">
        <PlacementMethodology />
      </div>

      {/* 5. Real-World Training Section */}
      <div data-aos="fade-up">
        <RealWorldTraining />
      </div>

      {/* 6. Learner Testimonials */}
      <div data-aos="fade-up">
        <Testimonials />
      </div>

      {/* 9. Placement FAQ */}
      <div data-aos="fade-up">
        <PlacementFAQ />
      </div>

      {/* 10. Placement CTA */}
      <div data-aos="fade-up">
        <PlacementCTA />
      </div>

    </main>
  );
};

export default Placement;
