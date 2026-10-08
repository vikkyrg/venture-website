import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-500 py-2 mb-4 overflow-x-auto">
      <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors font-medium">
        <FaHome className="text-xs" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 flex-shrink-0">
          <FaChevronRight className="text-[9px] text-slate-400" />
          {item.link ? (
            <Link to={item.link} className="hover:text-blue-700 transition-colors font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="text-blue-800 font-bold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
