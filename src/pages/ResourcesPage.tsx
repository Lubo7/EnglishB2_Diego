import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResourceCard from '../components/ResourceCard';
import { resourcesData } from '../data/resources';
import { Resource } from '../types';

type Category = 'all' | 'reading' | 'writing' | 'listening' | 'speaking' | 'grammar' | 'vocabulary' | 'exam';

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Resources' },
    { value: 'reading', label: 'Reading' },
    { value: 'writing', label: 'Writing' },
    { value: 'listening', label: 'Listening' },
    { value: 'speaking', label: 'Speaking' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'vocabulary', label: 'Vocabulary' },
    { value: 'exam', label: 'Exam Practice' },
  ];
  
  const filteredResources = activeCategory === 'all' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.category === activeCategory);

  return (
    <div>
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Learning Resources</h1>
        <p className="text-gray-600">
          Explore these carefully selected resources to supplement your learning journey and enhance your exam preparation.
        </p>
      </motion.div>
      
      {/* Category Filter */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${activeCategory === category.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Resources Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredResources.map((resource: Resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </motion.div>
      
      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;