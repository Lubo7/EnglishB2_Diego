import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProgressState } from '../types';

interface ProgressContextType {
  progress: ProgressState;
  toggleActivityCompletion: (activityId: number) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const savedProgress = localStorage.getItem('b2EnglishProgress');
    return savedProgress ? JSON.parse(savedProgress) : { completedActivities: [] };
  });

  useEffect(() => {
    localStorage.setItem('b2EnglishProgress', JSON.stringify(progress));
  }, [progress]);

  const toggleActivityCompletion = (activityId: number) => {
    setProgress((prevProgress) => {
      const isCompleted = prevProgress.completedActivities.includes(activityId);
      
      if (isCompleted) {
        return {
          ...prevProgress,
          completedActivities: prevProgress.completedActivities.filter(id => id !== activityId)
        };
      } else {
        return {
          ...prevProgress,
          completedActivities: [...prevProgress.completedActivities, activityId]
        };
      }
    });
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgress({ completedActivities: [] });
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, toggleActivityCompletion, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};