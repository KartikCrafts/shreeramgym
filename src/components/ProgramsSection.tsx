import React, { useState } from 'react';
import { WORKOUT_PROGRAMS } from '../data/mockData';
import { WorkoutProgram, ProgramCategory } from '../types';
import { Flame, Clock, User, CheckCircle2, Dumbbell, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProgramsSectionProps {
  onOpenPlanner: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenPlanner }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<WorkoutProgram | null>(null);

  const categories: { id: ProgramCategory; label: string; hindi?: string }[] = [
    { id: 'all', label: 'All Programs', hindi: 'सभी प्रशिक्षण' },
    { id: 'strength', label: 'Strength & Bodybuilding', hindi: 'शक्ति व मांसपेशी' },
    { id: 'weightloss', label: 'Fat Shred & HIIT', hindi: 'वजन घटाना' },
    { id: 'functional', label: 'Akhada Functional', hindi: 'फंक्शनल एवं कोर' },
    { id: 'yoga', label: 'Surya Yoga & Core', hindi: 'योग एवं लचीलापन' },
    { id: 'cardio', label: 'Cardio & Stamina', hindi: 'सहनशक्ति' },
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? WORKOUT_PROGRAMS
    : WORKOUT_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16 lg:py-24 bg-[#1E1C1A] border-b border-[#D4B996]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B2721] text-[#D4B996] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4B996]/40 shadow-sm">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Structured Training Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF9F0] font-serif tracking-tight">
            Our Specialized <span className="text-[#D4B996]">Workout Programs</span>
          </h2>
          <p className="text-base text-[#C8BAA8] mt-3 leading-relaxed">
            From traditional Vedic Akhada macebell conditioning to modern biomechanical bodybuilding and serene yoga flows — choose the path that aligns with your fitness goals.
          </p>
        </motion.div>

        {/* Category Filter Tabs with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex flex-col items-center sm:flex-row sm:gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] font-extrabold shadow-lg scale-105'
                    : 'bg-[#24211D] text-[#D5C9BA] hover:bg-[#34302A] border border-[#D4B996]/30'
                }`}
              >
                <span>{cat.label}</span>
                {cat.hindi && (
                  <span className={`text-[11px] font-normal ${isSelected ? 'text-[#1C1A17] font-semibold' : 'text-[#A89886]'}`}>
                    ({cat.hindi})
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Programs Grid with Motion Scroll Entry & Exit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#24211D] rounded-2xl overflow-hidden border border-[#D4B996]/30 shadow-xl hover:shadow-2xl hover:border-[#D4B996] transition-all duration-300 flex flex-col group"
              >
                {/* Program Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-[#1C1A17]">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D] via-[#24211D]/40 to-transparent" />
                  
                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-[#1C1A17]/90 backdrop-blur-xs text-[#D4B996] text-xs font-extrabold uppercase tracking-wider border border-[#D4B996]/40">
                      {prog.intensity}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#34302A]/95 text-[#FFF9F0] text-xs font-bold flex items-center gap-1 shadow-md border border-[#D4B996]/30">
                      <Flame className="w-3.5 h-3.5 text-[#D4B996]" />
                      {prog.caloriesBurn}
                    </span>
                  </div>

                  {/* Bottom title inside image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    {prog.hindiTitle && (
                      <p className="text-xs font-semibold text-[#D4B996] tracking-wide">
                        {prog.hindiTitle}
                      </p>
                    )}
                    <h3 className="text-xl font-bold font-serif text-[#FFF9F0] leading-tight">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Trainer & Duration */}
                    <div className="flex items-center justify-between text-xs text-[#A89886] pb-3 border-b border-stone-800 mb-3">
                      <span className="flex items-center gap-1.5 font-semibold text-[#EAD8C0]">
                        <User className="w-3.5 h-3.5 text-[#D4B996]" />
                        {prog.trainerName}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-[#D5C9BA]">
                        <Clock className="w-3.5 h-3.5 text-[#D4B996]" />
                        {prog.duration}
                      </span>
                    </div>

                    <p className="text-sm text-[#C8BAA8] leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>

                    {/* Bullet points */}
                    <ul className="mt-4 space-y-2">
                      {prog.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#EAD8C0] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#D4B996] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProgram(prog)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#2B2721] hover:bg-[#36312A] text-[#FFF9F0] font-bold text-xs uppercase tracking-wider transition-colors border border-[#D4B996]/40 text-center cursor-pointer"
                    >
                      View Curriculum
                    </button>
                    <button
                      onClick={onOpenPlanner}
                      className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] hover:opacity-90 transition-all shadow-md cursor-pointer"
                      title="Get AI Diet & Workout Plan for this program"
                    >
                      <Sparkles className="w-4 h-4 text-[#1C1A17]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner CTA with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-[#24211D] via-[#2B2721] to-[#24211D] rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#D4B996]/40"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FFF9F0]">
              Not sure which training program is right for your body?
            </h3>
            <p className="text-sm text-[#C8BAA8] mt-2">
              Use our built-in <strong className="text-[#D4B996]">AI Diet & BMI Planner</strong> to get an instant customized workout split and Indian diet chart based on your height, weight, and fitness goal!
            </p>
          </div>
          <button
            onClick={onOpenPlanner}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-sm tracking-wide uppercase transition-all duration-200 shrink-0 shadow-xl flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-[#1C1A17]" />
            <span>Launch Free Fitness Guru</span>
          </button>
        </motion.div>

      </div>

      {/* Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#24211D] text-[#FFF9F0] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4B996]/40 shadow-2xl relative"
          >
            
            {/* Modal Header Image */}
            <div className="relative h-56 sm:h-64 bg-[#1C1A17]">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24211D] via-[#24211D]/40 to-transparent" />
              <button
                onClick={() => setActiveModalProgram(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1C1A17]/90 text-white hover:bg-[#A67C52] transition-colors cursor-pointer border border-[#D4B996]/30"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-md bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block shadow-sm">
                  {activeModalProgram.category.toUpperCase()} • {activeModalProgram.intensity}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FFF9F0]">
                  {activeModalProgram.title}
                </h3>
                {activeModalProgram.hindiTitle && (
                  <p className="text-sm text-[#D4B996] font-semibold mt-0.5">
                    {activeModalProgram.hindiTitle}
                  </p>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#2B2721] border border-[#D4B996]/30 text-center">
                <div>
                  <p className="text-xs text-[#A89886] uppercase font-semibold">Coach</p>
                  <p className="text-sm font-bold text-[#FFF9F0] mt-0.5">{activeModalProgram.trainerName}</p>
                </div>
                <div>
                  <p className="text-xs text-[#A89886] uppercase font-semibold">Session Duration</p>
                  <p className="text-sm font-bold text-[#FFF9F0] mt-0.5">{activeModalProgram.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#A89886] uppercase font-semibold">Est. Calorie Burn</p>
                  <p className="text-sm font-bold text-[#D4B996] mt-0.5">{activeModalProgram.caloriesBurn}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-base font-bold text-[#FFF9F0] mb-2 font-serif">About This Program</h4>
                <p className="text-sm text-[#C8BAA8] leading-relaxed">
                  {activeModalProgram.description}
                </p>
              </div>

              {/* All Features Checklist */}
              <div>
                <h4 className="text-base font-bold text-[#FFF9F0] mb-3 font-serif">Key Training Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProgram.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#1E1C1A] border border-[#D4B996]/30 text-xs sm:text-sm font-medium text-[#EAD8C0]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4B996] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Weekly Flow */}
              <div className="p-4 rounded-2xl bg-[#1C1A17] text-white space-y-2 border border-[#D4B996]/30">
                <div className="flex items-center gap-2 text-[#D4B996] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Sample Weekly Structure</span>
                </div>
                <p className="text-xs text-[#C8BAA8] leading-relaxed">
                  Monday/Thursday: Heavy compound lifts & core stability • Tuesday/Friday: Accessory isolation & functional agility • Wednesday/Saturday: Mobility, cardio intervals & Akhada conditioning.
                </p>
              </div>

              {/* Modal Footer Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalProgram(null)}
                  className="px-5 py-3 rounded-xl border border-stone-700 text-[#D5C9BA] font-semibold text-sm hover:bg-[#34302A] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setActiveModalProgram(null);
                    onOpenPlanner();
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] font-extrabold text-sm tracking-wide uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:opacity-95"
                >
                  <Sparkles className="w-4 h-4 text-[#1C1A17]" />
                  <span>Customize Diet & Workout For Me</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

