import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="py-20 bg-slate-50 text-slate-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-5">
        <span className="text-8xl font-black text-slate-200">404</span>
        <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">The page you're looking for doesn't exist or may have been moved.</p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-700 text-white font-bold text-xs shadow-sm hover:bg-teal-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-sm hover:bg-slate-50 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
