import React from 'react';
import { Menu, X, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#features" className="text-green-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#analyze" className="text-green-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Analyze Crop</a>
                <a href="#learn" className="text-green-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Learn</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="text-green-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#analyze" className="text-green-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Analyze Crop</a>
            <a href="#learn" className="text-green-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Learn</a>
          </div>
        </div>
      )}
    </nav>
  );
}