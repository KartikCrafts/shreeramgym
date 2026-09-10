import React, { useState } from 'react';
import { CustomPlanResult, DietMeal } from '../types';
import { Sparkles, Activity, Utensils, Dumbbell, Check, RefreshCw, AlertCircle, Droplets, Flame, ArrowRight, Printer, Share2, BarChart3, TrendingUp, Zap, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FitnessPlanner: React.FC = () => {
  // Input states
  const [name, setName] = useState('Kartik');
  const [age, setAge] = useState(24);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(74);
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'strength' | 'general'>('muscle_gain');
  const [dietPref, setDietPref] = useState<'pure_veg' | 'eggetarian' | 'non_veg' | 'jain_veg'>('pure_veg');
  const [splitPref, setSplitPref] = useState<'ppl' | 'upper_lower' | 'full_body'>('ppl');

  const [isGenerating, setIsGenerating] = useState(false);
  const [planResult, setPlanResult] = useState<CustomPlanResult | null>(null);

  // 7-Day Graph state
  const [graphMetric, setGraphMetric] = useState<'calories' | 'intensity'>('calories');
  const [selectedGraphDay, setSelectedGraphDay] = useState<number>(2); // Wednesday default

  const getSevenDayData = () => {
    if (splitPref === 'ppl') {
      return [
        { day: 'Mon', focus: 'Push (Chest & Tri)', calories: 540, intensity: 85, hrZone: '130 - 160 BPM', recovery: 'Chana Sattu Shake' },
        { day: 'Tue', focus: 'Pull (Back & Bi)', calories: 520, intensity: 88, hrZone: '125 - 155 BPM', recovery: 'Sprouted Moong Salad' },
        { day: 'Wed', focus: 'Legs & Core Power', calories: 680, intensity: 95, hrZone: '140 - 170 BPM', recovery: 'Banana Whey / Paneer' },
        { day: 'Thu', focus: 'Rest & Surya Yoga', calories: 280, intensity: 40, hrZone: '90 - 110 BPM', recovery: 'Fresh Coconut Water' },
        { day: 'Fri', focus: 'Push Hypertrophy', calories: 510, intensity: 82, hrZone: '125 - 155 BPM', recovery: 'Roasted Makhana' },
        { day: 'Sat', focus: 'Pull & Akhada HIIT', calories: 650, intensity: 90, hrZone: '135 - 165 BPM', recovery: 'Haldi Badam Milk' },
        { day: 'Sun', focus: 'Full Satvik Rest', calories: 180, intensity: 20, hrZone: '75 - 95 BPM', recovery: 'Nimbu Pani & Electrolytes' },
      ];
    } else if (splitPref === 'upper_lower') {
      return [
        { day: 'Mon', focus: 'Upper Body Heavy', calories: 560, intensity: 88, hrZone: '130 - 160 BPM', recovery: 'Dry Fruit Sattu Drink' },
        { day: 'Tue', focus: 'Lower Body & Squats', calories: 640, intensity: 92, hrZone: '138 - 168 BPM', recovery: 'Paneer & Peanut Chaat' },
        { day: 'Wed', focus: 'Rest & Stretch', calories: 220, intensity: 25, hrZone: '85 - 105 BPM', recovery: 'Fresh Coconut Water' },
        { day: 'Thu', focus: 'Upper Hypertrophy', calories: 530, intensity: 84, hrZone: '125 - 155 BPM', recovery: 'Greek Yogurt & Honey' },
        { day: 'Fri', focus: 'Lower Body & Abs', calories: 610, intensity: 90, hrZone: '135 - 165 BPM', recovery: 'Soy Chunk / Paneer Bowl' },
        { day: 'Sat', focus: 'Akhada Conditioning', calories: 580, intensity: 85, hrZone: '130 - 160 BPM', recovery: 'Haldi Badam Milk' },
        { day: 'Sun', focus: 'Deep Recovery', calories: 160, intensity: 15, hrZone: '75 - 95 BPM', recovery: 'Herbal Warm Tea' },
      ];
    } else {
      return [
        { day: 'Mon', focus: 'Full Body Akhada', calories: 620, intensity: 90, hrZone: '135 - 165 BPM', recovery: 'Special Chana Sattu' },
        { day: 'Tue', focus: 'Rest & Light Walk', calories: 220, intensity: 30, hrZone: '85 - 105 BPM', recovery: 'Lemon Water & Almonds' },
        { day: 'Wed', focus: 'Full Body Power', calories: 650, intensity: 92, hrZone: '138 - 168 BPM', recovery: 'Paneer Tikka / Tofu' },
        { day: 'Thu', focus: 'Surya Namaskar & Yoga', calories: 240, intensity: 35, hrZone: '90 - 110 BPM', recovery: 'Nariyal Pani' },
        { day: 'Fri', focus: 'Full Body Endurance', calories: 600, intensity: 88, hrZone: '130 - 160 BPM', recovery: 'Protein Smoothie' },
        { day: 'Sat', focus: 'Akhada Cardio & Core', calories: 520, intensity: 80, hrZone: '125 - 155 BPM', recovery: 'Jaggery Sattu Drink' },
        { day: 'Sun', focus: 'Satvik Rest & Recharge', calories: 150, intensity: 15, hrZone: '70 - 90 BPM', recovery: 'Kesar Elaichi Milk' },
      ];
    }
  };

  const graphData = getSevenDayData();
  const totalWeeklyCalories = graphData.reduce((acc, curr) => acc + curr.calories, 0);
  const avgIntensity = Math.round(graphData.reduce((acc, curr) => acc + curr.intensity, 0) / 7);
  const maxGraphVal = Math.max(...graphData.map(d => graphMetric === 'calories' ? d.calories : d.intensity));
  const currentDayInfo = graphData[selectedGraphDay] || graphData[0];

  const calculateAndGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Calculate BMI
      const heightM = heightCm / 100;
      const bmiVal = Number((weightKg / (heightM * heightM)).toFixed(1));
      
      let cat = 'Normal Weight';
      if (bmiVal < 18.5) cat = 'Underweight (Needs Caloric Surplus)';
      else if (bmiVal >= 18.5 && bmiVal < 24.9) cat = 'Healthy Normal Weight';
      else if (bmiVal >= 25 && bmiVal < 29.9) cat = 'Overweight (Recommend Caloric Deficit)';
      else cat = 'Obese Class (Targeted Fat Shred Required)';

      // Calculate BMR (Mifflin-St Jeor)
      let bmrVal = 10 * weightKg + 6.25 * heightCm - 5 * age;
      bmrVal += gender === 'male' ? 5 : -161;
      bmrVal = Math.round(bmrVal);

      // Target Calories based on goal
      let tdee = Math.round(bmrVal * 1.55); // moderate activity
      let targetCals = tdee;
      let targetProt = `${Math.round(weightKg * 1.6)}g - ${Math.round(weightKg * 2.0)}g daily`;

      if (goal === 'fat_loss') {
        targetCals = Math.round(tdee - 500);
        targetProt = `${Math.round(weightKg * 1.8)}g - ${Math.round(weightKg * 2.2)}g (High protein to save muscle)`;
      } else if (goal === 'muscle_gain') {
        targetCals = Math.round(tdee + 400);
        targetProt = `${Math.round(weightKg * 1.8)}g - ${Math.round(weightKg * 2.1)}g daily`;
      } else if (goal === 'strength') {
        targetCals = Math.round(tdee + 250);
        targetProt = `${Math.round(weightKg * 1.7)}g - ${Math.round(weightKg * 2.0)}g daily`;
      }

      // Generate Diet Meals based on preference
      let meals: DietMeal[] = [];
      if (dietPref === 'pure_veg') {
        meals = [
          { time: '06:00 AM (Pre-Workout)', name: 'Brahmamuhurta Energy Boost', items: ['5 Soaked Almonds & 2 Walnuts', '1 Medium Banana or Apple', 'Black Coffee or Green Tea'], calories: 180, protein: '4g' },
          { time: '08:30 AM (Post-Workout)', name: 'Muscle Recovery Breakfast', items: ['1 Scoop Whey / Soya Protein Isolate', '50g Rolled Oats with warm milk & chia seeds', '1 tablespoon peanut butter'], calories: 450, protein: '34g' },
          { time: '01:00 PM (Satvik Lunch)', name: 'Vedic High-Protein Lunch', items: ['150g Grilled Paneer Bhurji / Soya Chunks Curry', '1 Bowl Thick Dal (Moong / Arhar)', '2 Multigrain Roti & Cucumber Salad'], calories: 550, protein: '32g' },
          { time: '05:00 PM (Evening Snack)', name: 'Metabolic Booster Snack', items: ['1 Bowl Sprouted Moong / Kala Chana Chaat', 'Roasted Makhana (Foxnuts) with light black salt', '1 Cup Green Tea'], calories: 220, protein: '12g' },
          { time: '08:30 PM (Dinner)', name: 'Light & Anabolic Dinner', items: ['100g Tofu or Paneer Tikka (Less oil)', '1 Bowl Quinoa / Brown Rice or 2 Roti', 'Steamed Spinach & Broccoli Sabzi'], calories: 420, protein: '26g' },
          { time: '10:00 PM (Before Sleep)', name: 'Night Casein Recovery', items: ['1 Glass Warm Turmeric Milk (Haldi Doodh) with pinch of ashwagandha'], calories: 140, protein: '8g' }
        ];
      } else if (dietPref === 'eggetarian') {
        meals = [
          { time: '06:00 AM (Pre-Workout)', name: 'Pre-Workout Ignition', items: ['1 Black Coffee / Pre-workout drink', '2 Boiled Egg Whites & 1 Banana'], calories: 160, protein: '9g' },
          { time: '08:30 AM (Post-Workout)', name: 'Power Breakfast', items: ['4 Egg Whites + 1 Whole Egg Omelette with spinach', '2 Slices Brown Bread or Oats bowl', '1 Scoop Whey Protein in water'], calories: 480, protein: '42g' },
          { time: '01:00 PM (Lunch)', name: 'Balanced Protein Lunch', items: ['3 Hard Boiled Eggs Curry or Paneer Bhurji', '1 Bowl Dal Makhani / Yellow Dal', '2 Roti & Fresh Green Salad'], calories: 560, protein: '35g' },
          { time: '05:00 PM (Evening Snack)', name: 'Afternoon Energy', items: ['2 Boiled Eggs with black pepper', 'Sprouted Moong Salad & Green Tea'], calories: 210, protein: '16g' },
          { time: '08:30 PM (Dinner)', name: 'Lean Muscle Dinner', items: ['150g Soya Chunks Curry or Egg Bhurji', '2 Multigrain Roti / Light Brown Rice', 'Mixed Vegetable Sabzi'], calories: 430, protein: '28g' },
          { time: '10:00 PM (Before Sleep)', name: 'Night Restored', items: ['1 Glass Warm Milk with Almonds'], calories: 150, protein: '8g' }
        ];
      } else if (dietPref === 'jain_veg') {
        meals = [
          { time: '06:00 AM (Pre-Workout)', name: 'Pure Satvik Jain Energy', items: ['5 Soaked Almonds & Raisins', '1 Banana (or seasonal fruit)', 'Warm Lemon Water or Black Coffee'], calories: 170, protein: '4g' },
          { time: '08:30 AM (Post-Workout)', name: 'Jain Recovery Breakfast', items: ['1 Scoop Plant/Whey Protein Isolate', 'Rolled Oats porridge with almond milk & pumpkin seeds', 'Roasted Makhana bowl'], calories: 440, protein: '32g' },
          { time: '01:00 PM (Lunch)', name: 'Satvik Jain Protein Feast', items: ['150g Fresh Paneer cubes in tomato gravy (No onion/garlic)', 'Thick Moong Dal & Green Peas', '2 Phulka Roti & Cucumber slice'], calories: 540, protein: '30g' },
          { time: '05:00 PM (Evening Snack)', name: 'Evening Light Chaat', items: ['Boiled Kala Chana / Moong dal chaat (Jain style)', 'Green Tea with roasted flaxseeds'], calories: 200, protein: '11g' },
          { time: '08:30 PM (Dinner)', name: 'Sunset Jain Dinner (Before 8 PM)', items: ['100g Tofu or Paneer sautéed with capsicum & tomatoes', '1 Bowl Dal & 2 Roti', 'Steamed Lauki / Tinda Sabzi'], calories: 410, protein: '24g' }
        ];
      } else {
        // Non veg
        meals = [
          { time: '06:00 AM (Pre-Workout)', name: 'Athletic Ignition', items: ['1 Banana & 1 Tablespoon Peanut Butter', 'Black Coffee / Green Tea'], calories: 190, protein: '5g' },
          { time: '08:30 AM (Post-Workout)', name: 'Anabolic Chicken / Egg Breakfast', items: ['1 Scoop Whey Protein Isolate in water', '4 Egg Whites + 2 Whole Eggs scrambled', '1 Bowl Oatmeal with berries'], calories: 510, protein: '46g' },
          { time: '01:00 PM (Lunch)', name: 'High-Protein Athletic Lunch', items: ['200g Grilled Chicken Breast or Fish Tikka', '1 Bowl Yellow Dal or Chickpeas', '2 Multigrain Roti & Caesar Salad'], calories: 600, protein: '48g' },
          { time: '05:00 PM (Evening Snack)', name: 'Quick Fuel', items: ['3 Boiled Egg Whites & 1 Apple', 'Handful of roasted almonds & walnuts'], calories: 230, protein: '14g' },
          { time: '08:30 PM (Dinner)', name: 'Lean Recovery Dinner', items: ['150g Grilled Fish or Chicken Tikka', '1 Bowl Brown Rice or Quinoa', 'Sautéed Broccoli, Asparagus & Spinach'], calories: 450, protein: '38g' },
          { time: '10:00 PM (Before Sleep)', name: 'Overnight Recovery', items: ['1 Scoop Casein Protein or Warm Milk'], calories: 130, protein: '15g' }
        ];
      }

      // Generate Workout Split
      let split: CustomPlanResult['weeklyWorkoutSplit'] = [];
      if (splitPref === 'ppl') {
        split = [
          { day: 'Monday (Day 1)', focus: 'Push — Chest, Shoulders & Triceps', exercises: ['Flat Bench Press (4 sets x 8-10 reps)', 'Incline Dumbbell Press (3 sets x 10-12 reps)', 'Overhead Shoulder Military Press (4 sets)', 'Lateral Raises (3 sets x 15 reps)', 'Rope Tricep Pushdowns (4 sets x 12 reps)'] },
          { day: 'Tuesday (Day 2)', focus: 'Pull — Back, Rear Delts & Biceps', exercises: ['Barbell Deadlift / Rack Pulls (4 sets x 6-8 reps)', 'Lat Pulldowns or Weighted Pull-ups (4 sets)', 'Seated Cable Rows (3 sets x 10 reps)', 'Face Pulls for posture (3 sets x 15 reps)', 'Barbell Bicep Curls (4 sets x 10 reps)'] },
          { day: 'Wednesday (Day 3)', focus: 'Legs & Core — Lower Body Power', exercises: ['Barbell Back Squats (4 sets x 8 reps)', 'Leg Press Machine (3 sets x 12 reps)', 'Romanian Deadlift (RDL) for Hamstrings (3 sets)', 'Leg Extensions & Calf Raises (4 sets)', 'Hanging Leg Raises & Plank hold (3 sets)'] },
          { day: 'Thursday (Day 4)', focus: 'Push — Hypertrophy & Pump', exercises: ['Dumbbell Bench Press (4 sets x 10 reps)', 'Cable Chest Flyes (3 sets x 15 reps)', 'Arnold Shoulder Press (3 sets x 10 reps)', 'Dumbbell Lateral Raises drop set', 'Overhead Tricep Extension (3 sets)'] },
          { day: 'Friday (Day 5)', focus: 'Pull — Width & Thickness Focus', exercises: ['Single-Arm Dumbbell Rows (4 sets)', 'Close-Grip Lat Pulldowns (3 sets)', 'T-Bar Row Machine (3 sets x 10 reps)', 'Hammer Curls & Preacher Curls (4 sets)'] },
          { day: 'Saturday (Day 6)', focus: 'Akhada Functional & Conditioning', exercises: ['Gada / Macebell 360 Swings for shoulder mobility', 'Kettlebell Swings & Battle Ropes (15 mins HIIT)', 'Walking Lunges with dumbbells', 'Abdominal Wheel Rollouts & Core stability'] },
          { day: 'Sunday (Day 7)', focus: 'Rest, Recovery & Surya Yoga', exercises: ['Full body foam rolling & stretching', 'Surya Namaskar (12 rounds)', 'Pranayama breathing & deep mental relaxation'] }
        ];
      } else if (splitPref === 'upper_lower') {
        split = [
          { day: 'Monday', focus: 'Upper Body A (Heavy Compound)', exercises: ['Bench Press', 'Barbell Row', 'Overhead Press', 'Pull-ups', 'Barbell Curls'] },
          { day: 'Tuesday', focus: 'Lower Body A (Squat & Calves)', exercises: ['Barbell Squats', 'Romanian Deadlift', 'Leg Press', 'Standing Calf Raises', 'Core Planks'] },
          { day: 'Wednesday', focus: 'Active Recovery & Cardio', exercises: ['45 Mins Incline Treadmill Walk', 'Surya Namaskar & joint stretching', 'Foam rolling'] },
          { day: 'Thursday', focus: 'Upper Body B (Hypertrophy)', exercises: ['Incline Dumbbell Press', 'Lat Pulldowns', 'Seated Cable Row', 'Lateral Raises', 'Tricep Rope Pushdowns'] },
          { day: 'Friday', focus: 'Lower Body B (Deadlift & Hamstrings)', exercises: ['Trap Bar Deadlifts', 'Bulgarian Split Squats', 'Leg Curl Machine', 'Seated Calf Raises', 'Hanging Leg Raises'] },
          { day: 'Saturday', focus: 'Akhada Core & Conditioning', exercises: ['Kettlebell swings', 'Medicine ball slams', 'Turf sled push', 'Battle ropes'] },
          { day: 'Sunday', focus: 'Complete Rest', exercises: ['Sleep 8+ hours', 'Hydration focus (4+ Liters)', 'Family & mental calm'] }
        ];
      } else {
        split = [
          { day: 'Monday, Wed, Friday', focus: 'Full Body Strength & Core', exercises: ['Barbell Squats (3 sets)', 'Bench Press or Push-ups (3 sets)', 'Lat Pulldowns / Rows (3 sets)', 'Overhead Dumbbell Press (3 sets)', 'Plank hold & Leg Raises'] },
          { day: 'Tuesday, Thursday, Saturday', focus: 'Cardio, HIIT & Akhada Mobility', exercises: ['30 Mins Treadmill / Rower intervals', 'Gada / Macebell swings for shoulder rehab', 'Core stability & stretching flows'] },
          { day: 'Sunday', focus: 'Rest Day', exercises: ['Complete rest and mental relaxation'] }
        ];
      }

      let tip = `Vikram Sinh's Pro-Tip for ${name}: Consistency beats intensity! Stick to this ${dietPref.replace('_', ' ')} diet plan with 4+ liters of daily water. Never skip your warm-up sets!`;
      if (goal === 'fat_loss') {
        tip = `Anjali Sharma's Shred Tip for ${name}: Prioritize protein at every meal to stay full. Incline treadmill walking for 20 mins after lifting will accelerate your fat burn safely!`;
      }

      setPlanResult({
        bmi: bmiVal,
        bmiCategory: cat,
        bmr: bmrVal,
        targetCalories: targetCals,
        targetProtein: targetProt,
        waterIntake: `${Math.round(weightKg * 0.05)} Liters / Day`,
        weeklyWorkoutSplit: split,
        dailyDietChart: meals,
        proTip: tip
      });
      setIsGenerating(false);
    }, 600);
  };

  // Generate initial plan on mount
  React.useEffect(() => {
    calculateAndGenerate();
  }, []);

  return (
    <div className="py-16 lg:py-24 bg-[#FDFCF7] border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAD8C0]/50 text-[#6B4F31] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D4B996]/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shree Ram AI Fitness Guru • Free Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif tracking-tight">
            Interactive <span className="text-[#A67C52]">BMI, Diet & Workout</span> Planner
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Enter your physical details and dietary preferences (Pure Veg, Jain, Eggetarian, or Non-Veg) below. Our algorithm instantly constructs your customized weekly training routine and Indian nutrition chart!
          </p>
        </motion.div>

        {/* 2-Column Grid: Inputs (Left) & Results (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Input Form + 7-Day Graph Visualizer */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* User Input Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-md space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-lg">
                  <Activity className="w-5 h-5 text-[#A67C52]" />
                  <span>Your Physical Profile</span>
                </div>
                <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                  100% Free
                </span>
              </div>

              {/* Name & Gender */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value || 'Member')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#A67C52] bg-[#F8F6F0] text-stone-900 font-medium text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#A67C52] bg-[#F8F6F0] text-stone-900 font-medium text-sm"
                  >
                    <option value="male">Male (पुरुष)</option>
                    <option value="female">Female (महिला)</option>
                  </select>
                </div>
              </div>

              {/* Height & Weight Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Height: <span className="text-[#A67C52]">{heightCm} cm</span> <span className="text-stone-400 font-normal">({(heightCm / 30.48).toFixed(1)} ft)</span>
                    </label>
                    <span className="text-xs font-medium text-stone-500">140 - 210 cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-stone-900 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Weight: <span className="text-[#A67C52]">{weightKg} kg</span>
                    </label>
                    <span className="text-xs font-medium text-stone-500">40 - 150 kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-stone-900 h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Primary Fitness Goal
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'muscle_gain', label: 'Muscle Gain', sub: 'Hypertrophy' },
                    { id: 'fat_loss', label: 'Fat Shred', sub: 'Weight Loss' },
                    { id: 'strength', label: 'Raw Strength', sub: 'Powerlifting' },
                    { id: 'general', label: 'General Stamina', sub: 'Yoga & Fit' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        goal === g.id
                          ? 'bg-stone-900 text-[#EAD8C0] border-stone-800 font-bold shadow-sm'
                          : 'bg-[#F8F6F0] text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{g.label}</div>
                      <div className={`text-[10px] ${goal === g.id ? 'text-[#D4B996]' : 'text-stone-500'}`}>{g.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Dietary Preference (100% Satvik Friendly)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'pure_veg', label: 'Pure Vegetarian', sub: 'Paneer, Soya, Whey' },
                    { id: 'eggetarian', label: 'Eggetarian', sub: 'Veg + Eggs' },
                    { id: 'jain_veg', label: 'Jain Pure Veg', sub: 'No Root Vegetables' },
                    { id: 'non_veg', label: 'Non-Vegetarian', sub: 'Chicken, Fish, Eggs' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDietPref(d.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        dietPref === d.id
                          ? 'bg-[#EFECE6] text-stone-900 border-[#A67C52] font-bold shadow-xs ring-1 ring-[#A67C52]'
                          : 'bg-[#F8F6F0] text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="text-xs font-bold flex items-center gap-1">
                        <Utensils className="w-3 h-3 text-[#A67C52]" />
                        <span>{d.label}</span>
                      </div>
                      <div className="text-[10px] text-stone-500 mt-0.5">{d.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Workout Split */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Preferred Training Split
                </label>
                <select
                  value={splitPref}
                  onChange={(e) => setSplitPref(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#A67C52] bg-[#F8F6F0] text-stone-900 font-medium text-sm"
                >
                  <option value="ppl">6-Day Push / Pull / Legs (Most Popular)</option>
                  <option value="upper_lower">4-Day Upper / Lower Split (Balanced)</option>
                  <option value="full_body">3-Day Full Body & Akhada Conditioning</option>
                </select>
              </div>

              {/* Generate Button */}
              <button
                type="button"
                onClick={calculateAndGenerate}
                disabled={isGenerating}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-stone-700 text-[#EAD8C0] font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#D4B996]" />
                    <span>Calculating Biomarkers...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#D4B996]" />
                    <span>Update Custom Diet & Routine</span>
                  </>
                )}
              </button>

            </motion.div>

            {/* NEW: 7-DAY WORKOUT & CALORIE BURN GRAPH CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#1C1A17] text-[#FFF9F0] p-6 sm:p-7 rounded-3xl border border-[#D4B996]/30 shadow-xl space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#2E2923] text-[#D4B996]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-serif text-[#FFF9F0] leading-tight">
                      7-Day Workout & Calorie Graph
                    </h4>
                    <p className="text-[11px] text-[#C8BAA8]">Weekly target projection</p>
                  </div>
                </div>

                {/* Metric Selector Tabs */}
                <div className="flex items-center p-1 bg-[#28241F] rounded-xl border border-[#D4B996]/20 text-[11px] font-bold">
                  <button
                    onClick={() => setGraphMetric('calories')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      graphMetric === 'calories'
                        ? 'bg-[#D4B996] text-[#1C1A17] shadow-xs'
                        : 'text-[#C8BAA8] hover:text-white'
                    }`}
                  >
                    Burn (kcal)
                  </button>
                  <button
                    onClick={() => setGraphMetric('intensity')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      graphMetric === 'intensity'
                        ? 'bg-[#D4B996] text-[#1C1A17] shadow-xs'
                        : 'text-[#C8BAA8] hover:text-white'
                    }`}
                  >
                    Intensity (%)
                  </button>
                </div>
              </div>

              {/* Total Summary Row */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#24211D] p-3 rounded-xl border border-[#D4B996]/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#C8BAA8]">
                    <Flame className="w-4 h-4 text-[#D4B996]" />
                    <span>Est. Weekly Burn</span>
                  </div>
                  <span className="font-bold text-[#FFF9F0] font-serif text-sm">{totalWeeklyCalories.toLocaleString()} kcal</span>
                </div>
                <div className="bg-[#24211D] p-3 rounded-xl border border-[#D4B996]/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#C8BAA8]">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Avg Intensity</span>
                  </div>
                  <span className="font-bold text-[#FFF9F0] font-serif text-sm">{avgIntensity}%</span>
                </div>
              </div>

              {/* Interactive 7-Day Bar Chart */}
              <div className="pt-2">
                <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-36 pt-6 px-1">
                  {graphData.map((d, idx) => {
                    const isSelected = selectedGraphDay === idx;
                    const val = graphMetric === 'calories' ? d.calories : d.intensity;
                    const heightPercent = Math.max(15, Math.round((val / maxGraphVal) * 100));
                    const isRest = d.intensity <= 40;

                    return (
                      <div 
                        key={d.day}
                        onClick={() => setSelectedGraphDay(idx)}
                        className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                      >
                        {/* Value label above bar */}
                        <span className={`text-[10px] font-bold mb-1 transition-colors ${
                          isSelected ? 'text-[#D4B996]' : 'text-stone-500 group-hover:text-stone-300'
                        }`}>
                          {val}{graphMetric === 'intensity' ? '%' : ''}
                        </span>

                        {/* Bar Container */}
                        <div className="w-full bg-[#27231E] rounded-t-lg overflow-hidden flex items-end relative h-28 border border-stone-800">
                          <motion.div
                            initial={{ height: '0%' }}
                            animate={{ height: `${heightPercent}%` }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className={`w-full rounded-t-md transition-all duration-200 ${
                              isSelected
                                ? 'bg-gradient-to-t from-[#A67C52] to-[#D4B996] shadow-[0_0_12px_rgba(212,185,150,0.5)]'
                                : isRest
                                ? 'bg-stone-700/50 group-hover:bg-stone-600/70'
                                : 'bg-[#3E3831] group-hover:bg-[#585046]'
                            }`}
                          />
                        </div>

                        {/* Day label below */}
                        <span className={`text-[11px] font-bold mt-2 tracking-tight ${
                          isSelected ? 'text-[#D4B996]' : 'text-[#C8BAA8]'
                        }`}>
                          {d.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Day Inspector Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGraphDay + '-' + splitPref}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#24211D] p-4 rounded-2xl border border-[#D4B996]/40 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                    <span className="font-bold text-[#D4B996] text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4B996]" />
                      {currentDayInfo.day} Training Focus
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#34302A] text-[#FFF9F0] border border-[#D4B996]/30">
                      Target HR: {currentDayInfo.hrZone}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                    <div>
                      <h5 className="font-bold text-[#FFF9F0] text-sm">{currentDayInfo.focus}</h5>
                      <p className="text-[#C8BAA8] text-[11px] mt-0.5">
                        Burn Target: <strong className="text-emerald-400">{currentDayInfo.calories} kcal</strong> • Intensity: <strong className="text-[#D4B996]">{currentDayInfo.intensity}%</strong>
                      </p>
                    </div>

                    <div className="bg-[#1C1A17] p-2 rounded-xl border border-stone-800 text-[11px] text-[#C8BAA8] shrink-0">
                      <span className="text-[10px] text-[#A89886] block font-medium">Satvik Recovery Drink:</span>
                      <strong className="text-[#FFF9F0]">{currentDayInfo.recovery}</strong>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footnote */}
              <p className="text-[10px] text-[#A89886] text-center pt-1 font-medium">
                💡 Tip: Click any day bar above to inspect target calorie burn & Satvik post-workout drink.
              </p>

            </motion.div>

          </div>

          {/* RIGHT: Generated Results Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {planResult ? (
              <div className="bg-white rounded-3xl border border-stone-200/90 shadow-lg overflow-hidden animate-fadeIn">
                
                {/* Top Banner Stats Grid */}
                <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 p-6 sm:p-8 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-700">
                    <div>
                      <span className="px-2.5 py-1 rounded bg-[#A67C52] text-white text-xs font-bold uppercase tracking-wider">
                        {name}'s Personalized Fitness Roadmap
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-2">
                        Target: {goal === 'muscle_gain' ? 'Lean Muscle Mass' : goal === 'fat_loss' ? 'Accelerated Fat Shred' : goal === 'strength' ? 'Raw Power & Akhada Strength' : 'Stamina & Flexibility'}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#EAD8C0] font-medium block">Recommended Daily Intake</span>
                      <span className="text-3xl font-extrabold text-[#D4B996] font-serif">
                        {planResult.targetCalories} kcal
                      </span>
                    </div>
                  </div>

                  {/* Biomarker Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <span className="text-[11px] text-stone-400 font-medium block">Your BMI Score</span>
                      <span className="text-xl font-bold text-white">{planResult.bmi}</span>
                      <span className="text-[10px] text-[#D4B996] block truncate">{planResult.bmiCategory}</span>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <span className="text-[11px] text-stone-400 font-medium block">Daily Protein</span>
                      <span className="text-lg font-bold text-white">{planResult.targetProtein}</span>
                      <span className="text-[10px] text-stone-300 block">Crucial for recovery</span>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <span className="text-[11px] text-stone-400 font-medium block">Basal Metabolic Rate</span>
                      <span className="text-xl font-bold text-white">{planResult.bmr} kcal</span>
                      <span className="text-[10px] text-stone-300 block">Resting burn</span>
                    </div>
                    <div className="bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                      <span className="text-[11px] text-stone-400 font-medium block">Water Hydration</span>
                      <span className="text-xl font-bold text-[#D4B996]">{planResult.waterIntake}</span>
                      <span className="text-[10px] text-stone-300 block">With electrolytes</span>
                    </div>
                  </div>
                </div>

                {/* Coach Pro-Tip Box */}
                <div className="p-4 sm:p-5 bg-[#EFECE6] border-b border-stone-200 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-stone-900 text-[#EAD8C0] shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8C6239]">Master Coach Advice</p>
                    <p className="text-xs sm:text-sm text-stone-800 font-medium mt-0.5 leading-relaxed">
                      {planResult.proTip}
                    </p>
                  </div>
                </div>

                {/* Tabs for Diet vs Workout */}
                <div className="p-6 sm:p-8 space-y-8">
                  
                  {/* DIET CHART SECTION */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-xl">
                        <Utensils className="w-5 h-5 text-[#A67C52]" />
                        <span>Daily Satvik & Western Nutrition Chart</span>
                      </div>
                      <span className="text-xs font-bold text-[#6B4F31] bg-[#EAD8C0]/40 px-3 py-1 rounded-full border border-[#D4B996]/50 uppercase">
                        {dietPref.replace('_', ' ')}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {planResult.dailyDietChart.map((meal, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-[#F8F6F0] border border-stone-200/80 hover:border-[#D4B996] transition-colors flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-xs text-stone-500 font-semibold mb-1">
                              <span className="text-[#8C6239]">{meal.time}</span>
                              <span className="bg-white px-2 py-0.5 rounded border border-stone-200 text-stone-700">
                                {meal.calories} kcal • {meal.protein} protein
                              </span>
                            </div>
                            <h5 className="text-sm font-bold text-stone-900">{meal.name}</h5>
                            <ul className="mt-2 space-y-1">
                              {meal.items.map((it, i) => (
                                <li key={i} className="text-xs text-stone-600 flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] shrink-0 mt-1" />
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WORKOUT SPLIT SECTION */}
                  <div className="pt-6 border-t border-stone-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-xl">
                        <Dumbbell className="w-5 h-5 text-[#A67C52]" />
                        <span>Weekly Training Curriculum</span>
                      </div>
                      <span className="text-xs font-bold text-stone-700 bg-stone-100 px-3 py-1 rounded-full border border-stone-300 uppercase">
                        {splitPref.replace('_', ' ')}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {planResult.weeklyWorkoutSplit.map((dayPlan, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-stone-100 mb-2">
                            <span className="text-sm font-bold text-stone-900">{dayPlan.day}</span>
                            <span className="text-xs font-semibold text-[#8C6239] bg-[#EFECE6] px-2.5 py-1 rounded-md w-fit">
                              {dayPlan.focus}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {dayPlan.exercises.map((ex, i) => (
                              <span key={i} className="text-xs bg-[#F8F6F0] text-stone-700 px-3 py-1 rounded-lg border border-stone-200/60 font-medium">
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8F6F0] p-4 rounded-2xl border border-stone-200">
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Ready to start? Bring this plan to Shree Ram GYM for free trainer guidance!</span>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#EAD8C0] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 shrink-0"
                    >
                      <Printer className="w-4 h-4 text-[#D4B996]" />
                      <span>Print or Save Plan PDF</span>
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              <div className="h-96 rounded-3xl border-2 border-dashed border-stone-300 bg-[#F8F6F0] flex flex-col items-center justify-center p-8 text-center">
                <Dumbbell className="w-12 h-12 text-stone-300 mb-3 animate-pulse" />
                <h3 className="text-xl font-bold text-stone-700 font-serif">Configure Your Goal Above</h3>
                <p className="text-xs text-stone-500 max-w-sm mt-1">
                  Adjust your height, weight, and dietary preference on the left and click "Update Custom Diet & Routine" to generate your roadmap!
                </p>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </div>
  );
};
