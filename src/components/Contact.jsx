import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out. A member of the team will be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header darkText={true} />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column: Information & Messaging */}
          <div className="md:w-5/12">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#334155] mb-8 tracking-tight">
              Contact the <br /> Movement.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Our campaign is built from the ground up by people like you. Whether you have a question about 
              the 2027 Blueprint, want to share a story about your community, or need assistance, 
              we want to hear from you.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Office Location</h3>
                <p className="text-lg font-medium text-slate-800">Embakasi East Constituency Office,<br />Nairobi, Kenya</p>
              </div>
              
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Media Inquiries</h3>
                <p className="text-lg font-medium text-slate-800">press@babuowino.co.ke</p>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 italic">
                  "The voice of the people is the pulse of the nation. Speak loudly, and let us build a 
                  smarter Nairobi together."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="md:w-7/12 bg-slate-50 p-8 md:p-12 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase mb-2 text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600 bg-white"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase mb-2 text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600 bg-white"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600 bg-white"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-slate-700">Subject</label>
                <select 
                  className="p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600 bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>General Inquiry</option>
                  <option>Volunteer Opportunities</option>
                  <option>Policy Suggestions</option>
                  <option>Media/Press</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-2 text-slate-700">Message</label>
                <textarea 
                  rows="6" 
                  required
                  className="p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600 bg-white"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#334155] text-white font-bold py-5 uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>

              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                By submitting this form, you agree to receive periodic updates from the campaign. 
                Data rates may apply. You can opt-out at any time.
              </p>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;