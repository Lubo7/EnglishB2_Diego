import React from 'react';
import { Activity } from '../types';
import { useProgress } from './ProgressContext';
import { BookOpen, Pencil, Headphones, Mic, BookText, GraduationCap, RefreshCw, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const { progress, toggleActivityCompletion } = useProgress();
  const isCompleted = progress.completedActivities.includes(activity.id);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'reading':
        return <BookOpen className="h-4 w-4" />;
      case 'writing':
        return <Pencil className="h-4 w-4" />;
      case 'listening':
        return <Headphones className="h-4 w-4" />;
      case 'speaking':
        return <Mic className="h-4 w-4" />;
      case 'grammar':
        return <BookText className="h-4 w-4" />;
      case 'vocabulary':
        return <GraduationCap className="h-4 w-4" />;
      case 'review':
        return <RefreshCw className="h-4 w-4" />;
      case 'rest':
        return <Coffee className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'reading':
        return 'bg-blue-100 text-blue-600';
      case 'writing':
        return 'bg-purple-100 text-purple-600';
      case 'listening':
        return 'bg-green-100 text-green-600';
      case 'speaking':
        return 'bg-orange-100 text-orange-600';
      case 'grammar':
        return 'bg-indigo-100 text-indigo-600';
      case 'vocabulary':
        return 'bg-pink-100 text-pink-600';
      case 'review':
        return 'bg-yellow-100 text-yellow-600';
      case 'rest':
        return 'bg-teal-100 text-teal-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.li 
      className={`p-3 rounded-md border ${isCompleted ? 'bg-gray-50 border-green-200' : 'bg-white border-gray-200'}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 p-1 rounded-md ${getActivityColor(activity.type)} mr-3`}>
          {getActivityIcon(activity.type)}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h5 className={`text-sm font-medium ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
              {activity.title}
            </h5>
            <span className="text-xs text-gray-500">{activity.duration}</span>
          </div>
          <p className={`text-sm mt-1 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
            {activity.description}
          </p>
        </div>
      </div>
      <div className="mt-2 text-right">
        <button
          onClick={() => toggleActivityCompletion(activity.id)}
          className={`text-xs px-2 py-1 rounded-md ${
            isCompleted 
              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition-colors duration-200`}
        >
          {isCompleted ? 'Completed ✓' : 'Mark as Complete'}
        </button>
      </div>
    </motion.li>
  );
};

export default ActivityItem;