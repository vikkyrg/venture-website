import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const Breadcrumb = ({ items = [], variant = 'default' }) => {
  const isDark = variant === 'dark';
  return (
    <nav className={`flex items-center gap-2 text-xs py-2 mb-4 overflow-x-auto ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
      <Link to="/" className={`flex items-center gap-1 transition-colors font-medium ${isDark ? 'hover:text-white text-slate-300' : 'hover:text-blue-700 text-slate-500'}`}>
        <FaHome className="text-xs" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 flex-shrink-0">
          <FaChevronRight className={`text-[9px] ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
          {item.link ? (
            <Link to={item.link} className={`transition-colors font-medium ${isDark ? 'hover:text-white text-slate-300' : 'hover:text-blue-700 text-slate-500'}`}>
              {item.label}
            </Link>
          ) : (
            <span className={`font-bold ${isDark ? 'text-cyan-300' : 'text-blue-800'}`}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
