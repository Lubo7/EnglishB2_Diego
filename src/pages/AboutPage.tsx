import React from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Clock, Calendar, Target, FileText, HelpCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">About the B2 English Exam</h1>
        <p className="text-gray-600">
          The B2 level exam is an upper-intermediate level qualification that demonstrates your ability to
          communicate confidently in English for work, study, and everyday situations.
        </p>
      </motion.div>

      {/* Exam Overview */}
      <motion.section 
        className="bg-white rounded-lg shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Award className="h-5 w-5 text-blue-500 mr-2" />
          Exam Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">What is the B2 Level?</h3>
            <p className="text-gray-600">
              B2 is the fourth level of the Common European Framework of Reference (CEFR). 
              At this level, you can:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
              <li>Understand complex texts on concrete and abstract topics</li>
              <li>Interact with native speakers with a degree of fluency and spontaneity</li>
              <li>Produce clear, detailed text on a wide range of subjects</li>
              <li>Explain your viewpoint on issues, giving advantages and disadvantages</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Exam Structure</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Book className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Reading & Use of English</p>
                  <p className="text-sm text-gray-600">7 parts, 52 questions, 1 hour 15 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Writing</p>
                  <p className="text-sm text-gray-600">2 parts, 2 tasks, 1 hour 20 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Listening</p>
                  <p className="text-sm text-gray-600">4 parts, 30 questions, 40 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Speaking</p>
                  <p className="text-sm text-gray-600">4 parts, 14 minutes, with another candidate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Study Plan Benefits */}
      <motion.section 
        className="bg-white rounded-lg shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Calendar className="h-5 w-5 text-blue-500 mr-2" />
          Your Study Plan Benefits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-blue-100 rounded-lg bg-blue-50">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Time-Efficient</h3>
            <p className="text-gray-600">
              Optimized for just 2 hours of study per day, focusing on the most important skills and knowledge areas.
            </p>
          </div>
          
          <div className="p-4 border border-green-100 rounded-lg bg-green-50">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Integrated Approach</h3>
            <p className="text-gray-600">
              Grammar and vocabulary are embedded within skill practice, maximizing the efficiency of your study time.
            </p>
          </div>
          
          <div className="p-4 border border-purple-100 rounded-lg bg-purple-50">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Exam-Focused</h3>
            <p className="text-gray-600">
              Includes mini-mock tests in Week 2 to build familiarity with the exam format and reduce test anxiety.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tips for Success */}
      <motion.section 
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Clock className="h-5 w-5 text-blue-500 mr-2" />
          Tips for Success
        </h2>
        
        <ul className="space-y-4">
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 mr-3">1</span>
            <div>
              <p className="font-medium text-gray-700">Be Consistent</p>
              <p className="text-gray-600">Stick to the study plan daily. Consistency is more important than marathon sessions.</p>
            </div>
          </li>
          
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 mr-3">2</span>
            <div>
              <p className="font-medium text-gray-700">Track Your Progress</p>
              <p className="text-gray-600">Use the progress tracking feature to stay motivated and identify areas for improvement.</p>
            </div>
          </li>
          
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 mr-3">3</span>
            <div>
              <p className="font-medium text-gray-700">Utilize Rest Days</p>
              <p className="text-gray-600">The rest days are strategic - use them to recharge while still keeping your mind in English mode.</p>
            </div>
          </li>
          
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 mr-3">4</span>
            <div>
              <p className="font-medium text-gray-700">Active Learning</p>
              <p className="text-gray-600">Don't just read or listen passively. Engage actively by taking notes and speaking out loud.</p>
            </div>
          </li>
          
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 mr-3">5</span>
            <div>
              <p className="font-medium text-gray-700">Self-Assessment</p>
              <p className="text-gray-600">Be honest in evaluating your progress and don't hesitate to revisit difficult areas.</p>
            </div>
          </li>
        </ul>
      </motion.section>
    </div>
  );
};

export default AboutPage;