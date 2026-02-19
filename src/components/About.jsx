import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header updated with darkText prop to ensure visibility on white background */}
      <Header darkText={true} />

      {/* Hero Section: The Journey */}
      <section className="relative py-20 px-6 md:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#334155]">
              The Story of <br /> Resilience.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              From the humble streets of Nyalenda slums to the chambers of Parliament, Hon. Babu Owino’s life is a testament to the power of education and unwavering determination. A First-Class scholar and a fearless advocate for the people.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/abt.png" 
              alt="Hon. Babu Owino" 
              className="w-full h-auto rounded-none shadow-2xl transition-all"
            />
          </div>
        </div>
      </section>

      {/* NEW FAMILY SECTION */}
      <section className="py-20 px-6 md:px-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="/wife.png" 
              alt="Hon. Babu Owino and his wife Fridah" 
              className="w-full h-auto shadow-2xl border-8 border-white"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#334155]">Family: The Foundation of Leadership</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Beyond the political arena, Hon. Babu Owino is a devoted family man. He credits his strength and success to the unwavering support of his wife, <strong>Fridah Muthoni</strong>. Their partnership, which began during their university days, has been the bedrock of his journey.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              As a proud father of two beautiful children, Babu's commitment to building a better Nairobi is personal. He believes that every child in Kenya deserves the same security, education, and opportunities that he strives to provide for his own family.
            </p>
            <div className="bg-slate-50 p-6 border-l-4 border-blue-600">
              <p className="italic text-slate-600">
                "A man who cannot take care of his family cannot take care of a nation. My family is my greatest motivation to serve the people of Kenya with integrity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#334155]">Academic Prowess & Leadership</h2>
            <p className="text-lg text-slate-700 mb-6">
              Babu Owino is one of Kenya's most educated legislators. After scoring an A-plain in KCSE at Kisumu Boys, he joined the University of Nairobi, where he earned a <strong>First Class Honors</strong> in Actuarial Science.
            </p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                Bachelor of Science in Actuarial Science (First Class Honors)
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                Bachelor of Laws (LLB) & Advocate of the High Court of Kenya
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                Master’s Degrees in both Actuarial Science and Law
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/doctrate.png" 
              alt="Academic Achievements" 
              className="w-full h-auto shadow-xl"
            />
            <p className="mt-4 text-sm italic text-center text-slate-500">
              Awarded Honorary Doctorate (PhD Honoris Causa) in Political Leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Rankings & Achievements Grid */}
      <section className="py-20 px-6 md:px-24 bg-[#334155] text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Kenya's Best Performing MP</h2>
          <p className="text-blue-200 tracking-widest uppercase text-sm font-bold">Consistently Ranked #1</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="p-8 border border-slate-500 hover:border-blue-400 transition-colors">
            <h3 className="text-5xl font-bold text-blue-300 mb-4">72%</h3>
            <p className="font-bold uppercase tracking-wide mb-2">Infotrak Ranking</p>
            <p className="text-slate-300 text-sm">Ranked as the overall best performing Member of Parliament in Kenya by Infotrak Research.</p>
          </div>
          <div className="p-8 border border-slate-500 hover:border-blue-400 transition-colors">
            <h3 className="text-5xl font-bold text-blue-300 mb-4">85M+</h3>
            <p className="font-bold uppercase tracking-wide mb-2">Bursary Support</p>
            <p className="text-slate-300 text-sm">Annually facilitates over Ksh. 85 Million in bursaries, ensuring no child in Embakasi East stays home for lack of fees.</p>
          </div>
          <div className="p-8 border border-slate-500 hover:border-blue-400 transition-colors">
            <h3 className="text-5xl font-bold text-blue-300 mb-4">Top 1</h3>
            <p className="font-bold uppercase tracking-wide mb-2">Legislative Impact</p>
            <p className="text-slate-300 text-sm">Consistently feted for his contribution to student welfare and social justice crusades.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/community.png" 
              alt="Babu with Community" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#334155]">A Servant of the People</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              In Embakasi East, his work speaks for itself. From tarmacking roads and installing streetlights to his famous online chemistry and math lessons that helped thousands of students during the pandemic, Babu Owino remains a leader who is present on the ground and in the hearts of the youth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;