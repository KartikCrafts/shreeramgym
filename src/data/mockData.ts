import { WorkoutProgram, Trainer, BatchSchedule, MembershipPlan, Testimonial } from '../types';

export const WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: 'prog-1',
    title: 'Vedic Strength & Powerlifting',
    hindiTitle: 'बल एवं शक्ति प्रशिक्षण',
    category: 'strength',
    description: 'Traditional discipline combined with modern biomechanics. Focuses on squat, bench press, deadlift, and functional gada/macebell conditioning for core raw strength.',
    duration: '60 - 75 Mins',
    intensity: 'Advanced',
    caloriesBurn: '500 - 650 kcal',
    trainerName: 'Vikram Sinh (Head Coach)',
    features: [
      'Heavy compound lifting racks & calibrated plates',
      'Traditional Indian clubbell & macebell mobility',
      'Spinal decompression & posture correction',
      '1-on-1 lifting form check every session'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prog-2',
    title: 'Modern Bodybuilding & Hypertrophy',
    hindiTitle: 'मांसपेशी निर्माण (Muscle Gain)',
    category: 'strength',
    description: 'Targeted muscle isolation and scientifically designed training splits (PPL & Bro Splits) to build lean muscle mass with maximum aesthetic symmetry.',
    duration: '60 Mins',
    intensity: 'Intermediate',
    caloriesBurn: '450 - 550 kcal',
    trainerName: 'Rahul Verma',
    features: [
      'Imported biomechanical pin-loaded machines',
      'Customized Progressive Overload tracking',
      'Pre & Post workout nutrition counseling',
      'Monthly body composition DEXA/BIA scans'
    ],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prog-3',
    title: 'Fat Shred & HIIT Conditioning',
    hindiTitle: 'वजन घटाने का विशेष बैच',
    category: 'weightloss',
    description: 'High-intensity interval cardio, battle ropes, sled pushes, and metabolic conditioning designed to torch stubborn body fat while preserving lean muscle.',
    duration: '45 Mins',
    intensity: 'All Levels',
    caloriesBurn: '600 - 800 kcal',
    trainerName: 'Anjali Sharma',
    features: [
      'Heart rate monitored cardio zones',
      'Dynamic agility ladder & plyometric drills',
      'Zero-boring varied daily routines',
      'Dedicated weekly weight drop tracking'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prog-4',
    title: 'Functional Akhada & Cross-Training',
    hindiTitle: 'फंक्शनल एवं कोर स्ट्रेंथ',
    category: 'functional',
    description: 'Build real-world athletic stamina, agility, and explosive power using kettlebells, medicine balls, pull-up rigs, and tyre flips in a supportive group environment.',
    duration: '50 Mins',
    intensity: 'Intermediate',
    caloriesBurn: '550 - 700 kcal',
    trainerName: 'Devendra Pehlwan',
    features: [
      'Turf area with weighted push sleds & ropes',
      'Core endurance & grip strength mastery',
      'Team workouts & weekly fitness challenges',
      'Joint stability and injury prevention drills'
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prog-5',
    title: 'Surya Yoga & Flexibility Flow',
    hindiTitle: 'योग एवं प्राणायाम',
    category: 'yoga',
    description: 'Harmonize body and mind. A serene blend of Hatha Yoga, dynamic Surya Namaskar flows, deep tissue stretching, and soothing Pranayama breathing exercises.',
    duration: '60 Mins',
    intensity: 'Beginner',
    caloriesBurn: '250 - 350 kcal',
    trainerName: 'Priya Patel',
    features: [
      'Calm, naturally lit wood-floored studio',
      'Stress relief, cortisol reduction & mental clarity',
      'Improved lower back flexibility & joint mobility',
      'Guided relaxation and meditation at session end'
    ],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prog-6',
    title: 'Cardio & Stamina Booster',
    hindiTitle: 'कार्डियो एवं सहनशक्ति',
    category: 'cardio',
    description: 'State-of-the-art motorized treadmills, air bikes, rowing machines, and elliptical cross-trainers paired with energetic music for cardiovascular excellence.',
    duration: '45 Mins',
    intensity: 'All Levels',
    caloriesBurn: '400 - 600 kcal',
    trainerName: 'Rahul Verma',
    features: [
      'Curved treadmills and Concept2 rowers',
      'Low-impact joint-friendly endurance training',
      'Personal entertainment screens on cardio equipment',
      'Oxygen-enriched climate controlled floor'
    ],
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'tr-1',
    name: 'Vikram Sinh',
    role: 'Founder & Master Strength Coach',
    experience: '12+ Years Experience',
    specialties: ['Powerlifting', 'Biomechanics', 'Rehab & Posture', 'Traditional Conditioning'],
    bio: 'Former national level weightlifter and founder of Shree Ram GYM. Vikram believes true fitness is built on discipline, pure vegetarian/satvik nutrition, and consistent heavy compound movements.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    rating: 4.9
  },
  {
    id: 'tr-2',
    name: 'Anjali Sharma',
    role: 'HIIT & Fat Loss Specialist',
    experience: '7 Years Experience',
    specialties: ['Metabolic Conditioning', 'Women Fitness', 'Zumba & Aerobics', 'Post-Natal Rehab'],
    bio: 'Anjali has helped over 300+ members achieve sustainable weight loss without extreme crash dieting. She brings unmatched energy and motivation to every group class.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
    rating: 4.9
  },
  {
    id: 'tr-3',
    name: 'Rahul Verma',
    role: 'Hypertrophy & Sports Nutritionist',
    experience: '8 Years Experience',
    specialties: ['Muscle Gain', 'DEXA Analysis', 'Indian Diet Planning', 'Physique Sculpting'],
    bio: 'Certified sports nutritionist specializing in tailoring high-protein vegetarian and Jain diets for natural muscle growth and athletic performance.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8
  },
  {
    id: 'tr-4',
    name: 'Devendra Pehlwan',
    role: 'Functional & Akhada Coach',
    experience: '10 Years Experience',
    specialties: ['Macebell / Gada', 'Wrestling Conditioning', 'Core Agility', 'Kettlebell Mastery'],
    bio: 'Combining traditional Indian Akhada training methods with modern functional fitness to develop unbreakable core strength and stamina.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    rating: 5.0
  }
];

export const BATCH_SCHEDULES: BatchSchedule[] = [
  {
    id: 'bat-1',
    time: '05:30 AM - 07:00 AM',
    name: 'Brahmamuhurta Strength & Power',
    type: 'Morning',
    trainer: 'Vikram Sinh',
    intensity: 'High Intensity',
    spotsLeft: 4,
    days: 'Mon - Sat'
  },
  {
    id: 'bat-2',
    time: '07:00 AM - 08:30 AM',
    name: 'Morning Fat Shred & Cardio',
    type: 'Morning',
    trainer: 'Anjali Sharma',
    intensity: 'Medium - High',
    spotsLeft: 8,
    days: 'Mon - Sat'
  },
  {
    id: 'bat-3',
    time: '08:30 AM - 09:30 AM',
    name: 'Surya Yoga & Core Flow',
    type: 'Morning',
    trainer: 'Priya Patel',
    intensity: 'Relaxed / All Levels',
    spotsLeft: 12,
    days: 'Mon, Wed, Fri'
  },
  {
    id: 'bat-4',
    time: '10:00 AM - 11:30 AM',
    name: 'General Fitness & Muscle Gain',
    type: 'Morning',
    trainer: 'Rahul Verma',
    intensity: 'All Levels',
    spotsLeft: 15,
    days: 'Mon - Sat'
  },
  {
    id: 'bat-5',
    time: '03:30 PM - 05:00 PM',
    name: 'Ladies Special Fitness & Zumba',
    type: 'Special',
    trainer: 'Anjali Sharma',
    intensity: 'Customized for Women',
    spotsLeft: 6,
    days: 'Mon - Fri'
  },
  {
    id: 'bat-6',
    time: '05:30 PM - 07:00 PM',
    name: 'Akhada Functional & Cross-Training',
    type: 'Evening',
    trainer: 'Devendra Pehlwan',
    intensity: 'High Intensity',
    spotsLeft: 5,
    days: 'Mon - Sat'
  },
  {
    id: 'bat-7',
    time: '07:00 PM - 08:30 PM',
    name: 'Peak Evening Bodybuilding & Hypertrophy',
    type: 'Evening',
    trainer: 'Vikram Sinh & Rahul',
    intensity: 'Advanced & Inter.',
    spotsLeft: 3,
    days: 'Mon - Sat'
  },
  {
    id: 'bat-8',
    time: '08:30 PM - 09:45 PM',
    name: 'Late Evening Stress Relief & Cardio',
    type: 'Evening',
    trainer: 'Rahul Verma',
    intensity: 'All Levels',
    spotsLeft: 10,
    days: 'Mon - Fri'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-1',
    name: 'Silver Starter',
    duration: '1 Month Membership',
    price: 1500,
    originalPrice: 2000,
    popular: false,
    colorTheme: 'light',
    features: [
      'Full Gym Floor & Cardio Equipment access',
      'General batch timings (Morning or Evening)',
      'Initial Body Composition Assessment (BMI/BMR)',
      'Basic locker facility during workouts',
      '1 Complimentary Yoga / Group Class session'
    ]
  },
  {
    id: 'plan-2',
    name: 'Gold Transformation',
    duration: '6 Months Membership',
    price: 7000,
    originalPrice: 9000,
    popular: true,
    colorTheme: 'brown',
    features: [
      'Unlimited All-Day access (Any batch timing)',
      'Customized Indian Diet Chart (Veg/Non-Veg/Jain)',
      'Personalized Workout Split & Goal tracking',
      'Monthly DEXA body fat & muscle scans',
      'Free participation in Saturday Akhada Bootcamp',
      '1 Week Free Freeze / Pause facility'
    ]
  },
  {
    id: 'plan-3',
    name: 'Platinum VIP Devotion',
    duration: '12 Months (Annual)',
    price: 12000,
    originalPrice: 18000,
    popular: false,
    colorTheme: 'dark',
    features: [
      'Everything in Gold Membership + VIP Lounge',
      '3 Complimentary Personal Trainer (PT) Sessions',
      'Free Steam Bath / Sauna relaxation (Weekly)',
      'Complimentary Shree Ram GYM Shaker & T-Shirt',
      'Priority booking for Yoga & Special Zumba batches',
      '1 Month Free Freeze / Pause facility for holidays',
      'Bring a friend free (2 days per month)'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Patel',
    role: 'Software Engineer (Lost 14 kg in 5 Months)',
    comment: 'The environment at Shree Ram GYM is unlike any commercial gym. No loud toxic music, just pure discipline and positive energy. Vikram sir designed a pure vegetarian diet with Soya, Paneer, and Whey that helped me drop 14 kgs while gaining strength!',
    transformation: '14 kg Weight Loss & Core Definition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Sneha Kulkarni',
    role: 'School Teacher (Joined Ladies Batch)',
    comment: 'I was always hesitant to join a gym, but the 3:30 PM Ladies Special batch with Anjali ma\'am changed my life. The aesthetic white and warm wood lighting feels so calming and clean. My back pain has completely disappeared after 3 months!',
    transformation: 'Relieved Back Pain & Gained Stamina',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Rohan Sharma',
    role: 'College Student & Athlete',
    comment: 'The combination of modern biomechanical machines and traditional Gada / Akhada conditioning is elite! Best equipment quality in the city and the trainers actually correct your form without asking for extra personal training fees.',
    transformation: '+6 kg Lean Muscle Mass',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];
