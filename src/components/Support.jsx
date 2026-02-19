import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Support = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header darkText={true} />

      {/* Hero Section */}
      <section className="py-24 px-6 md:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-[#334155] tracking-tight">
            Stand With Us.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic">
            "The transformation of Nairobi won't happen in the chambers of Parliament alone—it happens in 
            the streets, the markets, and the homes of every citizen who believes in a smarter future."
          </p>
        </div>
      </section>

      {/* Pillars of Support */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Pillar 1: Volunteer */}
            <div className="flex flex-col">
              <div className="h-1 w-20 bg-blue-600 mb-8"></div>
              <h3 className="text-3xl font-serif font-bold text-[#334155] mb-6">Volunteer Your Time</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                From data entry and digital advocacy to ground-level mobilization during community events, 
                our volunteers are the engine of this campaign. Join a team that matches your skills.
              </p>
              <button className="w-full py-4 border-2 border-[#334155] font-bold uppercase tracking-widest hover:bg-[#334155] hover:text-white transition-all">
                Join the Team
              </button>
            </div>

            {/* Pillar 2: Organize */}
            <div className="flex flex-col">
              <div className="h-1 w-20 bg-blue-600 mb-8"></div>
              <h3 className="text-3xl font-serif font-bold text-[#334155] mb-6">Become an Organizer</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                Lead the movement in your Ward. Organizers are responsible for hosting local town halls, 
                distributing campaign literature, and ensuring every voice in their neighborhood is heard.
              </p>
              <button className="w-full py-4 border-2 border-[#334155] font-bold uppercase tracking-widest hover:bg-[#334155] hover:text-white transition-all">
                Start Organizing
              </button>
            </div>

            {/* Pillar 3: Advocate */}
            <div className="flex flex-col">
              <div className="h-1 w-20 bg-blue-600 mb-8"></div>
              <h3 className="text-3xl font-serif font-bold text-[#334155] mb-6">Digital Advocacy</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                Use your platform to spread the "Brains Over Dimples" message. Help us combat 
                misinformation and share the 2027 Blueprint across social media networks.
              </p>
              <button className="w-full py-4 border-2 border-[#334155] font-bold uppercase tracking-widest hover:bg-[#334155] hover:text-white transition-all">
                Get Toolkit
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* The Creed Section */}
      <section className="py-24 px-6 md:px-24 bg-[#334155] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">The Supporter’s Creed</h2>
          <div className="space-y-8 text-lg md:text-xl font-light leading-loose text-blue-100">
            <p>I believe that leadership requires intellectual courage and a first-class mind.</p>
            <p>I believe that every resident of Nairobi deserves dignity, security, and opportunity.</p>
            <p>I commit to being an active participant in the governance of my city.</p>
            <p>I stand with Hon. Babu Owino in the pursuit of a smarter, fairer Nairobi for all.</p>
          </div>
          <div className="mt-16 flex justify-center">
             <div className="h-px w-32 bg-blue-400 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Newsletter / Quick Sign-up */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-[#334155] mb-4">Stay Informed</h2>
          <p className="text-slate-600 mb-8">Receive weekly updates on the mission and find out where the campaign is heading next.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow p-4 border border-slate-300 rounded-none focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-600 text-white font-bold px-10 py-4 uppercase tracking-widest hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;