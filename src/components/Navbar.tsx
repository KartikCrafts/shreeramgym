import React, { useState } from 'react';
import { Dumbbell, Phone, Menu, X, Sparkles, MapPin, Calendar, Activity } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'schedule', label: 'Timings' },
    { id: 'planner', label: 'Diet Guru', badge: 'AI' },
    { id: 'membership', label: 'Plans' },
    { id: 'trainers', label: 'Coaches' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1C1A17]/95 backdrop-blur-md border-b border-[#D4B996]/25 transition-all duration-300 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Gym Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#A67C52] to-[#7A5A3B] flex items-center justify-center shadow-lg shadow-[#A67C52]/20 group-hover:scale-105 transition-transform duration-300 border border-[#EAD8C0]/40 shrink-0">
              <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFF9F0]" />
            </div>
            <div className="flex flex-col justify-center shrink-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-[#FFF9F0] font-serif leading-none whitespace-nowrap">
                  SHREE RAM <span className="text-[#D4B996] font-sans">GYM</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#D4B996] font-extrabold tracking-widest uppercase mt-1 whitespace-nowrap leading-none drop-shadow-sm">
                Strength
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5 shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#FFF9F0] bg-[#34302A] font-bold shadow-md border border-[#D4B996]/50 scale-105'
                      : 'text-[#D5C9BA] hover:text-[#FFF9F0] hover:bg-[#2A2722]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-gradient-to-r from-[#A67C52] to-[#8C6239] text-white shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-xl text-[#EAD8C0] hover:text-white bg-[#2A2722] hover:bg-[#34302A] text-xs xl:text-sm font-semibold flex items-center gap-1.5 xl:gap-2 transition-all border border-[#D4B996]/30 shadow-xs whitespace-nowrap shrink-0"
              title="Call gym receptionist"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#D4B996] shrink-0" />
              <span className="hidden xl:inline">+91 98765 43210</span>
              <span className="inline xl:hidden">Call</span>
            </a>
            <button
              onClick={onOpenTrialModal}
              className="px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-xs xl:text-sm transition-all duration-200 shadow-lg shadow-[#A67C52]/20 flex items-center gap-1.5 xl:gap-2 hover:translate-y-[-1px] cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#1C1A17] shrink-0" />
              <span>Free Trial</span>
            </button>
          </div>

          {/* Mobile & Laptop hamburger menu button */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenTrialModal}
              className="sm:hidden px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] text-xs font-extrabold shadow-md whitespace-nowrap shrink-0"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#EAD8C0] bg-[#2A2722] border border-[#D4B996]/30 hover:bg-[#34302A] shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Laptop Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#24211D] border-b border-[#D4B996]/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-1 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#34302A] text-[#FFF9F0] font-bold border border-[#D4B996]/50'
                    : 'text-[#D5C9BA] hover:bg-[#2A2722]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-extrabold rounded bg-[#A67C52] text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-700 mt-3 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="w-full py-3 px-4 rounded-xl bg-[#2A2722] border border-[#D4B996]/30 text-[#FFF9F0] text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D4B996]" />
              <span>Call Reception: +91 98765 43210</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] font-extrabold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#1C1A17]" />
              <span>Book Your Free 3-Day Trial Pass</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
