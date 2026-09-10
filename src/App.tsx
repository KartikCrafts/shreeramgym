/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { FitnessPlanner } from './components/FitnessPlanner';
import { MembershipSection } from './components/MembershipSection';
import { TrainersSection } from './components/TrainersSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FooterModal } from './components/FooterModal';
import { Sparkles, Calendar, Dumbbell, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [selectedBatchName, setSelectedBatchName] = useState<string | undefined>(undefined);
  const [selectedBatchTime, setSelectedBatchTime] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Scroll handler for floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section jumping
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tabId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSelectBatchForTrial = (name: string, time: string) => {
    setSelectedBatchName(name);
    setSelectedBatchTime(time);
    setIsTrialModalOpen(true);
  };

  const handleSelectPlan = (planName: string, price: number) => {
    setSelectedBatchName(`${planName} Plan (₹${price.toLocaleString('en-IN')})`);
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#1A1816] text-[#EAD8C0] font-sans selection:bg-[#A67C52] selection:text-white relative">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenTrialModal={() => {
          setSelectedBatchName(undefined);
          setSelectedBatchTime(undefined);
          setIsTrialModalOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* HERO SECTION */}
        <section id="home">
          <HeroSection
            onExplorePrograms={() => handleTabChange('programs')}
            onOpenPlanner={() => handleTabChange('planner')}
            onOpenTrialModal={() => {
              setSelectedBatchName(undefined);
              setIsTrialModalOpen(true);
            }}
          />
        </section>

        {/* WORKOUT PROGRAMS */}
        <section id="programs">
          <ProgramsSection
            onOpenPlanner={() => handleTabChange('planner')}
          />
        </section>

        {/* WHY CHOOSE US & AKHADA PHILOSOPHY (NEW WHITE THEME SECTION) */}
        <section id="why-us">
          <WhyChooseUsSection
            onExploreTimings={() => handleTabChange('schedule')}
            onOpenTrialModal={() => {
              setSelectedBatchName(undefined);
              setIsTrialModalOpen(true);
            }}
          />
        </section>

        {/* BATCH TIMINGS & SCHEDULE */}
        <section id="schedule">
          <ScheduleSection
            onSelectBatchForTrial={handleSelectBatchForTrial}
          />
        </section>

        {/* AI FITNESS & DIET PLANNER */}
        <section id="planner">
          <FitnessPlanner />
        </section>

        {/* MEMBERSHIP PLANS */}
        <section id="membership">
          <MembershipSection
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
            onSelectPlan={handleSelectPlan}
          />
        </section>

        {/* TRAINERS & TESTIMONIALS */}
        <section id="trainers">
          <TrainersSection />
        </section>
      </main>

      {/* FOOTER & TRIAL MODAL */}
      <FooterModal
        isTrialModalOpen={isTrialModalOpen}
        onCloseTrialModal={() => setIsTrialModalOpen(false)}
        selectedBatchName={selectedBatchName}
        selectedBatchTime={selectedBatchTime}
      />

      {/* Floating Quick Action Bar / Back to top for better UX */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
        
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-[#2A2722]/90 backdrop-blur-md text-[#EAD8C0] hover:bg-[#A67C52] hover:text-white border border-[#D4B996]/30 shadow-xl transition-all pointer-events-auto cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setIsTrialModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-xs sm:text-sm tracking-wide uppercase shadow-xl shadow-[#A67C52]/20 border border-[#FFF9F0]/40 flex items-center gap-2 transition-all hover:scale-105 pointer-events-auto cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#1C1A17] animate-pulse" />
          <span>Book Free Trial Pass</span>
        </button>
      </div>

    </div>
  );
}

