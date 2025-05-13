import React from 'react';
import { motion } from 'framer-motion';
import DayCard from '../components/DayCard';
import WeeklyProgress from '../components/WeeklyProgress';
import { weekTwoData } from '../data/weekTwo';

const WeekTwoPage: React.FC = () => {
  return (
    <div>
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Week 2: Intensification & Mini-Mocks</h1>
        <p className="text-gray-600">
          The second week intensifies your preparation with more challenging activities and includes 
          mini-mock tests to simulate actual exam conditions and build test-taking confidence.
        </p>
      </motion.div>

      <WeeklyProgress days={weekTwoData} week="Week 2" />

      <div className="space-y-6">
        {weekTwoData.map((day, index) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeekTwoPage;