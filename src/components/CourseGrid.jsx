import CourseCard from './CourseCard';

const CourseGrid = ({ courses, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-80 rounded-2xl bg-white border border-slate-200 animate-pulse p-6 flex flex-col justify-between shadow-sm">
            <div className="h-32 bg-slate-100 rounded-xl" />
            <div className="h-6 bg-slate-100 rounded w-3/4" />
            <div className="h-4 bg-slate-100 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-rose-200 p-6 shadow-sm">
        <p className="text-rose-700 font-bold text-xs">{error}</p>
        <p className="text-xs text-slate-500 mt-1">Please ensure backend server is running on port 5000.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard key={course._id || course.slug} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
