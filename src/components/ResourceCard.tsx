import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
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
      case 'exam':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(resource.category)} uppercase`}>
            {resource.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Visit Resource <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;