import Breadcrumb from '../components/Breadcrumb';

const TermsConditions = () => {
  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

        <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6 my-6">
          <h1 className="text-3xl font-extrabold text-slate-900">Terms & Conditions</h1>
          <p className="text-xs text-slate-500">Last updated: October 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h3 className="text-base font-bold text-slate-900">1. Course Enrollment</h3>
            <p>Enrollment in Venture Soft courses grants you access to live sessions, lab environments, and course documentation for personal learning purposes.</p>

            <h3 className="text-base font-bold text-slate-900">2. Intellectual Property</h3>
            <p>All curriculum materials, lab guides, slide decks, and code examples provided during training are owned by Venture Soft and protected by copyright law.</p>

            <h3 className="text-base font-bold text-slate-900">3. Code of Conduct</h3>
            <p>Learners are expected to participate respectfully during live classroom and online sessions. Any misuse of lab resources is strictly prohibited.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsConditions;
