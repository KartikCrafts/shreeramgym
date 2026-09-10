import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/mockData';
import { Check, Sparkles, Shield, Award, Calendar, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface MembershipSectionProps {
  onOpenTrialModal: () => void;
  onSelectPlan: (planName: string, price: number) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenTrialModal,
  onSelectPlan,
}) => {
  const [billingCycle, setBillingCycle] = useState<'standard' | 'couple'>('standard');

  return (
    <div className="py-16 lg:py-24 bg-[#1E1C1A] border-b border-[#D4B996]/20 overflow-hidden">
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
            <Award className="w-3.5 h-3.5" />
            <span>Transparent Investment in Yourself</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF9F0] font-serif tracking-tight">
            Our <span className="text-[#D4B996]">Membership Plans</span> & Fees
          </h2>
          <p className="text-base text-[#C8BAA8] mt-3 leading-relaxed">
            No hidden admission charges or forced annual lock-ins. Every membership includes complimentary form guidance from our certified coaches.
          </p>

          {/* Toggle for Standard vs Couple Discount */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#24211D] border border-[#D4B996]/40 mt-6 shadow-lg">
            <button
              onClick={() => setBillingCycle('standard')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'standard'
                  ? 'bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] shadow-md scale-105'
                  : 'text-[#D5C9BA] hover:text-[#FFF9F0]'
              }`}
            >
              Standard Individual
            </button>
            <button
              onClick={() => setBillingCycle('couple')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'couple'
                  ? 'bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] shadow-md scale-105'
                  : 'text-[#D5C9BA] hover:text-[#FFF9F0]'
              }`}
            >
              <span>Couple / Buddy Pass</span>
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-[#A67C52] text-white">15% OFF</span>
            </button>
          </div>
        </motion.div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isBrown = plan.colorTheme === 'brown';
            const isDark = plan.colorTheme === 'dark';
            
            // Apply couple discount if selected
            const finalPrice = billingCycle === 'couple'
              ? Math.round(plan.price * 0.85)
              : plan.price;

            const origPrice = billingCycle === 'couple'
              ? Math.round((plan.originalPrice || plan.price) * 0.85)
              : plan.originalPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border shadow-2xl ${
                  isBrown
                    ? 'bg-gradient-to-b from-[#2B2721] to-[#24211D] border-[#D4B996] md:-translate-y-2 ring-2 ring-[#D4B996]/50'
                    : isDark
                    ? 'bg-[#1A1816] text-white border-[#D4B996]/60'
                    : 'bg-[#24211D] text-[#FFF9F0] border-[#D4B996]/30 hover:border-[#D4B996]'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4B996] to-[#A67C52] text-[#1C1A17] text-xs font-extrabold uppercase tracking-widest shadow-xl flex items-center gap-1.5 border border-[#FFF9F0]/40">
                    <Sparkles className="w-3.5 h-3.5 text-[#1C1A17]" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="pb-6 border-b border-stone-800">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#D4B996]">
                      {plan.duration}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif mt-1 text-[#FFF9F0]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Display */}
                  <div className="py-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-serif tracking-tight text-[#FFF9F0]">
                      ₹{finalPrice.toLocaleString('en-IN')}
                    </span>
                    {origPrice && (
                      <span className="text-base line-through font-medium text-[#A89886]">
                        ₹{origPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className="p-1 rounded-full mt-0.5 shrink-0 bg-[#34302A] text-[#D4B996]">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[#EAD8C0] font-medium">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => onSelectPlan(plan.name, finalPrice)}
                    className={`w-full py-4 rounded-xl font-extrabold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 ${
                      isBrown
                        ? 'bg-gradient-to-r from-[#D4B996] via-[#C8AB88] to-[#A67C52] text-[#1C1A17]'
                        : isDark
                        ? 'bg-[#EAD8C0] hover:bg-[#D4B996] text-[#1C1A17]'
                        : 'bg-[#2B2721] hover:bg-[#36312A] text-[#FFF9F0] border border-[#D4B996]/50'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                  </button>

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-[#A89886] hover:text-[#FFF9F0] transition-colors cursor-pointer"
                  >
                    Not sure? Take 3-Day Free Trial First →
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Trust Banner Below */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#24211D] border border-[#D4B996]/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-xl"
        >
          <div className="space-y-1">
            <Shield className="w-6 h-6 text-[#D4B996] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-[#FFF9F0]">100% Fee Transparency</h4>
            <p className="text-xs text-[#C8BAA8]">No hidden maintenance charges or mandatory locker rental fees.</p>
          </div>
          <div className="space-y-1">
            <Calendar className="w-6 h-6 text-[#D4B996] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-[#FFF9F0]">Free Pause / Freeze</h4>
            <p className="text-xs text-[#C8BAA8]">Traveling out of town? Freeze your membership up to 30 days without loss.</p>
          </div>
          <div className="space-y-1">
            <Flame className="w-6 h-6 text-[#D4B996] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-[#FFF9F0]">Custom Diet Included</h4>
            <p className="text-xs text-[#C8BAA8]">Every 6-month and annual plan includes nutritionist-designed Satvik diet charts.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
