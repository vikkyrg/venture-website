import CourseCard from './CourseCard';

const CourseGrid = ({ courses, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 items-stretch">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-80 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
            <div className="h-32 skeleton rounded-xl" />
            <div className="h-6 skeleton rounded w-3/4 mt-4" />
            <div className="h-4 skeleton rounded w-1/2 mt-2" />
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

  if (courses.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-slate-900 font-bold text-sm">No courses are currently available.</p>
        <p className="text-xs text-slate-500 mt-1">Please check back later once new courses are published.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
      {courses.map((course, index) => (
        <div key={course._id || course.slug} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
