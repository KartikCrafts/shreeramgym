import React, { useState } from 'react';
import { BATCH_SCHEDULES } from '../data/mockData';
import { Clock, User, Calendar, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScheduleSectionProps {
  onSelectBatchForTrial: (batchName: string, time: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onSelectBatchForTrial }) => {
  const [filterType, setFilterType] = useState<'All' | 'Morning' | 'Evening' | 'Special'>('All');

  const filteredSchedules = filterType === 'All'
    ? BATCH_SCHEDULES
    : BATCH_SCHEDULES.filter(b => b.type === filterType);

  return (
    <div className="py-16 lg:py-24 bg-[#1A1816] border-b border-[#D4B996]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B2721] text-[#D4B996] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4B996]/40 shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>Daily Timetable & Batch Slots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF9F0] font-serif tracking-tight">
            Flexible <span className="text-[#D4B996]">Gym Batch Timings</span>
          </h2>
          <p className="text-base text-[#C8BAA8] mt-3 leading-relaxed">
            Whether you prefer the tranquil Brahmamuhurta morning discipline (5:30 AM) or energetic evening sessions after work, we have dedicated slots to keep your routine consistent.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {(['All', 'Morning', 'Evening', 'Special'] as const).map((type) => {
            const isSelected = filterType === type;
            return (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] font-extrabold shadow-lg scale-105'
                    : 'bg-[#24211D] text-[#D5C9BA] hover:bg-[#34302A] border border-[#D4B996]/30'
                }`}
              >
                <span>{type === 'Special' ? 'Ladies & Special Batch' : `${type} Batches`}</span>
                {type === 'Special' && (
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold rounded bg-[#A67C52] text-white">
                    3:30 PM
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Timetable Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSchedules.map((batch, idx) => {
              const isLowSpots = batch.spotsLeft <= 5;
              return (
                <motion.div
                  key={batch.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#24211D] rounded-2xl p-6 border border-[#D4B996]/30 shadow-xl hover:shadow-2xl hover:border-[#D4B996] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2.5 rounded-xl bg-[#34302A] text-[#D4B996] shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#D4B996] tracking-wider uppercase">
                            {batch.days}
                          </span>
                          <h3 className="text-lg font-bold text-[#FFF9F0] font-serif leading-tight mt-0.5">
                            {batch.time}
                          </h3>
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        batch.type === 'Special'
                          ? 'bg-amber-900/60 text-amber-200 border border-amber-600/50'
                          : batch.type === 'Morning'
                          ? 'bg-[#34302A] text-[#EAD8C0] border border-[#D4B996]/30'
                          : 'bg-[#1C1A17] text-[#FFF9F0] border border-[#D4B996]/40'
                      }`}>
                        {batch.type} Batch
                      </span>
                    </div>

                    {/* Batch Name & Details */}
                    <div className="py-4 space-y-3">
                      <h4 className="text-base font-bold text-[#FFF9F0]">
                        {batch.name}
                      </h4>

                      <div className="grid grid-cols-2 gap-2 text-xs text-[#C8BAA8] font-medium">
                        <div className="flex items-center gap-1.5 bg-[#1C1A17] p-2.5 rounded-lg border border-[#D4B996]/20">
                          <User className="w-3.5 h-3.5 text-[#D4B996]" />
                          <span>Coach: <strong className="text-[#FFF9F0]">{batch.trainer}</strong></span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#1C1A17] p-2.5 rounded-lg border border-[#D4B996]/20">
                          <Flame className="w-3.5 h-3.5 text-[#D4B996]" />
                          <span>Level: <strong className="text-[#FFF9F0]">{batch.intensity}</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Capacity & Action Button */}
                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#A89886] font-medium">Available Batch Capacity</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`w-2 h-2 rounded-full ${isLowSpots ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                        <span className={`text-xs font-bold ${isLowSpots ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {batch.spotsLeft} spots remaining
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectBatchForTrial(batch.name, batch.time)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] hover:opacity-95 text-[#1C1A17] text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer hover:scale-105"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#1C1A17]" />
                      <span>Book Trial Slot</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Special Batch Highlights Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#24211D] via-[#2B2721] to-[#24211D] border border-[#D4B996]/40 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center shadow-xl"
        >
          <div className="lg:col-span-2 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4B996] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Special Note For Women Members</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FFF9F0]">
              Dedicated Ladies Special Batch at 3:30 PM — 5:00 PM
            </h3>
            <p className="text-sm text-[#C8BAA8] leading-relaxed">
              Led exclusively by master trainer Anjali Sharma. Features targeted core stability, Zumba, post-natal fitness, and full privacy with supportive women instructors.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <button
              onClick={() => onSelectBatchForTrial('Ladies Special Fitness & Zumba', '03:30 PM - 05:00 PM')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] text-[#1C1A17] font-extrabold text-sm uppercase tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <CheckCircle2 className="w-4 h-4 text-[#1C1A17]" />
              <span>Reserve Ladies Trial Slot</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
