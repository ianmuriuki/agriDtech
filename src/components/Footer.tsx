import React from 'react';
import { Mail, Twitter, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <Logo className="h-10 w-10" />
            <p className="text-sm text-gray-300">Innovating Agriculture for a Sustainable Future</p>
            <p className="text-sm text-gray-300">Powered by onTech</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Analyze Crop', 'Learn', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>Chat with Us</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
              <a href="mailto:contact@agridtech.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>Send us an Email</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-green-800 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md transition-colors"
              >
                Subscribe for Updates
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700">
          <p className="text-center text-gray-300">© {new Date().getFullYear()} onTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}