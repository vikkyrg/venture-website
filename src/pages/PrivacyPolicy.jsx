import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicy = () => {
  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6 my-6">
          <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last updated: October 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h3 className="text-base font-bold text-slate-900">1. Information Collection</h3>
            <p>Venture Soft collects personal details such as name, email address, phone number, and academic background strictly for course counseling, batch scheduling, and learning portal access.</p>

            <h3 className="text-base font-bold text-slate-900">2. Data Usage</h3>
            <p>Your data is strictly utilized to process course enquiries, send course updates, and provide academic support. We do not sell or rent personal information to third parties.</p>

            <h3 className="text-base font-bold text-slate-900">3. Security</h3>
            <p>We implement industry-standard encryption protocols and secure database access controls to safeguard your data against unauthorized access.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
