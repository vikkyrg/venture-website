const Loader = ({ message = 'Loading content...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 space-y-4">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-700 rounded-full animate-spin" />
      <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase">{message}</p>
    </div>
  );
};

export default Loader;
