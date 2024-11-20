import React from 'react';
import { Book, Users, Download, Bell } from 'lucide-react';

const categories = [
  {
    title: "Trending Technologies",
    items: ["AI in Farming", "IoT Solutions", "Smart Irrigation", "Drone Technology"],
    icon: Book
  },
  {
    title: "Disease Prevention",
    items: ["Common Diseases", "Prevention Techniques", "Early Detection", "Treatment Guides"],
    icon: Users
  },
  {
    title: "Resources",
    items: ["E-Books", "Whitepapers", "Case Studies", "DIY Guides"],
    icon: Download
  },
  {
    title: "Updates",
    items: ["News", "Webinars", "Expert Sessions", "Community Forums"],
    icon: Bell
  }
];

export default function LearningSection() {
  return (
    <div id="learn" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive agricultural knowledge at your fingertips
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <category.icon className="h-6 w-6 text-green-500" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600 hover:text-green-500 cursor-pointer">
                      <span className="ml-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}