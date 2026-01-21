"use client";

import React, { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="glass fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="relative">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 mr-2 animate-pulse-glow rounded-xl"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="10" fill="url(#logoGradient)" />
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#007AFF" />
                      <stop offset="100%" stopColor="#0052b3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 34V14H30L16 28"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M20 22L32 22L32 34"
                    stroke="#fcaf3b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">
                Forward Alpha
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 transition font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden sm:block btn-shine bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Get In Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {["About", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary-600 transition font-medium py-2 px-2 rounded-lg hover:bg-primary-50"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-shine bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-center font-semibold mt-2"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          }}
        >
          {/* Colorful Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-accent-600/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-accent-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-primary-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/15 rounded-full blur-3xl animate-float"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                Tech &bull; AI &bull; Finance
              </span>
            </div>
            <h1 className="mb-4 sm:mb-6">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                Empowering Innovation
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-400 drop-shadow-lg mt-1">
                Through People
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              We&apos;re not just staffing. <span className="text-accent-300 font-semibold">We&apos;re strategy.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="#about"
                className="btn-shine group bg-gradient-to-r from-accent-400 to-accent-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/20 hover:shadow-xl transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-2"
              >
                View Portfolio
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Vision Section */}
      <section id="about" className="py-16 sm:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50/50 to-transparent hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">Our Vision</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              A Future Shaped by <span className="gradient-text">Intelligent Innovation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We operate at the intersection of technology, AI, and finance to deliver exceptional results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <VisionCard
              title="Vision"
              subtitle="A Future Shaped by Intelligent Innovation"
              description="We envision a world where technology empowers every business to achieve their full potential through AI-driven solutions."
              icon="lightbulb"
            />
            <VisionCard
              title="Strategy"
              subtitle="Fusing Diverse Disciplines"
              description="Our unique approach combines tech expertise, AI capabilities, and financial acumen to create comprehensive solutions."
              icon="puzzle"
            />
            <VisionCard
              title="Work"
              subtitle="Exceptional Outcomes Through Innovation"
              description="We deliver user-centric software solutions, AI-driven financial strategies, and staffing optimization services."
              icon="rocket"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 text-white relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-accent-400 font-semibold text-xs sm:text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-3 sm:mb-4">
              Our Expertise
            </h2>
            <p className="text-base sm:text-lg text-primary-100 max-w-2xl mx-auto px-4">
              Combining technology, AI, and finance to create exceptional solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              title="Software Development"
              description="User-centric software solutions that are not just innovative but intuitively designed for your needs."
              icon="code"
            />
            <ServiceCard
              title="AI Solutions"
              description="AI-driven strategies and implementations to streamline operations and enhance decision-making."
              icon="brain"
            />
            <ServiceCard
              title="Financial Technology"
              description="Intelligent financial strategies leveraging cutting-edge technology and data analytics."
              icon="chart"
            />
            <ServiceCard
              title="Staffing Solutions"
              description="Matching exceptional talent with exceptional companies, catalyzing growth and innovation."
              icon="users"
            />
            <ServiceCard
              title="Strategic Consulting"
              description="Expert guidance to help businesses innovate, implement, and iterate rapidly."
              icon="compass"
            />
            <ServiceCard
              title="Digital Transformation"
              description="End-to-end digital transformation services to modernize your business operations."
              icon="transform"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 bg-gray-50 relative">
        <div className="absolute -bottom-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">Our Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              Portfolio
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our innovative solutions and successful projects
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <PortfolioCard
              title="Kaavala"
              description="Women's safety app with SOS alerts, volunteer network, and real-time location sharing for emergency situations."
              link="https://getkaavala.com"
              image="/images/kaavala-hero.jpg"
            />
            <PortfolioCard
              title="Janakural"
              description="Public grievance management platform enabling citizens to report local issues with photo evidence and track resolution."
              link="https://janakural.com"
              image="/images/janakural-hero.jpeg"
            />
            <PortfolioCard
              title="TVK Admin Portal"
              description="Comprehensive admin dashboard for managing volunteers, issues, events, and booth operations across Tamil Nadu."
              link="https://tvk.theforwardalpha.com"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
            />
            <PortfolioCard
              title="Fridge2Frame"
              description="Transform your cherished photos into beautiful framed memories with our innovative platform."
              link="https://fridge2frame.com"
              image="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80"
            />
            <PortfolioCard
              title="Fridge2Frame Schools"
              description="Bringing the magic of photo framing to schools, helping create lasting memories for students and families."
              link="https://schools.fridge2frame.com"
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
            />
            <PortfolioCard
              title="Let's Serve"
              description="A community platform bringing people together to serve and make a difference. Let's Serve Together."
              link="https://letsserve.org"
              image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent-400">100%</div>
              <div className="text-primary-100 text-sm sm:text-base mt-1">Committed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent-400">24/7</div>
              <div className="text-primary-100 text-sm sm:text-base mt-1">Support</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent-400">8+</div>
              <div className="text-primary-100 text-sm sm:text-base mt-1">Products</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent-400">AI</div>
              <div className="text-primary-100 text-sm sm:text-base mt-1">Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/98 to-white/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <span className="text-primary-500 font-semibold text-xs sm:text-sm tracking-wider uppercase">Contact Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Ready to transform your business with innovative technology solutions?
                Get in touch and let&apos;s discuss how we can help you achieve your goals.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <ContactInfo
                  icon="email"
                  title="Email"
                  text="theforwardalpha@gmail.com"
                />
                <ContactInfo
                  icon="web"
                  title="Website"
                  text="theforwardalpha.com"
                />
              </div>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              <form
                action="https://formspree.io/f/maqqnvda"
                method="POST"
                className="space-y-4 sm:space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50 text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50 text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50 resize-none text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-shine w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="10" fill="#007AFF" />
                  <path
                    d="M16 34V14H30L16 28"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M20 22L32 22L32 34"
                    stroke="#fcaf3b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span className="text-xl sm:text-2xl font-bold">Forward Alpha</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Innovation at the intersection of Technology, AI, and Finance.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {["About", "Services", "Portfolio", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Portfolio</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="https://getkaavala.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Kaavala
                  </a>
                </li>
                <li>
                  <a href="https://janakural.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Janakural
                  </a>
                </li>
                <li>
                  <a href="https://tvk.theforwardalpha.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    TVK Admin
                  </a>
                </li>
                <li>
                  <a href="https://fridge2frame.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-sm sm:text-base">
                    Fridge2Frame
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
              <p className="text-gray-400 text-sm sm:text-base">theforwardalpha@gmail.com</p>
              <p className="text-gray-400 text-sm sm:text-base">theforwardalpha.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>
              &copy; {new Date().getFullYear()} Forward Alpha, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function VisionCard({
  title,
  subtitle,
  description,
  icon,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    lightbulb: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    puzzle: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    rocket: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  return (
    <div className="card-hover bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 group text-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30 mx-auto">
        {icons[icon]}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">{subtitle}</p>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    code: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    brain: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    users: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    compass: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    transform: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };

  return (
    <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
        {icons[icon]}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-primary-200 leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
  );
}

function PortfolioCard({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover block bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">{description}</p>
        <span className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Visit Site
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function ContactInfo({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  const icons: Record<string, React.ReactElement> = {
    email: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    web: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  };

  return (
    <div className="flex items-start group">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 text-primary-600 group-hover:scale-110 transition-transform flex-shrink-0">
        {icons[icon]}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{title}</h4>
        <p className="text-gray-600 text-sm sm:text-base">{text}</p>
      </div>
    </div>
  );
}
