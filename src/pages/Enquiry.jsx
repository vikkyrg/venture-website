import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { submitEnquiry, getCourses } from '../services/api';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    experience: '',
    preferredMode: 'Live Online',
    message: ''
  });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses(res.data || []);
        if (res.data && res.data.length > 0) {
          setFormData(prev => ({ ...prev, course: res.data[0].title }));
        }
      } catch (err) {
        console.error('Error fetching courses', err);
      } finally {
        setCoursesLoading(false);
      }
    };
    fetchPublishedCourses();
  }, []);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await submitEnquiry(formData);
      setSuccessMsg(res.message || 'Enquiry saved successfully! Our senior counselor will call you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: courses.length > 0 ? courses[0].title : '',
        qualification: '',
        experience: '',
        preferredMode: 'Live Online',
        message: ''
      });
    } catch (err) {
      console.error('Enquiry error:', err);
      setErrorMsg(err.response?.data?.message || 'Error saving enquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[{ label: 'Get Started / Enquiry' }]} />

        <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm space-y-6 my-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Free Career Counseling
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">Get Started With Venture Soft</h1>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Fill out this official form to request detailed syllabus PDFs, batch timings, and fee structures.
            </p>
          </div>

          {successMsg && (
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-center gap-2 font-semibold">
              <FaCheckCircle className="text-base text-blue-700" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Target Program *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  {coursesLoading ? (
                    <option>Loading courses...</option>
                  ) : courses.length > 0 ? (
                    courses.map(c => <option key={c._id} value={c.title}>{c.title}</option>)
                  ) : (
                    <option>No courses available</option>
                  )}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech / BCA / MCA"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Mode</label>
                <select
                  name="preferredMode"
                  value={formData.preferredMode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
                >
                  <option value="Live Online">Live Online</option>
                  <option value="Classroom Bangalore">Classroom (Bangalore)</option>
                  <option value="Corporate Batch">Corporate Batch</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Additional Notes</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any specific queries or weekend batch preferences..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="text-blue-400" />
              {loading ? 'Submitting Enquiry...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Enquiry;
