/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Twitter, MessageCircle } from 'lucide-react'

const modules = [
  {
    icon: "brain", 
    title: "MBTI + AI Life Coach",
    description: "Get personalized AI Life Coaching based on your MBTI results to unlock your strengths and improve weaknesses.",
    link: "/ai-life-coach",
    color: "from-purple-200 to-indigo-200",
    image: "/images/persona-discovery.png",
    glowColor: "from-indigo-300/40 via-purple-400/30 to-blue-300/20"
  },
  {
    icon: "link", 
    title: "On-Chain Growth Records",
    description: "Store your growth records permanently on the blockchain and earn unique achievement badges (NFTs).",
    link: "/growth-records",
    color: "from-indigo-200 to-purple-200",
    image: "/images/ai-life-coach.png",
    glowColor: "from-purple-300/40 via-pink-400/30 to-rose-300/20"
  },
  {
    icon: "target", 
    title: "Personalized Growth Challenges",
    description: "Take tailored growth challenges designed to elevate you to higher personality levels.",
    link: "/challenges",
    color: "from-purple-200 to-pink-200",
    image: "/images/wellness-corner.png",
    glowColor: "from-blue-300/40 via-cyan-400/30 to-teal-300/20"
  }
]

const testimonials = [
  { 
    avatar: '/images/user1.jpg',
    name: "Sarah Chen",
    role: "Software Engineer",
    mbti: "INFJ",
    content: "This platform helped me understand myself better than years of self-reflection. The AI coaching is like having a personal mentor!",
  },
  { 
    avatar: '/images/user2.jpg',
    name: "Michael Park",
    role: "Creative Director",
    mbti: "ENFP",
    content: "The insights I gained here transformed how I approach both my creative work and personal relationships.",
  },
  { 
    avatar: '/images/user3.jpg',
    name: "Emma Wilson",
    role: "Teacher",
    mbti: "ISFJ",
    content: "Finally found a community that understands personality types beyond just basic descriptions. The growth journey here is incredible!",
  },
]

