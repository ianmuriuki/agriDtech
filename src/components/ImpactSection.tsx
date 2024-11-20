import React from 'react';
import { Leaf, TrendingUp, Globe } from 'lucide-react';

export default function ImpactSection() {
  return (
    <div className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Impact and Benefits
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Making a difference in modern agriculture
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">Farmer Empowerment</h3>
            <p className="mt-2 text-gray-600">
              Quick and reliable disease diagnoses enable prompt action, reducing crop losses significantly. 
              Democratizing access to agricultural expertise in regions with limited resources.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">Sustainability</h3>
            <p className="mt-2 text-gray-600">
              Promotes environmentally friendly farming practices by reducing pesticide use through early detection. 
              Supports sustainable agriculture with preventive measures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">Economic Benefits</h3>
            <p className="mt-2 text-gray-600">
              Early detection reduces financial losses from crop failure, increasing productivity and profits. 
              Improved yields contribute to food security and economic stability.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Comparison with Traditional Methods
          </h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <div className="text-green-500 font-bold text-xl mb-2">Speed</div>
              <p className="text-gray-600">Results in seconds vs. traditional methods taking days</p>
            </div>
            <div className="text-center">
              <div className="text-green-500 font-bold text-xl mb-2">Accuracy</div>
              <p className="text-gray-600">AI models minimize human error in disease identification</p>
            </div>
            <div className="text-center">
              <div className="text-green-500 font-bold text-xl mb-2">Accessibility</div>
              <p className="text-gray-600">Expert-level analysis available anywhere, anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}