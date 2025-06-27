'use client';
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';

const data = [
  { id: 1, name: 'Features', link: '#features' },
  { id: 2, name: 'Pricing', link: '#pricing' },
  { id: 3, name: 'About', link: '#about' },
  { id: 4, name: 'Contact', link: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              FlowCraft
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {data.map((data) => (
              <a
                key={data.id}
                href={data.link}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {data.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hovver:to-purple-700 text-white">
              Get started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden min-h-screen py-4  border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {data.map((data) => (
                <a
                  key={data.id}
                  href={data.link}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-center"
                >
                  {data.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
