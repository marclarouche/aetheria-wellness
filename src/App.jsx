import React, { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial check for elements that are already in viewport on load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    // Timeout ensures all elements are rendered before we query them
    setTimeout(() => {
      document.querySelectorAll(".reveal-up").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-200">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none bg-mesh z-0"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-800 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="text-2xl font-heading font-bold tracking-wider text-white">
            AETHERIA<span className="text-neon-emerald">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-slate-400">
            <a href="#services" className="hover:text-neon-emerald transition-colors duration-500">Services</a>
            <a href="#about" className="hover:text-neon-violet transition-colors duration-500">The Lab</a>
            <a href="#testimonials" className="hover:text-white transition-colors duration-500">Stories</a>
          </div>
          <button className="px-6 py-2 border border-neon-emerald text-neon-emerald hover:bg-neon-emerald hover:text-slate-950 transition-all duration-500 rounded-sm uppercase text-xs tracking-widest font-semibold shimmer-btn">
            Book Consult
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect and Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-linear"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 reveal-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-emerald to-neon-violet">
              Human Optimization.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Experience the intersection of ancient recovery and futuristic science.
            Your cellular upgrade starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-neon-emerald text-slate-950 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-glow-emerald transition-all duration-800 transform hover:-translate-y-1 shimmer-btn">
              Introductory Membership
            </button>
            <button className="px-8 py-4 border border-slate-700 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:border-neon-violet hover:text-neon-violet transition-all duration-800 shimmer-btn">
              Explore the Lab
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse opacity-50">
          <span className="text-xs uppercase tracking-widest mb-2 text-slate-400">Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-neon-emerald to-transparent"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-emerald/20 to-neon-violet/20 blur-2xl rounded-full opacity-50"></div>
            <img src="/macro-water.png" alt="Cellular Hydration" className="relative z-10 rounded-lg shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 object-cover h-[600px] w-full" />
          </div>
          <div className="reveal-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-neon-emerald"></div>
              <span className="uppercase tracking-widest text-neon-emerald text-sm font-semibold">The Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 border-l-4 border-neon-violet pl-6">
              Bridging the gap between clinical performance and holistic peace.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              "Aetheria was founded to bridge the gap between clinical performance and holistic peace. We don't just treat symptoms; we optimize your biology."
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Through a synergy of state-of-the-art biohacking technology and ancient healing principles, we provide personalized pathways to peak physical, mental, and cellular longevity.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-heading text-white mb-2">Data-Driven</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Metrics that matter</div>
              </div>
              <div>
                <div className="text-3xl font-heading text-white mb-2">Holistic</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Mind & Body sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-900/50 backdrop-blur-sm border-y border-white/5 relative overflow-hidden z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-emerald/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal-up">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-slate-600"></div>
              <span className="uppercase tracking-widest text-slate-400 text-sm">Optimization Protocols</span>
              <div className="w-8 h-[1px] bg-slate-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Core Offerings</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Targeted modalities designed to accelerate recovery, enhance cognitive function, and expand your healthspan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="reveal-up group bg-slate-950/80 p-10 border border-slate-800 hover:border-neon-emerald/50 transition-all duration-800 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-emerald/10 blur-2xl rounded-full group-hover:bg-neon-emerald/20 transition-all duration-1000"></div>
              <div className="text-neon-emerald mb-6 group-hover:text-glow-emerald transition-all duration-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Cryo-Recovery</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6">Sub-zero recovery for elite performance. Reduce inflammation, accelerate muscle repair, and spike endorphins.</p>
              <a href="#" className="text-sm uppercase tracking-widest text-slate-500 group-hover:text-neon-emerald transition-colors duration-500 flex items-center gap-2">
                Discover Protocol <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
              </a>
            </div>

            {/* Service 2 */}
            <div className="reveal-up group bg-slate-950/80 p-10 border border-slate-800 hover:border-neon-violet/50 transition-all duration-800 rounded-sm relative overflow-hidden" style={{ transitionDelay: '100ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-violet/10 blur-2xl rounded-full group-hover:bg-neon-violet/20 transition-all duration-1000"></div>
              <div className="text-neon-violet mb-6 group-hover:text-glow-violet transition-all duration-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Neural-Sync Meditation</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6">Guided soundscapes and soft violet light therapy to reset stress hormones and induce deep theta brainwave states.</p>
              <a href="#" className="text-sm uppercase tracking-widest text-slate-500 group-hover:text-neon-violet transition-colors duration-500 flex items-center gap-2">
                Discover Protocol <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
              </a>
            </div>

            {/* Service 3 */}
            <div className="reveal-up group bg-slate-950/80 p-10 border border-slate-800 hover:border-neon-emerald/50 transition-all duration-800 rounded-sm relative overflow-hidden" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-emerald/10 blur-2xl rounded-full group-hover:bg-neon-emerald/20 transition-all duration-1000"></div>
              <div className="text-neon-emerald mb-6 group-hover:text-glow-emerald transition-all duration-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">IV Nutrient Infusions</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6">Tailored cellular hydration. Direct-to-bloodstream vitamin complexes designed to bypass digestion for maximum absorption.</p>
              <a href="#" className="text-sm uppercase tracking-widest text-slate-500 group-hover:text-neon-emerald transition-colors duration-500 flex items-center gap-2">
                Discover Protocol <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
              </a>
            </div>

            {/* Service 4 */}
            <div className="reveal-up group bg-slate-950/80 p-10 border border-slate-800 hover:border-neon-violet/50 transition-all duration-800 rounded-sm relative overflow-hidden" style={{ transitionDelay: '300ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-violet/10 blur-2xl rounded-full group-hover:bg-neon-violet/20 transition-all duration-1000"></div>
              <div className="text-neon-violet mb-6 group-hover:text-glow-violet transition-all duration-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Bio-Hacking Consultation</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-6">Data-driven longevity roadmaps. We analyze baseline biomarkers to design a customized optimization schedule.</p>
              <a href="#" className="text-sm uppercase tracking-widest text-slate-500 group-hover:text-neon-violet transition-colors duration-500 flex items-center gap-2">
                Discover Protocol <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Patient Outcomes</h2>
            <p className="text-slate-400">Voices from the cutting edge of human performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="reveal-up relative pl-8 border-l border-white/10 hover:border-neon-emerald transition-colors duration-800">
              <span className="absolute -left-5 top-0 text-6xl text-slate-800 font-heading">"</span>
              <p className="text-xl text-slate-300 italic font-light mb-6">
                The most advanced recovery center I've ever stepped foot in. The atmosphere is unmatched.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-neon-emerald/30"></div>
                <div>
                  <div className="text-white font-semibold">Marcus V.</div>
                  <div className="text-xs text-neon-emerald uppercase tracking-wider">Professional Athlete</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="reveal-up relative pl-8 border-l border-white/10 hover:border-neon-violet transition-colors duration-800" style={{ transitionDelay: '100ms' }}>
              <span className="absolute -left-5 top-0 text-6xl text-slate-800 font-heading">"</span>
              <p className="text-xl text-slate-300 italic font-light mb-6">
                Aetheria changed how I approach my work week. I feel more focused and energized than I did in my 20s.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-neon-violet/30"></div>
                <div>
                  <div className="text-white font-semibold">Sarah L.</div>
                  <div className="text-xs text-neon-violet uppercase tracking-wider">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-heading font-bold tracking-wider text-slate-600">
            AETHERIA<span className="text-slate-800">.</span>
          </div>
          <div className="text-sm text-slate-600">
            © 2026 Aetheria Wellness Lab. All biology optimized.
          </div>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all cursor-pointer">In</span>
            <span className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all cursor-pointer">X</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
