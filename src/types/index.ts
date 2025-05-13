export interface DayActivity {
  id: number;
  title: string;
  theme: string;
  grammarFocus: string;
  hours: Hour[];
  isRestDay?: boolean;
}

export interface Hour {
  id: number;
  title: string;
  duration: string;
  activities: Activity[];
}

export interface Activity {
  id: number;
  type: 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary' | 'review' | 'rest';
  title: string;
  description: string;
  duration: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  category: 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary' | 'exam';
}

export interface ProgressState {
  completedActivities: number[];
}