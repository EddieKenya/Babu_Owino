import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Vision = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header darkText={true} />

      {/* STRATEGIC OVERVIEW */}
      <section className="py-24 px-6 md:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4">The 2027 Manifesto</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-[#334155] tracking-tight">
            Brains Over <br /> Dimples.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic">
            "Nairobi’s crisis is not one of resources, but of management. We are moving from a city of PR stunts 
            to a city of Actuarial precision. Here is my in-depth blueprint for the transformation of our capital."
          </p>
        </div>
      </section>

      {/* 1. INFRASTRUCTURE & TARMACKING */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 sticky top-24">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#334155] border-l-8 border-blue-600 pl-6">
              Engineering the <br /> Modern Grid
            </h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                The current "patchwork" approach to road maintenance is a drain on county coffers. My vision for 
                <strong> Tarmacking</strong> begins with a 10-year engineering audit of all ward-level roads.
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex gap-3"><span className="text-blue-600">●</span> Integrated Drainage-First Policy: No tarmac laid without a subterranean storm-water system.</li>
                <li className="flex gap-3"><span className="text-blue-600">●</span> Estate Internal Connectivity: Prioritizing the paving of Eastlands "Last-Mile" lanes to reduce dust and improve hygiene.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/tarmacking.png" alt="Infrastructure Blueprint" className="w-full h-auto shadow-2xl mb-8" />
            <div className="bg-slate-900 p-8 text-white">
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Strategic Goal</h4>
              <p className="text-sm font-light leading-loose">
                Achieve 100% bitumen standards for all residential feeder roads by 2030, increasing property 
                values and reducing vehicle maintenance costs for Nairobians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOUSING & URBAN PROTECTION */}
      <section className="py-24 px-6 md:px-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-8">Defending the <br /> Right to Shelter</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Nairobi’s housing crisis will not be solved by making people homeless. My <strong>Housing Vision</strong> 
                focuses on <em>In-Situ</em> development—upgrading the estates we already have.
              </p>
              <p>
                We will implement the "Social Housing Guarantee" which legally protects residents of historic 
                neighborhoods like Bahati and Makongeni from predatory evictions, ensuring that modern 
                apartments built on public land prioritize the original inhabitants at subsidized rates.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img src="/house.png" alt="Housing Rights" className="w-full h-auto shadow-2xl z-10 relative" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 3. THE KAZI KWA VIJANA ECONOMY */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img src="/kazi.png" alt="Kazi kwa Vijana" className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="mt-6 p-6 bg-blue-50 border-t-4 border-blue-600">
                <p className="text-sm text-slate-600 font-bold italic">"Empowering the youth through direct labor, not empty promises."</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#334155]">Kazi kwa Vijana 2.0: <br /> Dignity in Labor</h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Employment is the only cure for poverty. My plan for <strong>Job Creation</strong> centers on the 
                <strong> Kazi kwa Vijana</strong> initiative—converting youth energy into city-building capital.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="p-4 border-l-4 border-blue-600 bg-slate-50">
                  <h4 className="font-bold mb-1">Direct Procurement Quota</h4>
                  <p className="text-sm">Enforcing a law where 30% of all County cleaning and maintenance contracts go directly to registered youth groups in each ward.</p>
                </div>
                <div className="p-4 border-l-4 border-blue-600 bg-slate-50">
                  <h4 className="font-bold mb-1">Babu Tech-Hubs</h4>
                  <p className="text-sm">Converting social halls into 24/7 Digital Hubs with 10Gbps internet for global remote work and software development.</p>
                </div>
                <div className="p-4 border-l-4 border-blue-600 bg-slate-50">
                   <h4 className="font-bold mb-1">The Artisanal Fund</h4>
                   <p className="text-sm">County-backed credit for youth-led cottage industries manufacturing paving blocks and streetlights for Nairobi roads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GARBAGE & ECOLOGICAL RENEWAL */}
      <section className="py-24 px-6 md:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 sticky top-24">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#334155]">Waste-To-Energy <br /> Revolution</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Garbage in Nairobi is a goldmine that the current administration treats as a nuisance. My 
              <strong> Garbage Collection</strong> strategy moves away from the "collect and dump" failure.
            </p>
            <div className="bg-white p-6 shadow-md border-r-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">The Dandora Industrialization Plan</h4>
              <p className="text-sm text-slate-600 italic">
                Decommissioning the open dumpsite and replacing it with a $200M plasma gasification plant that 
                converts 2,500 tons of daily waste into 50MW of clean energy for the city’s grid.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/garbage.png" alt="Waste Management" className="w-full h-auto shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 5. TRANSPORT MODERNIZATION */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#334155]">Seamless Transit <br /> & Smart Traffic</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Nairobians lose an average of 14 working days a year in traffic. My <strong>Transport Vision</strong> 
              is to reclaim that time through data.
            </p>
            <ul className="space-y-6">
              <li className="bg-slate-50 p-6 rounded-lg">
                <span className="block font-bold text-blue-600 mb-1">AI-Traffic Control</span>
                <span className="text-sm">Replacing manual police traffic control with a centralized AI-brain that manages light timings based on real-time vehicle density.</span>
              </li>
              <li className="bg-slate-50 p-6 rounded-lg">
                <span className="block font-bold text-blue-600 mb-1">BRT Core Completion</span>
                <span className="text-sm">Finishing the stalled BRT corridors with dedicated electric bus lanes to move 5x more people in half the time.</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/transport.png" alt="Transport Vision" className="w-full h-auto shadow-2xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;