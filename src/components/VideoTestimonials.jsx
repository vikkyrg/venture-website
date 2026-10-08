import { useState } from 'react';
import { FaPlay, FaVideo, FaTimes, FaUserCheck } from 'react-icons/fa';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoItems = [
    {
      id: 1,
      title: "Building Real Enterprise Projects",
      learner: "Siddharth K.",
      program: "Cloud & DevOps Track",
      duration: "2:45",
      label: "Learner Walkthrough",
      thumbnailBg: "from-blue-900 via-slate-900 to-indigo-900",
      description: "Siddharth shares his hands-on project experience and interview preparation at Venture Soft."
    },
    {
      id: 2,
      name: "Mock Technical Interview Practice",
      learner: "Pooja R.",
      program: "Full Stack Track",
      duration: "3:10",
      label: "Interview Prep Experience",
      thumbnailBg: "from-slate-900 via-blue-950 to-slate-900",
      description: "Pooja discusses how technical mock sessions helped build confidence for enterprise hiring."
    },
    {
      id: 3,
      name: "From Fundamentals to Production Deployment",
      learner: "Vikram N.",
      program: "Systems & Cloud Engineering",
      duration: "2:15",
      label: "Career Transition Story",
      thumbnailBg: "from-[#087FC1]/40 via-slate-900 to-blue-900",
      description: "Vikram breaks down the core step-by-step guidance received during lab scenario modules."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
            <FaVideo className="text-xs" /> Video Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            See What Our Learners Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Listen directly to engineers who completed practical training and interview preparation at Venture Soft.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoItems.map((video) => (
            <div 
              key={video.id}
              className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden hover:border-[#087FC1] transition-all group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div 
                className={`relative h-48 bg-gradient-to-br ${video.thumbnailBg} p-6 flex flex-col justify-between cursor-pointer`}
                onClick={() => setActiveVideo(video)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white bg-blue-600/80 px-2.5 py-0.5 rounded border border-blue-400/30">
                    {video.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-900/60 px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#087FC1] group-hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <FaPlay className="text-base ml-1" />
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-semibold text-slate-200 line-clamp-1">{video.title || video.name}</p>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-5 space-y-2 bg-slate-800/90">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <FaUserCheck className="text-blue-400 text-xs" /> {video.learner}
                  </h4>
                  <span className="text-[10px] font-medium text-blue-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                    {video.program}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Preview */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 text-white space-y-4 relative animate-in fade-in zoom-in-95 duration-150">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
              {activeVideo.label}
            </span>
            <h3 className="text-lg font-bold text-white">{activeVideo.title || activeVideo.name}</h3>
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center mx-auto border border-blue-700/50">
                <FaVideo className="text-xl" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Video clip configured for <span className="font-semibold text-white">{activeVideo.learner}</span> ({activeVideo.program}).
              </p>
              <p className="text-[11px] text-slate-500 italic">
                (Admin can populate live video URL streams through the admin CMS media portal.)
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
