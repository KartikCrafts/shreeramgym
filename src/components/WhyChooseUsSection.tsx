import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HeartPulse, 
  Dumbbell, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Sun, 
  Users, 
  Award, 
  Eye, 
  Flame, 
  Coffee, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WhyChooseUsSectionProps {
  onExploreTimings: () => void;
  onOpenTrialModal: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onExploreTimings,
  onOpenTrialModal,
}) => {
  const [activeZone, setActiveZone] = useState<'lifting' | 'akhada' | 'diet' | 'ladies'>('lifting');

  const zoneData = {
    lifting: {
      title: 'Calibrated Powerlifting & Strength Floor',
      subtitle: 'Engineered for maximum mechanical efficiency without eye strain',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      description: 'Our main lifting floor features IPF-standard calibrated barbells, heavy-duty power cages, and ergonomic isolation machines. Unlike typical dark gym basements, we use soft, eye-friendly ambient lighting and high-airflow ventilation so you can train hard without mental fatigue.',
      stats: ['IPF Calibrated Plates', '10,000+ sq.ft Area', 'Zero-Wait Rack System'],
      tag: 'Main Floor'
    },
    akhada: {
      title: 'Traditional Vedic Akhada Conditioning Zone',
      subtitle: 'Where ancient Indian functional strength meets modern endurance',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Build unbreakable grip strength, shoulder stability, and core endurance using traditional Gada (macebells), Mugdars (Indian clubs), and thick hemp rope climbs. Head Coach Vikram Sinh incorporates these timeless Pehlwani conditioning routines into modern fitness programs.',
      stats: ['Gada & Mugdar Training', 'Functional Rope Climbing', 'Core & Grip Mastery'],
      tag: 'Vedic Power'
    },
    diet: {
      title: 'Satvik Nutrition & Ayurvedic Refresh Bar',
      subtitle: 'Real Indian household diet guidance that fits your culture and lifestyle',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
      description: 'We reject the toxic industry trend of forcing boiled chicken or expensive supplements on everyone. Our certified dieticians craft customized vegetarian, Jain, eggetarian, and non-veg meal plans using daily Indian kitchen staples like Soya Bhurji, Paneer, Dal, Curd, and Whey.',
      stats: ['100% Customized Plans', 'Jain & Satvik Friendly', 'Fresh Post-Workout Juices'],
      tag: 'Nutrition Hub'
    },
    ladies: {
      title: 'Ladies Special Batch & Privacy Studio',
      subtitle: 'A respectful, empowering environment with dedicated female coaches',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: 'We conduct a dedicated Ladies Special Batch every afternoon (3:30 PM - 4:30 PM) supervised by Coach Anjali Desai. The studio offers a comfortable, highly respectful atmosphere focused on postpartum recovery, PCOS management, fat shredding, and full-body toning.',
      stats: ['Dedicated 3:30 PM Slot', 'Female Master Trainer', 'PCOS & Core Focus'],
      tag: 'Women Fitness'
    }
  };

  const pillarItems = [
    {
      icon: Eye,
      tag: 'Ergonomic Comfort',
      title: 'Eye-Safe & Spacious Floor',
      desc: 'No claustrophobic basements with glaring neon lights. Our 10,000+ sq.ft studio uses natural ambient lighting and high-airflow ventilation to keep your mind focused and calm.',
      badge: 'Zero Eye & Mental Fatigue'
    },
    {
      icon: HeartPulse,
      tag: 'Indian Kitchen Focused',
      title: 'Satvik & Western Diets',
      desc: 'Whether you follow a strict Jain, vegetarian, eggetarian, or non-veg diet, our gurus build realistic meal plans using homemade staples like Soya, Paneer, Dal, and Whey.',
      badge: '100% Customized For You'
    },
    {
      icon: Award,
      tag: 'No Hidden Charges',
      title: 'Free Daily Form Coaching',
      desc: 'In typical gyms, trainers ignore you unless you pay ₹15,000+ for personal training. Here, our 4 master coaches actively supervise lifting posture for every member at zero extra cost.',
      badge: 'Active Floor Supervision'
    },
    {
      icon: Dumbbell,
      tag: 'Ancient & Modern Power',
      title: 'Vedic Akhada & Modern Racks',
      desc: 'Train with traditional Gada (macebell), Mugdar, and rope climbing for unbeatable grip and core power, alongside IPF-calibrated barbells and modern isolation machines.',
      badge: 'Complete Functional Strength'
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-[#FDFCF7] border-b border-stone-200/80 text-stone-800 relative overflow-hidden">
      {/* Subtle background decorative glows matching the website neutral warm palette */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#EAD8C0]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4B996]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAD8C0]/50 text-[#6B4F31] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4B996]/50 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#8C6239]" />
            <span>The Shree Ram GYM Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-serif tracking-tight leading-tight">
            Why We Stand Apart From <span className="text-[#A67C52] underline decoration-[#D4B996] decoration-4 underline-offset-4">Commercial Gyms</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed font-normal">
            We combine the spiritual purity and unbreakable strength of traditional Indian Akhada culture with modern sports science, calibrated equipment, and an atmosphere of pure devotion.
          </p>
        </motion.div>

        {/* 4 CORE PILLARS GRID WITH MOTION ENTRY & EXIT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillarItems.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-[#D4B996] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EFECE6] group-hover:bg-[#8C6239] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#8C6239] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A67C52] block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 font-serif mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6239]" />
                  <span>{pillar.badge}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPARISON MATRIX WITH MOTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-10 mb-20 overflow-hidden"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C6239] block mb-1">
              Honest Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Shree Ram GYM vs. Regular Commercial Gyms
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              See why over 500+ members switched to our disciplined community.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-4 px-4 text-sm font-extrabold text-stone-500 uppercase tracking-wider w-1/3">
                    Feature & Standard
                  </th>
                  <th className="py-4 px-4 text-base font-extrabold text-stone-400 w-1/3 bg-stone-50/50 rounded-tl-2xl">
                    Regular Commercial Gyms
                  </th>
                  <th className="py-4 px-4 text-base font-extrabold text-[#8C6239] w-1/3 bg-[#F8F6F0] rounded-tr-2xl border-t-2 border-x-2 border-[#D4B996]/40">
                    🙏 Shree Ram GYM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm">
                
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                >
                  <td className="py-4 px-4 font-bold text-stone-900">
                    Floor Vibe & Atmosphere
                  </td>
                  <td className="py-4 px-4 text-stone-500 bg-stone-50/30">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Loud toxic music, ego lifting & crowded queues</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-stone-900 bg-[#F8F6F0] border-x-2 border-[#D4B996]/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Calm devotion, positive discipline & mutual respect</span>
                    </div>
                  </td>
                </motion.tr>

                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <td className="py-4 px-4 font-bold text-stone-900">
                    Daily Form Coaching
                  </td>
                  <td className="py-4 px-4 text-stone-500 bg-stone-50/30">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Ignored unless you pay ₹15,000+ for Personal Training</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-stone-900 bg-[#F8F6F0] border-x-2 border-[#D4B996]/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% FREE daily posture correction by master coaches</span>
                    </div>
                  </td>
                </motion.tr>

                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <td className="py-4 px-4 font-bold text-stone-900">
                    Diet & Nutrition Support
                  </td>
                  <td className="py-4 px-4 text-stone-500 bg-stone-50/30">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Copy-paste boiled chicken/salad PDFs & supplement sales</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-stone-900 bg-[#F8F6F0] border-x-2 border-[#D4B996]/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Tailored Indian Satvik, Jain, Veg & Non-Veg household plans</span>
                    </div>
                  </td>
                </motion.tr>

                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <td className="py-4 px-4 font-bold text-stone-900">
                    Lighting & Air Ergonomics
                  </td>
                  <td className="py-4 px-4 text-stone-500 bg-stone-50/30 rounded-bl-2xl">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Harsh neon lighting & stuffy unventilated basements</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-stone-900 bg-[#F8F6F0] rounded-br-2xl border-b-2 border-x-2 border-[#D4B996]/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Eye-safe ambient lighting & hospital-grade airflow</span>
                    </div>
                  </td>
                </motion.tr>

              </tbody>
            </table>
          </div>
        </motion.div>

        {/* INTERACTIVE FACILITY TOUR / ZONE SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8F6F0] rounded-3xl border border-stone-200/90 p-6 sm:p-10 mb-16 shadow-xs"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6239] block mb-1">
                Virtual Tour & Highlights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                Explore Our Specialized Training Zones
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Select a zone below to see our premium equipment and Akhada facilities.
              </p>
            </div>

            {/* Zone Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'lifting', label: 'Lifting Floor', icon: Dumbbell },
                { id: 'akhada', label: 'Vedic Akhada', icon: Flame },
                { id: 'diet', label: 'Satvik Diet Hub', icon: Coffee },
                { id: 'ladies', label: 'Ladies Studio', icon: Users },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeZone === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveZone(tab.id as any)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white shadow-md scale-105'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#D4B996]' : 'text-[#8C6239]'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Card with Motion Switch */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeZone}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm"
            >
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-block px-3 py-1 rounded-md bg-[#EFECE6] text-[#8C6239] text-xs font-extrabold uppercase tracking-wider">
                  {zoneData[activeZone].tag}
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-tight">
                  {zoneData[activeZone].title}
                </h4>
                <p className="text-sm font-semibold text-[#8C6239]">
                  {zoneData[activeZone].subtitle}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {zoneData[activeZone].description}
                </p>
                
                <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                  {zoneData[activeZone].stats.map((stat, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#F8F6F0] border border-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6239]" />
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 h-72 sm:h-80 bg-stone-100 group">
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={zoneData[activeZone].image}
                  alt={zoneData[activeZone].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                  <div className="text-white">
                    <span className="text-xs font-medium text-[#EAD8C0] block">Shree Ram GYM Facility</span>
                    <p className="text-base font-bold text-white font-serif">{zoneData[activeZone].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM ACTION BAR WITH MOTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-[#D4B996]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-2 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#A67C52] text-white text-[11px] font-extrabold uppercase tracking-widest inline-block">
              Ready To Experience The Difference?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FFF9F0]">
              Explore Our Batch Slots or Claim Your 3-Day Trial
            </h3>
            <p className="text-xs sm:text-sm text-[#D4B996] font-medium">
              We conduct 15 daily batches from 5:30 AM Brahmamuhurta to 9:30 PM evening slots.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onExploreTimings}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-sm transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>View Batch Timings Below</span>
              <ArrowRight className="w-4 h-4 text-[#1C1A17]" />
            </button>
            <button
              onClick={onOpenTrialModal}
              className="px-6 py-3.5 rounded-xl bg-[#2A2722] hover:bg-[#34302A] text-[#FFF9F0] font-bold text-sm border border-[#D4B996]/40 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-[#D4B996]" />
              <span>Book Free Trial</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

