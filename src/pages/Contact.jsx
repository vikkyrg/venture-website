import { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { submitEnquiry, getCourses } from '../services/api';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'General Inquiry',
    message: '',
    source: 'contact'
  });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchPublishedCourses = async () => {
      try {
        const res = await getCourses({ status: 'published' });
        setCourses(res.data || []);
      } catch (err) {
        console.error('Error fetching courses in Contact:', err);
      }
    };
    fetchPublishedCourses();
  }, []);

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
      setSuccessMsg(res.message || 'Thank you! Your inquiry has been submitted successfully.');
      setFormData({ name: '', email: '', phone: '', course: 'General Inquiry', message: '', source: 'contact' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMsg(err.response?.data?.message || 'Failed to submit contact message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] text-[#101A32] min-h-screen">
      
      {/* Top Pale Blue Section Background */}
      <section className="bg-gradient-to-b from-[#EEF6FF] via-[#F5F9FF] to-[#F8FAFC] border-b border-[#DCE7F5] py-10 lg:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-0" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#087FC4]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="mt-4 max-w-2xl" data-aos="fade-up">
            <span className="text-xs font-bold text-[#087FC4] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE7F5] inline-flex items-center gap-1.5 shadow-2xs mb-3">
              <FaEnvelope className="text-xs text-[#087FC4]" /> Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A32] tracking-tight leading-tight">
              We'd Love To <span className="text-[#087FC4]">Hear From You</span>
            </h1>
            <p className="text-[#52647E] text-sm sm:text-base mt-3 leading-relaxed font-normal">
              Have questions regarding course modules, schedule availability, or career transition programs? Speak to our counseling team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-4" data-aos="fade-right">
            <h3 className="text-xl font-bold text-[#101A32]">Contact Details</h3>
            <p className="text-xs sm:text-sm text-[#52647E] leading-relaxed font-normal">
              Our counselors are available Monday through Saturday to answer questions about technology tracks, batch schedules, and enrollment options.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-[#087FC4] transition-all">
                <div className="p-3 bg-[#EEF6FF] text-[#087FC4] rounded-xl border border-[#DCE7F5] shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#101A32] uppercase tracking-wider">Campus Address</h4>
                  <p className="text-xs text-[#52647E] mt-1 font-normal leading-relaxed">VentureSoft Tech Campus, Electronic City Phase 1, Bangalore 560100</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-[#087FC4] transition-all">
                <div className="p-3 bg-[#EEF6FF] text-[#087FC4] rounded-xl border border-[#DCE7F5] shrink-0">
                  <FaPhoneAlt className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#101A32] uppercase tracking-wider">Phone & WhatsApp</h4>
                  <p className="text-xs text-[#101A32] font-semibold mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#DCE7F5] shadow-xs hover:border-[#087FC4] transition-all">
                <div className="p-3 bg-[#EEF6FF] text-[#087FC4] rounded-xl border border-[#DCE7F5] shrink-0">
                  <FaEnvelope className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#101A32] uppercase tracking-wider">Email Support</h4>
                  <p className="text-xs text-[#101A32] font-semibold mt-1">contact@venturesoft.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE7F5] p-8 sm:p-10 rounded-2xl shadow-sm" data-aos="fade-left">
            <h3 className="text-xl font-bold text-[#101A32] mb-6">Send Us A Direct Message</h3>

            {successMsg && (
              <div className="p-4 mb-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-semibold animate-in fade-in">
                <FaCheckCircle className="text-base text-emerald-600 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 mb-6 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                <FaExclamationCircle className="text-base text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#101A32] uppercase tracking-wider mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] text-[#101A32] text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:bg-white focus:ring-2 focus:ring-[#087FC4]/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101A32] uppercase tracking-wider mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] text-[#101A32] text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:bg-white focus:ring-2 focus:ring-[#087FC4]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101A32] uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] text-[#101A32] text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:bg-white focus:ring-2 focus:ring-[#087FC4]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101A32] uppercase tracking-wider mb-1.5">Subject / Interested Program</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] text-[#101A32] text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:bg-white focus:ring-2 focus:ring-[#087FC4]/20 transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  {courses.map((c) => (
                    <option key={c._id || c.slug} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101A32] uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can our counseling team help you?"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F9FF] border border-[#DCE7F5] text-[#101A32] text-xs sm:text-sm focus:outline-none focus:border-[#087FC4] focus:bg-white focus:ring-2 focus:ring-[#087FC4]/20 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-animate w-full py-4 rounded-xl bg-[#087FC4] hover:bg-[#075A9C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <FaPaperPlane className="text-xs text-blue-200" />
                {loading ? 'Submitting Message...' : 'Send Direct Message'}
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;

