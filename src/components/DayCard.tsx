import React from 'react';
import { motion } from 'framer-motion';
import { DayActivity } from '../types';
import ActivityList from './ActivityList';
import { BookOpen, Calendar } from 'lucide-react';

interface DayCardProps {
  day: DayActivity;
}

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`mb-6 rounded-lg overflow-hidden shadow-md bg-white ${day.isRestDay ? 'border-l-4 border-teal-500' : 'border-l-4 border-blue-500'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <Calendar className={`h-5 w-5 ${day.isRestDay ? 'text-teal-500' : 'text-blue-500'} mr-2`} />
          <h3 className="text-lg font-semibold">{day.title}: {day.theme}</h3>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-3">
            <BookOpen className="h-4 w-4 inline mr-1" />
            {day.grammarFocus}
          </span>
          <button
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
            aria-expanded={isExpanded}
          >
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-100 px-4 pt-2 pb-4"
        >
          {day.hours.map((hour) => (
            <div key={hour.id} className="mb-4">
              <h4 className="text-md font-medium text-gray-700 mb-2">{hour.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{hour.duration}</p>
              <ActivityList activities={hour.activities} />
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DayCard;