const steps = [
  {
    number: "01",
    title: "MBTI Test",
    description: "Complete our scientifically designed MBTI assessment",
    icon: "clipboard-check",
    color: "from-purple-100 to-indigo-100",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "AI Life Coach",
    description: "Get personalized guidance and growth plans",
    icon: "robot",
    color: "from-indigo-100 to-purple-100",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Complete Challenges",
    description: "Earn on-chain records and achievement badges",
    icon: "trophy",
    color: "from-purple-100 to-pink-100",
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=600&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Growth Archive",
    description: "Upload and trade your growth journey",
    icon: "archive",
    color: "from-pink-100 to-purple-100",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
  }
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
    }

    // Add scroll effects with optimized performance
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hero parallax effect with hardware acceleration
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          const speed = element.getAttribute('data-speed') || '0.5';
          const yPos = -(scrolled * parseFloat(speed));
          const scale = 1 + Math.min(scrolled * 0.0005, 0.5);
          element.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
        }
      });

      // Handle all fade-in sections with optimized calculations
      const fadeElements = document.querySelectorAll('.fade-in-section, .section-title');
      fadeElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementVisible = 150;

          // Only add/remove class if needed
          const shouldBeVisible = elementTop < windowHeight - elementVisible;
          const isCurrentlyVisible = element.classList.contains('is-visible');
          
          if (shouldBeVisible !== isCurrentlyVisible) {
            element.classList.toggle('is-visible', shouldBeVisible);
          }

          // Optimize parallax effects by using CSS custom properties
          if (element.classList.contains('feature-card') || 
              element.classList.contains('journey-step') || 
              element.classList.contains('testimonial-card')) {
            const centerPosition = rect.top + rect.height / 2;
            const distanceFromCenter = (windowHeight / 2) - centerPosition;
            
            // Use a single transform operation
            const movement = Math.min(Math.max(distanceFromCenter * 0.05, -50), 50); // 限制移动范围
            
            element.style.transform = `translate3d(0, ${movement}px, 0)`;
          }
        }
      });
    };

    // Optimize scroll handler with improved throttling
    let lastScrollTime = 0;
    const scrollThrottleMs = 16; // Approximately 60fps

    const scrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollTime >= scrollThrottleMs) {
        requestAnimationFrame(handleScroll);
        lastScrollTime = now;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/back.png"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
            className="parallax"
            data-speed="0.02"
          />
        </div>
        
        {/* Logo in top left corner */}
        <div className="absolute top-4 md:top-8 left-4 md:left-8 z-20">
          <Link href="/" className="block">
            <div className="text-3xl md:text-4xl font-normal tracking-tight">
              <span className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-transparent bg-clip-text">M</span>
              <span className="bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 text-transparent bg-clip-text">Better</span>
              <span className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-transparent bg-clip-text">TI</span>
            </div>
          </Link>
        </div>
          
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="animate-fade-in-up space-y-12 md:space-y-20">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-wide leading-relaxed bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              Discover your true potential through
              <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light bg-gradient-to-r from-gray-300 via-white to-gray-300 text-transparent bg-clip-text mt-4 md:mt-8 [text-shadow:_0_1px_12px_rgb(203_213_225_/_30%)]">
                AI-powered<br/>personality insights
              </span>
            </p>
            <Link href="/mbti-test" 
                  className="group inline-block bg-amber-400/10 backdrop-blur-md px-6 sm:px-8 md:px-10 py-2.5 rounded-full
                           border border-amber-200/30 shadow-lg shadow-amber-200/20
                           hover:bg-amber-400/20 hover:border-amber-300/40
                           transition-all duration-500 hover:scale-105 glowing-button">
              <span className="font-medium tracking-wide text-lg sm:text-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent uppercase">
                Begin Your Journey
              </span>
            </Link>
          </div>
          <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
            <i data-lucide="chevrons-down" className="w-6 h-6 md:w-8 md:h-8 text-purple-600/60"></i>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 py-16 md:py-20 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-white/40"></div>
        <div className="max-w-[80rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
          <div className="space-y-24 sm:space-y-32 md:space-y-40 lg:space-y-64">
            {modules.map((module, index) => (
              <div key={module.title} 
                   className={`fade-in-section feature-card flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} 
                              items-center justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-32 opacity-0 transition-all duration-1000`}>
                <div className="w-full md:w-[42%] text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 mb-4 sm:mb-6 md:mb-8 lg:mb-10 tracking-tight">{module.title}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-purple-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-2xl">{module.description}</p>
                  <Link href={module.link} 
                        className="group inline-flex items-center text-purple-600 hover:text-purple-800 transition-all text-base sm:text-lg md:text-xl">
                    <span className="mr-2">Explore More</span>
                    <i data-lucide="arrow-right" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
                <div className="w-full md:w-[42%] relative">
                  <div className="aspect-square relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    {/* Multiple glow layers for enhanced effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-radial ${module.glowColor} blur-[120px] transform scale-150`}></div>
                    
                    {/* Inner content */}
                    <div className="relative overflow-hidden rounded-full aspect-square shadow-2xl">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 py-24 sm:py-28 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-purple-800 mb-20 sm:mb-24 md:mb-28 lg:mb-32 tracking-tight opacity-0 transition-opacity duration-500">Your Journey</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 hidden md:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-16 md:gap-14 lg:gap-16">
              {steps.map((step, index) => (
                <div key={index} 
                     className="fade-in-section journey-step relative opacity-0 will-change-transform" 
                     style={{ 
                       transitionDelay: `${index * 150}ms`,
                       transform: 'translateY(0)',
                       transition: 'all 0.4s ease'
                     }}>
                  <div className="text-center group px-6 sm:px-4 md:px-2">
                    <div className="relative w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-12 sm:mb-10 md:mb-8 rounded-2xl overflow-hidden shadow-xl shadow-purple-400/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-400/30">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-purple-500/50 to-transparent">
                        <i data-lucide={step.icon} className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg transform transition-all duration-500 group-hover:scale-125"></i>
                      </div>
                    </div>
                    <div className="relative space-y-6 sm:space-y-5">
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl sm:text-3xl font-bold text-purple-400/20 transition-all duration-500 group-hover:text-purple-500/30 group-hover:-translate-y-1">{step.number}</span>
                      <h3 className="text-2xl sm:text-2xl font-bold text-purple-800 mb-8 sm:mb-6 transition-colors duration-500 group-hover:text-purple-900 leading-relaxed tracking-wide pt-4">{step.title}</h3>
                      <p className="text-lg sm:text-base md:text-lg text-purple-700 leading-loose max-w-xs mx-auto transition-colors duration-500 group-hover:text-purple-800 tracking-wide">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-purple-800 mb-12 sm:mb-16 md:mb-24 lg:mb-32 tracking-tight opacity-0 transition-opacity duration-500">Community Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} 
                   className="fade-in-section testimonial-card relative opacity-0 will-change-transform group min-h-[400px]" 
                   style={{ 
                     transitionDelay: `${index * 100}ms`,
                     transform: 'translateY(0)',
                     transition: 'all 0.5s ease'
                   }}>
                <div className="relative text-left space-y-4 sm:space-y-6 md:space-y-8 rounded-xl p-6 sm:p-8 transition-all duration-500 h-full
                              bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm
                              hover:bg-white/20 hover:shadow-xl hover:shadow-purple-500/10
                              group-hover:translate-y-[-5px] flex flex-col">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 via-purple-300/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-purple-500/20 via-purple-300/20 to-white/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                  
                  <div className="relative flex-1 flex flex-col">
                    <i data-lucide="quote" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-400/50 mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-400/70"></i>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 italic leading-relaxed flex-1 group-hover:text-purple-800 transition-colors duration-500">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-6 sm:pt-8">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-300/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-purple-800 group-hover:text-purple-900">{testimonial.name}</h4>
                        <p className="text-sm sm:text-base text-purple-600 group-hover:text-purple-700">{testimonial.role} • {testimonial.mbti}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] bg-purple-300/80 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-200/50 via-purple-300/50 to-transparent backdrop-blur-sm"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-300/30 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-amber-300/20 via-amber-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8 md:px-12">
          <div className="fade-in-section opacity-0 space-y-6 sm:space-y-8 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">
              Ready to Transform?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-700 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              Join our community of visionaries and embark on a journey of self-discovery and growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/mbti-test" 
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-amber-400/20 via-amber-300/20 to-amber-400/20 backdrop-blur-md 
                             px-8 sm:px-10 py-3 rounded-full overflow-hidden
                             border border-amber-200/30 shadow-lg shadow-amber-200/20
                             hover:border-amber-300/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-2">
                  <span className="font-medium tracking-wide text-lg sm:text-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent uppercase">
                    Begin Your Journey
                  </span>
                  <i data-lucide="arrow-right" className="w-5 h-5 text-amber-500 transform group-hover:translate-x-1 transition-transform"></i>
                </div>
              </Link>
              <Link href="/community" 
                    className="group relative inline-flex items-center justify-center bg-white/5 backdrop-blur-md 
                             px-8 sm:px-10 py-3 rounded-full
                             border border-purple-300/20 
                             hover:bg-white/10 transition-all duration-500">
                <span className="font-medium text-lg sm:text-xl text-purple-700 group-hover:text-purple-800">
                  Explore Community
                </span>
              </Link>
            </div>
            <div className="pt-8 sm:pt-10 md:pt-12">
              <div className="grid grid-cols-1 sm:flex sm:items-center sm:justify-center gap-6 sm:gap-8 text-purple-700/80">
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">10K+</span>
                  <span className="text-sm sm:text-base">Active Users</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-purple-400/20"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">50K+</span>
                  <span className="text-sm sm:text-base">Growth Records</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-purple-400/20"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold">95%</span>
                  <span className="text-sm sm:text-base">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-purple-300/80 text-purple-800 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <Link href="/" className="flex items-center">
              <div className="text-lg sm:text-xl font-normal tracking-tight">
                <span className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-transparent bg-clip-text">M</span>
                <span className="bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 text-transparent bg-clip-text">Better</span>
                <span className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-transparent bg-clip-text">TI</span>
              </div>
            </Link>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/mbti-test" className="text-purple-700/90 hover:text-purple-800 transition-colors text-xs sm:text-sm">MBTI Test</Link>
              <Link href="/ai-life-coach" className="text-purple-700/90 hover:text-purple-800 transition-colors text-xs sm:text-sm">AI Coach</Link>
              <Link href="/community" className="text-purple-700/90 hover:text-purple-800 transition-colors text-xs sm:text-sm">Community</Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="mailto:support@mbetterti.com" className="text-purple-600/80 hover:text-purple-700 transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link href="https://twitter.com/mbetterti" className="text-purple-600/80 hover:text-purple-700 transition-colors">
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <span className="text-purple-700/70 text-[10px] sm:text-xs">© 2024 MBetterTI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

