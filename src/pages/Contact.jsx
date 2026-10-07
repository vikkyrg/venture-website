import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { submitEnquiry } from '../services/api';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
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
      setSuccessMsg(res.message || 'Thank you! Your message has been saved.');
      setFormData({ name: '', email: '', phone: '', course: 'General Inquiry', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMsg(err.response?.data?.message || 'Failed to submit contact message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-8 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-6">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">We'd Love To Hear From You</h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Have questions regarding course modules, schedule availability, or career transition programs? Speak to our counselor team.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <FaMapMarkerAlt className="text-teal-700 text-xl mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Campus Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Venture Soft Tech Campus, Electronic City, Bangalore 560100</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <FaPhoneAlt className="text-teal-700 text-lg" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Phone & WhatsApp</h4>
                  <p className="text-xs text-slate-600 mt-0.5">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <FaEnvelope className="text-teal-700 text-lg" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Email Support</h4>
                  <p className="text-xs text-slate-600 mt-0.5">contact@venturesoft.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us A Direct Message</h3>

            {successMsg && (
              <div className="p-4 mb-6 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs flex items-center gap-2 font-semibold">
                <FaCheckCircle className="text-base text-teal-700" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 mb-6 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-teal-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-teal-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-teal-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject / Program</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-teal-600 focus:bg-white"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="AIOps Mastery">AIOps Mastery</option>
                  <option value="AWS Cloud Architecture">AWS Cloud Architecture</option>
                  <option value="DevOps & Kubernetes">DevOps & Kubernetes</option>
                  <option value="Linux Shell Scripting">Linux Shell Scripting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can our counselors help you?"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-teal-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                {loading ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Contact;
