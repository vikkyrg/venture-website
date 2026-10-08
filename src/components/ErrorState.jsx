import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaRedo, FaArrowLeft } from 'react-icons/fa';

const ErrorState = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <div className="max-w-lg mx-auto my-12 p-8 rounded-2xl bg-white border border-rose-200 text-center space-y-4 shadow-sm">
      <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mx-auto text-xl border border-rose-100">
        <FaExclamationTriangle />
      </div>
      <h3 className="text-lg font-bold text-slate-900">Unable to load content</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{message}</p>
      
      <div className="flex items-center justify-center gap-3 pt-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow transition-colors"
          >
            <FaRedo className="text-[10px]" />
            Retry
          </button>
        )}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-colors"
        >
          <FaArrowLeft className="text-[10px]" />
          Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default ErrorState;
