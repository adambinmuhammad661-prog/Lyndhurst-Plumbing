/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Droplets, 
  Wrench, 
  Zap, 
  Leaf, 
  ShieldCheck, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-brand-blue p-1.5 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className={cn(
                "text-xl font-display font-bold tracking-tight",
                isScrolled ? "text-brand-dark" : "text-white"
              )}>
                Lyndhurst <span className="text-brand-green">Plumbing</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-brand-green transition-colors",
                  isScrolled ? "text-gray-600" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:01189000000" 
              className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Phone size={16} />
              0118 900 0000
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg",
                isScrolled ? "text-brand-dark" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:01189000000" 
                  className="w-full bg-brand-blue text-white px-5 py-3 rounded-xl font-bold flex justify-center items-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Bathroom Plumbing" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-green/20 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              Trusted Reading Plumbing & Heating
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Expert Plumbing & Heating Services in <span className="text-brand-blue">Reading</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Reliable, efficient, and professional solutions for your home or business. From emergency repairs to eco-friendly heating systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20"
              >
                Request a Quote
                <ArrowRight size={20} />
              </a>
              <a 
                href="tel:01189000000" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={20} />
                Call 0118 900 0000
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-brand-dark"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-400"><span className="text-white font-bold">500+</span> Happy Local Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-10 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
        >
          <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green">
            <ShieldCheck size={32} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified</p>
            <p className="text-sm font-bold text-brand-dark">Gas Safe Registered Engineers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Plumbing",
      description: "From leaky taps to full bathroom installations, we handle all your domestic plumbing needs.",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Boiler Services",
      description: "Expert installation, repair, and annual servicing for all major boiler brands.",
      icon: <Flame className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Central Heating",
      description: "Full system design and maintenance to keep your home warm and energy-efficient.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 rapid response for burst pipes, blockages, and heating failures in Reading.",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Renewable Energy",
      description: "Future-proof your home with air source heat pumps and solar thermal solutions.",
      icon: <Leaf className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "MEP Services",
      description: "Comprehensive Mechanical, Electrical, and Plumbing solutions for commercial projects.",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Our Professional Services</h2>
          <p className="text-lg text-gray-600">
            We provide a comprehensive range of plumbing and heating solutions tailored to the needs of Reading homeowners and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Jim Pithers working" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-blue text-white p-8 rounded-3xl shadow-xl z-20 hidden sm:block">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-green/10 rounded-full -z-10 blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">About the Owner</span>
            <h2 className="text-4xl md:text-5xl mb-8">Meet Jim Pithers</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                As the founder of <span className="text-brand-dark font-bold">Lyndhurst Plumbing & Heating LTD</span>, I've dedicated my career to providing Reading and the surrounding areas with top-tier mechanical and plumbing services.
              </p>
              <p>
                With deep expertise in MEP systems and a passion for renewable energy solutions, I specialize in modernizing UK homes to be more energy-efficient and comfortable.
              </p>
              <p>
                Whether it's a simple repair or a complex commercial installation, my commitment remains the same: professional service, transparent pricing, and work that lasts.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-brand-dark">Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-brand-dark">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-brand-dark">Local Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-brand-dark">Renewable Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced & Qualified",
      desc: "Over two decades of hands-on experience in complex plumbing and heating systems.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Fast & Reliable",
      desc: "We respect your time. Punctual arrivals and efficient work to minimize disruption.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Modern Solutions",
      desc: "Specialists in energy-efficient boilers and renewable heating technologies.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Trusted Local Business",
      desc: "A Reading-based company built on reputation and word-of-mouth recommendations.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Why Reading Homeowners <span className="text-brand-blue">Trust Us</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              We don't just fix pipes; we provide peace of mind with quality craftsmanship and honest advice.
            </p>
            
            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-6">
                  <div className="bg-brand-blue/20 p-4 rounded-2xl text-brand-blue shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-12">
              <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Plumbing Work" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Heating System" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Professional Tools" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Renewable Energy" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Caversham, Reading",
      text: "Jim was fantastic. He arrived exactly when he said he would and fixed our boiler issue in no time. Very professional and tidy. Highly recommend!",
      rating: 5
    },
    {
      name: "Mark Thompson",
      location: "Earley, Reading",
      text: "We had a full central heating system installed by Lyndhurst. The quality of work is exceptional and our energy bills have already started to drop.",
      rating: 5
    },
    {
      name: "David Wilson",
      location: "Woodley, Reading",
      text: "Excellent MEP service for our small business unit. Jim's knowledge of renewable systems helped us choose the right heat pump for our needs.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Don't just take our word for it—hear from your neighbors in Reading.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-brand-dark">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
              <div className="absolute top-8 right-8 text-gray-200">
                <MessageCircle size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  const areas = ["Reading", "Caversham", "Earley", "Woodley", "Tilehurst", "Wokingham", "Bracknell", "Henley-on-Thames"];

  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-8">Serving Reading & Beyond</h2>
            <p className="text-xl opacity-90 mb-10">
              We are proud to be a local business serving the heart of Berkshire. If you're in or around Reading, we've got you covered.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin size={16} className="text-brand-green" />
                  <span className="font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-80 rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" 
              alt="Map area" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green animate-ping rounded-full opacity-75"></div>
                <div className="relative bg-brand-green p-4 rounded-full shadow-lg">
                  <MapPin size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Plumbing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request has been sent. We'll be in touch shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-10">
              Ready to start your project or need an emergency repair? Contact us today for a free, no-obligation quote.
            </p>
            
            <div className="space-y-6">
              <a href="tel:01189000000" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Call Us</p>
                  <p className="text-xl font-bold text-brand-dark">0118 900 0000</p>
                </div>
              </a>
              
              <a href="mailto:info@lyndhurstplumbing.co.uk" className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Email Us</p>
                  <p className="text-lg font-bold text-brand-dark">info@lyndhurstplumbing.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Working Hours</p>
                  <p className="text-lg font-bold text-brand-dark">Mon - Sat: 8am - 6pm</p>
                  <p className="text-xs text-rose-600 font-bold">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Required</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>General Plumbing</option>
                      <option>Boiler Installation</option>
                      <option>Boiler Repair/Service</option>
                      <option>Central Heating</option>
                      <option>Renewable Energy</option>
                      <option>Emergency Callout</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/20"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-brand-blue p-1.5 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Lyndhurst <span className="text-brand-green">Plumbing</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Professional plumbing and heating services for Reading and the surrounding Berkshire area. Gas Safe registered and fully insured.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Jim</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Boiler Installations</li>
              <li>Emergency Plumbing</li>
              <li>Central Heating</li>
              <li>Renewable Energy</li>
              <li>MEP Services</li>
              <li>Bathroom Fitting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-blue shrink-0" />
                <span>Reading, Berkshire, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <span>0118 900 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <span>info@lyndhurstplumbing.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Lyndhurst Plumbing & Heating LTD. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-8">Need urgent plumbing or heating help?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Don't wait for a small leak to become a big problem. Our emergency team is ready to help you 24/7.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:01189000000" 
            className="bg-white text-brand-green px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-xl"
          >
            <Phone size={24} />
            Call Us Now
          </a>
          <a 
            href="https://wa.me/441189000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
          >
            <MessageCircle size={24} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/441189000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}

