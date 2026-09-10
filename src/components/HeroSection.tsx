import React, { useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Dumbbell, Award, HeartPulse, Clock, Users, Flame, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroSectionProps {
  onExplorePrograms: () => void;
  onOpenPlanner: () => void;
  onOpenTrialModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onOpenPlanner,
  onOpenTrialModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for background elements & hero image
  const bgParallax1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgParallax2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const floatingBadge1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const floatingBadge2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#FDFCF7] border-b border-stone-200/80 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle decorative background gradient accents with parallax */}
      <motion.div 
        style={{ y: bgParallax1 }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#EAD8C0]/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        style={{ y: bgParallax2 }}
        className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#D4B996]/20 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Spiritual & Aesthetic Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAD8C0]/50 border border-[#D4B996]/60 text-[#6B4F31] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-xs"
            >
              <span className="text-[#8C6239] font-bold">🙏 जय श्री राम</span>
              <span className="h-3 w-px bg-[#8C6239]/30" />
              <span>Pure Vedic Discipline • Modern Sports Science</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12] font-serif">
              Where <span className="text-[#A67C52]">Devotion</span> Meets Unbreakable <span className="underline decoration-[#A67C52] decoration-4 underline-offset-4">Strength</span>.
            </h1>

            {/* Subtitle / Hinglish description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <strong className="text-stone-900 font-semibold">Shree Ram GYM</strong> — your sanctuary for physical transformation and mental resilience. Experience our signature eye-friendly training floor, calibrated lifting racks, and personalized <span className="text-[#8C6239] font-medium">Satvik & Western Diet Guidance</span> tailored for Indian lifestyles.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1">
              {[
                "100% Customized Veg & Non-Veg Diets",
                "Certified Master Trainers",
                "Special Ladies Batch (3:30 PM)"
              ].map((pill, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8F6F0] border border-stone-200 text-stone-800 text-xs font-medium shadow-2xs hover:border-[#D4B996] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6239]" />
                  {pill}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#EAD8C0] font-extrabold text-base transition-all duration-200 shadow-md flex items-center justify-center gap-2 hover:translate-y-[-2px] cursor-pointer"
              >
                <span>Explore Workout Programs</span>
                <ArrowRight className="w-4 h-4 text-[#D4B996]" />
              </button>
              
              <button
                onClick={onOpenPlanner}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#EFECE6] hover:bg-[#E5DFD5] text-stone-900 font-semibold text-base transition-all duration-200 border border-stone-300/70 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8C6239]" />
                <span>BMI & Diet Guru</span>
              </button>
            </div>

            {/* Quick Trust Bar */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-stone-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8C6239]" />
                <span>No Crowded Toxic Atmosphere</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8C6239]" />
                <span>Form First Coaching</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase with Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Decorative background card frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#A67C52]/20 via-[#EAD8C0]/50 to-transparent blur-lg transform -rotate-1" />

              {/* Main Photo Card with Parallax Image Shift */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-200/80 bg-white shadow-2xl group">
                <motion.img
                  style={{ y: imageParallax }}
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                  alt="Shree Ram GYM Modern Strength Equipment"
                  className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-md bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider">
                      Main Floor Area
                    </span>
                    <span className="text-xs text-[#EAD8C0] font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 5:30 AM — 10:00 PM
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Calibrated Racks & Akhada Conditioning
                  </h3>
                  <p className="text-xs text-[#EAD8C0] mt-1 line-clamp-2">
                    Designed for maximum focus, eye-friendly lighting, and uncompromised form correction by head coach Vikram Sinh.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left) with Parallax */}
              <motion.div 
                style={{ y: floatingBadge1 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md border border-stone-200 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-[#EFECE6] text-[#8C6239]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">Active Community</p>
                  <p className="text-lg font-bold text-stone-900">500+ Proud Members</p>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 (Bottom Right) with Parallax */}
              <motion.div 
                style={{ y: floatingBadge2 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md border border-stone-200 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-[#EFECE6] text-[#8C6239]">
                  <Flame className="w-6 h-6 text-[#8C6239]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wider">Result Rate</p>
                  <p className="text-lg font-bold text-stone-900">98% Goal Success</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Bottom 4-Column Quick Stats / Features Grid with Staggered Scroll Entrance/Exit */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: Dumbbell,
              title: "10,000+ sq.ft",
              desc: "Spacious, air-conditioned studio with dedicated cardio & heavy strength floors."
            },
            {
              icon: HeartPulse,
              title: "Satvik Diet Coach",
              desc: "Customized diet plans for vegetarian, Jain, eggetarian, and non-veg preferences."
            },
            {
              icon: Award,
              title: "4 Master Coaches",
              desc: "Certified professionals providing daily form corrections without extra fees."
            },
            {
              icon: Clock,
              title: "15 Daily Batches",
              desc: "From 5:30 AM Brahmamuhurta to 9:30 PM late evening batches for your convenience."
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:border-[#D4B996] hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFECE6] flex items-center justify-center text-[#8C6239] mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="text-xs text-stone-600 mt-1">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

