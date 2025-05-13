import React from 'react';
import { useProgress } from './ProgressContext';
import { DayActivity } from '../types';
import { motion } from 'framer-motion';

interface WeeklyProgressProps {
  days: DayActivity[];
  week: 'Week 1' | 'Week 2';
}

const WeeklyProgress: React.FC<WeeklyProgressProps> = ({ days, week }) => {
  const { progress } = useProgress();
  
  // Calculate total activities from all days
  const totalActivities = days.reduce((total, day) => {
    return total + day.hours.reduce((hourTotal, hour) => {
      return hourTotal + hour.activities.length;
    }, 0);
  }, 0);
  
  // Count completed activities
  const completedActivities = progress.completedActivities.filter(id => {
    // Check if this activity ID belongs to any day in this week
    return days.some(day => 
      day.hours.some(hour => 
        hour.activities.some(activity => activity.id === id)
      )
    );
  }).length;
  
  // Calculate percentage
  const percentage = totalActivities > 0 
    ? Math.round((completedActivities / totalActivities) * 100) 
    : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{week} Progress</h3>
      
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {completedActivities} of {totalActivities} activities completed
        </span>
        <span className="text-sm font-medium text-blue-600">{percentage}%</span>
      </div>
      
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      
      {percentage === 100 && (
        <div className="mt-3 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            Week Completed! 🎉
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WeeklyProgress;