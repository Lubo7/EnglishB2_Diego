import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, BookOpen, Award } from 'lucide-react';
import { useProgress } from '../components/ProgressContext';
import { weekOneData } from '../data/weekOne';
import { weekTwoData } from '../data/weekTwo';

const HomePage: React.FC = () => {
  const { progress, resetProgress } = useProgress();
  
  // Calculate total and completed activities
  const allDays = [...weekOneData, ...weekTwoData];
  const totalActivities = allDays.reduce((total, day) => {
    return total + day.hours.reduce((hourTotal, hour) => {
      return hourTotal + hour.activities.length;
    }, 0);
  }, 0);
  
  const completedActivities = progress.completedActivities.length;
  const completionPercentage = Math.round((completedActivities / totalActivities) * 100);
  
  // Upcoming activities (first 3 uncompleted activities)
  const upcomingActivities = allDays.flatMap(day => 
    day.hours.flatMap(hour => 
      hour.activities.filter(activity => 
        !progress.completedActivities.includes(activity.id)
      ).map(activity => ({
        ...activity,
        day: day.title,
        theme: day.theme
      }))
    )
  ).slice(0, 3);

  return (
    <div>
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-3">B2 English Preparation Plan</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your personalized 2-week intensive study plan to prepare for the B2 English exam.
          Follow the daily activities, track your progress, and succeed in your exam!
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Progress</h2>
          <button 
            onClick={resetProgress}
            className="text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            Reset Progress
          </button>
        </div>
        
        <div className="mb-3 flex justify-between items-center">
          <span className="text-gray-600">
            {completedActivities} of {totalActivities} activities completed
          </span>
          <span className="font-medium text-blue-600">{completionPercentage}%</span>
        </div>
        
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
          <motion.div 
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/week-one" className="group">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-200 group-hover:border-blue-300 group-hover:shadow-md">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Week 1</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Focused Foundations & Integrated Practice</p>
              <div className="flex items-center text-sm text-blue-600">
                <span>View Week 1 Plan</span>
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
          
          <Link to="/week-two" className="group">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-100 transition-all duration-200 group-hover:border-teal-300 group-hover:shadow-md">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-teal-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Week 2</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">Intensification & Mini-Mocks</p>
              <div className="flex items-center text-sm text-teal-600">
                <span>View Week 2 Plan</span>
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Upcoming Activities */}
      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Activities</h2>
        
        {upcomingActivities.length > 0 ? (
          <ul className="space-y-3">
            {upcomingActivities.map((activity) => (
              <li key={activity.id} className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded-r-md">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-800">{activity.day}: {activity.title}</span>
                  <span className="text-xs text-gray-500">{activity.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-6">
            <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-2" />
            <p className="text-gray-700">You've completed all activities!</p>
          </div>
        )}
      </motion.div>

      {/* Quick Links */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/resources" className="group">
          <div className="bg-white rounded-lg p-5 border border-gray-200 transition-all duration-200 group-hover:border-blue-300 group-hover:shadow-md">
            <div className="flex items-center mb-2">
              <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Learning Resources</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Access additional resources to enhance your learning.</p>
            <div className="flex items-center text-sm text-blue-600">
              <span>View Resources</span>
              <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </Link>
        
        <Link to="/about" className="group">
          <div className="bg-white rounded-lg p-5 border border-gray-200 transition-all duration-200 group-hover:border-blue-300 group-hover:shadow-md">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">About B2 Exam</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Learn more about the B2 English exam and what to expect.</p>
            <div className="flex items-center text-sm text-blue-600">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;