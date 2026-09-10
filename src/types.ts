export type ProgramCategory = 'all' | 'strength' | 'cardio' | 'functional' | 'yoga' | 'weightloss';

export interface WorkoutProgram {
  id: string;
  title: string;
  hindiTitle?: string;
  category: ProgramCategory;
  description: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  caloriesBurn: string;
  trainerName: string;
  features: string[];
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
  rating: number;
}

export interface BatchSchedule {
  id: string;
  time: string;
  name: string;
  type: 'Morning' | 'Evening' | 'Special';
  trainer: string;
  intensity: string;
  spotsLeft: number;
  days: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: string[];
  colorTheme: 'light' | 'brown' | 'dark';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  transformation: string;
  rating: number;
  avatar: string;
}

export interface DietMeal {
  time: string;
  name: string;
  items: string[];
  calories: number;
  protein: string;
}

export interface CustomPlanResult {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  targetCalories: number;
  targetProtein: string;
  waterIntake: string;
  weeklyWorkoutSplit: {
    day: string;
    focus: string;
    exercises: string[];
  }[];
  dailyDietChart: DietMeal[];
  proTip: string;
}
