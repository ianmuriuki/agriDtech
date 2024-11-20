import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Brain, Database, Globe, Video, MessageSquare, Zap, Languages, Leaf, Smartphone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'AR Crop Analysis',
    description: 'Point your camera at crops for real-time AR overlay of health insights.',
    icon: Smartphone,
    path: '/ar-analysis',
    api: 'https://api.weatherapi.com/v1/current.json', // Example Weather API
  },
  {
    name: 'Disease Detection',
    description: 'Instant disease detection using advanced AI technology.',
    icon: Camera,
    path: '/disease-detection',
    api: 'https://api.plantid.com/identify', // Example Plant Disease API
  },
  {
    name: 'Global Exchange',
    description: 'Connect with farmers worldwide to share experiences.',
    icon: Globe,
    path: '/community',
  },
  {
    name: 'Expert Sessions',
    description: 'Schedule live sessions with agricultural experts.',
    icon: Video,
    path: '/expert-sessions',
  },
  // ... other features
];

const FeatureCard = ({ feature }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      <Link to={feature.path} className="block">
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
          {feature.name}
        </p>
        <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
          {feature.description}
        </p>
        {feature.api && (
          <div className="mt-4 ml-16 text-sm text-green-600 dark:text-green-400">
            API Integration Ready
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="features" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Advanced Tools for Modern Farming
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Combining AR technology and sustainability metrics with global farming expertise.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}