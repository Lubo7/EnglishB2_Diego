import React from 'react';
import { motion } from 'framer-motion';
import DayCard from '../components/DayCard';
import WeeklyProgress from '../components/WeeklyProgress';
import { weekOneData } from '../data/weekOne';

const WeekOnePage: React.FC = () => {
  return (
    <div>
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Week 1: Focused Foundations & Integrated Practice</h1>
        <p className="text-gray-600">
          The first week focuses on building a strong foundation across all language skills while 
          integrating grammar and vocabulary learning within the practical exercises.
        </p>
      </motion.div>

      <WeeklyProgress days={weekOneData} week="Week 1" />

      <div className="space-y-6">
        {weekOneData.map((day, index) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeekOnePage;