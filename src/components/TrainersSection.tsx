import React from 'react';
import { TRAINERS, TESTIMONIALS } from '../data/mockData';
import { Award, Star, Quote, CheckCircle2, UserCheck, Dumbbell } from 'lucide-react';
import { motion } from 'motion/react';

export const TrainersSection: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-[#FDFCF7] border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAD8C0]/50 text-[#6B4F31] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4B996]/50 shadow-2xs">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Form First • No Toxic Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif tracking-tight">
            Meet Our <span className="text-[#A67C52]">Certified Master Coaches</span>
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            At Shree Ram GYM, our trainers don't stand in a corner waiting for you to buy expensive personal training packages. We actively guide every member on correct lifting technique, safety, and discipline.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-xl hover:border-[#D4B996] transition-all duration-300 flex flex-col group"
            >
              {/* Trainer Image */}
              <div className="relative h-72 overflow-hidden bg-stone-100">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-md bg-[#A67C52] text-white text-[10px] font-bold uppercase tracking-widest inline-block mb-1.5 shadow-xs">
                    {trainer.experience}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#EAD8C0] font-medium">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Trainer Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed italic">
                    "{trainer.bio}"
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">Specialized Expertise</span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, idx) => (
                        <span key={idx} className="text-[11px] font-semibold bg-[#F8F6F0] text-stone-800 px-2.5 py-1 rounded-lg border border-stone-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom rating */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-800">
                  <span className="flex items-center gap-1 text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{trainer.rating} / 5.0</span>
                  </span>
                  <span className="text-[#8C6239] font-medium">Available Daily</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="mt-24 pt-16 border-t border-stone-200">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C6239] block mb-1">
              Real Transformations • Real Members
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Why Our Community Loves Shree Ram GYM
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#F8F6F0] p-6 sm:p-8 rounded-3xl border border-stone-200/90 flex flex-col justify-between relative shadow-2xs"
              >
                <Quote className="w-8 h-8 text-[#D4B996]/50 absolute top-6 right-6" />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed font-normal">
                    "{test.comment}"
                  </p>

                  <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-bold text-stone-900 flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[#A67C52]" />
                    <span>Transformation: {test.transformation}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-200/60">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border border-stone-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{test.name}</h4>
                    <p className="text-[11px] text-stone-500 font-medium">{test.role}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
