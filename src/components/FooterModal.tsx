import React, { useState } from 'react';
import { Dumbbell, MapPin, Phone, Clock, X, CheckCircle2, Sparkles, Calendar, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterModalProps {
  isTrialModalOpen: boolean;
  onCloseTrialModal: () => void;
  selectedBatchName?: string;
  selectedBatchTime?: string;
}

export const FooterModal: React.FC<FooterModalProps> = ({
  isTrialModalOpen,
  onCloseTrialModal,
  selectedBatchName,
  selectedBatchTime,
}) => {
  // Trial Form State
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [prefBatch, setPrefBatch] = useState(selectedBatchName || 'Brahmamuhurta Morning (5:30 AM)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update preferred batch if passed via props
  React.useEffect(() => {
    if (selectedBatchName) {
      setPrefBatch(`${selectedBatchName} (${selectedBatchTime || ''})`);
    }
  }, [selectedBatchName, selectedBatchTime]);

  const handleSubmitTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setIsSubmitted(true);
  };

  const handleResetModal = () => {
    setIsSubmitted(false);
    setUserName('');
    setUserPhone('');
    onCloseTrialModal();
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#1C1A17] text-[#C8BAA8] pt-16 pb-12 border-t border-[#D4B996]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800"
          >
            
            {/* Col 1: Branding & Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4B996] to-[#A67C52] flex items-center justify-center text-[#1C1A17] shadow-md font-extrabold">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-[#FFF9F0] font-serif">
                  SHREE RAM <span className="text-[#D4B996] font-sans">GYM</span>
                </span>
              </div>
              <p className="text-xs text-[#A89886] leading-relaxed">
                Where devotion meets discipline. A premium, eye-friendly fitness studio combining traditional Indian Akhada strength concepts with modern biomechanics and pure Satvik diet coaching.
              </p>
              <div className="text-xs font-semibold text-[#D4B996] flex items-center gap-1.5 pt-1">
                <span className="text-amber-400">🙏</span>
                <span>जय श्री राम • 100% Satvik & Modern Gym</span>
              </div>
            </div>

            {/* Col 2: Quick Navigation */}
            <div>
              <h4 className="text-sm font-bold text-[#FFF9F0] uppercase tracking-wider mb-4 font-serif">
                Explore Club
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><a href="#programs" className="hover:text-[#D4B996] transition-colors">Workout Programs & Akhada</a></li>
                <li><a href="#schedule" className="hover:text-[#D4B996] transition-colors">Batch Timings & Ladies Special</a></li>
                <li><a href="#planner" className="hover:text-[#D4B996] transition-colors">Free AI Diet & BMI Calculator</a></li>
                <li><a href="#membership" className="hover:text-[#D4B996] transition-colors">Fee Structure & Trial Pass</a></li>
                <li><a href="#trainers" className="hover:text-[#D4B996] transition-colors">Certified Master Coaches</a></li>
              </ul>
            </div>

            {/* Col 3: Studio Opening Hours */}
            <div>
              <h4 className="text-sm font-bold text-[#FFF9F0] uppercase tracking-wider mb-4 font-serif">
                Opening Hours
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-[#A89886]">
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-[#FFF9F0]">Monday - Friday</span>
                  <span>5:30 AM — 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-[#FFF9F0]">Saturday</span>
                  <span>5:30 AM — 9:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-[#FFF9F0]">Sunday</span>
                  <span>7:00 AM — 12:00 PM (Yoga)</span>
                </li>
                <li className="flex justify-between text-[#D4B996] font-bold pt-1">
                  <span>Ladies Special Batch</span>
                  <span>3:30 PM — 5:00 PM Daily</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Visit & Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#FFF9F0] uppercase tracking-wider mb-4 font-serif">
                Visit Studio
              </h4>
              <div className="flex items-start gap-3 text-xs text-[#A89886]">
                <MapPin className="w-4 h-4 text-[#D4B996] shrink-0 mt-0.5" />
                <span>Near Ram Mandir Chowk, Main Market Road, Ahmedabad / Gujarat (India)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A89886] pt-1">
                <Phone className="w-4 h-4 text-[#D4B996] shrink-0" />
                <span>+91 98765 43210 / +91 91234 56789</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A89886] pt-1">
                <Clock className="w-4 h-4 text-[#D4B996] shrink-0" />
                <span>Free Parking & Locker Facility Available</span>
              </div>
            </div>

          </motion.div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>© {new Date().getFullYear()} Shree Ram GYM. All rights reserved. Designed with discipline & devotion.</p>
            <div className="flex items-center gap-4 text-[#A89886]">
              <span>Satvik Friendly</span>
              <span>•</span>
              <span>Certified Equipment</span>
              <span>•</span>
              <span>Eye-Friendly Light Studio</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FREE 3-DAY TRIAL MODAL */}
      <AnimatePresence>
        {isTrialModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#24211D] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4B996]/40 shadow-2xl relative text-[#FFF9F0]"
            >
              
              <button
                onClick={handleResetModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1A17] text-[#D4B996] hover:bg-[#34302A] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmitTrial} className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4B996] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Limited Free Guest Passes Available</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FFF9F0] font-serif leading-tight">
                    Claim Your Free <span className="text-[#D4B996]">3-Day Trial Pass</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C8BAA8] leading-relaxed">
                    Experience Shree Ram GYM for 3 consecutive days with zero charges. Includes complete gym floor access and 1 free Satvik diet consultation with our coaches.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4B996] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="e.g. Kartik Pandya"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4B996]/30 focus:outline-none focus:border-[#D4B996] bg-[#1C1A17] text-[#FFF9F0] font-medium text-sm shadow-inner placeholder:text-stone-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4B996] mb-1.5">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4B996]/30 focus:outline-none focus:border-[#D4B996] bg-[#1C1A17] text-[#FFF9F0] font-medium text-sm shadow-inner placeholder:text-stone-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D4B996] mb-1.5">
                        Preferred Batch Timing
                      </label>
                      <select
                        value={prefBatch}
                        onChange={(e) => setPrefBatch(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#D4B996]/30 focus:outline-none focus:border-[#D4B996] bg-[#1C1A17] text-[#FFF9F0] font-medium text-sm shadow-inner cursor-pointer"
                      >
                        <option value="Brahmamuhurta Morning (05:30 AM - 07:00 AM)">Brahmamuhurta Morning (05:30 AM - 07:00 AM)</option>
                        <option value="Morning Fat Shred (07:00 AM - 08:30 AM)">Morning Fat Shred (07:00 AM - 08:30 AM)</option>
                        <option value="Surya Yoga & Core (08:30 AM - 09:30 AM)">Surya Yoga & Core (08:30 AM - 09:30 AM)</option>
                        <option value="General Morning (10:00 AM - 11:30 AM)">General Morning (10:00 AM - 11:30 AM)</option>
                        <option value="Ladies Special Batch (03:30 PM - 05:00 PM)">Ladies Special Batch (03:30 PM - 05:00 PM)</option>
                        <option value="Akhada Functional (05:30 PM - 07:00 PM)">Akhada Functional (05:30 PM - 07:00 PM)</option>
                        <option value="Peak Evening Hypertrophy (07:00 PM - 08:30 PM)">Peak Evening Hypertrophy (07:00 PM - 08:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1C1A17] border border-[#D4B996]/30 flex items-center gap-2.5 text-xs text-[#C8BAA8] font-medium">
                    <ShieldCheck className="w-5 h-5 text-[#D4B996] shrink-0" />
                    <span>No credit card or online payment required. Simply visit our reception with this pass.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                  >
                    <Calendar className="w-4 h-4 text-[#1C1A17]" />
                    <span>Generate Instant Guest Pass</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#1C1A17] text-[#D4B996] border border-[#D4B996]/30 text-xs font-bold uppercase tracking-wider">
                      Pass Confirmed • ID #SR-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-[#FFF9F0] mt-2">
                      Welcome to Shree Ram GYM, {userName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C8BAA8] mt-2 max-w-sm mx-auto">
                      Your 3-Day Free Guest Pass is booked for <strong className="text-[#FFF9F0]">{prefBatch}</strong>. We have sent a confirmation message to your WhatsApp ({userPhone}).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1C1A17] text-white text-left space-y-2 border border-[#D4B996]/40">
                    <div className="flex items-center justify-between text-xs text-[#D4B996] font-bold uppercase tracking-wider">
                      <span>VIP Guest Access Pass</span>
                      <span>Valid For 3 Days</span>
                    </div>
                    <p className="text-xs text-stone-300">
                      Show this screen or tell your name at our reception. Please wear sports shoes and bring a clean workout towel.
                    </p>
                  </div>

                  <button
                    onClick={handleResetModal}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4B996] to-[#A67C52] hover:opacity-95 text-[#1C1A17] font-extrabold text-sm transition-colors cursor-pointer"
                  >
                    Close & Continue Exploring
                  </button>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
