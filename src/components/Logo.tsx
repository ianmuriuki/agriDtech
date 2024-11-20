import React from 'react';
import { Sprout } from 'lucide-react';

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Sprout className={`text-green-500 ${className}`} />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
      </div>
      <span className="font-bold text-xl">AgriDtech</span>
    </div>
  );
}