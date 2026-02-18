"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const divisions = [
    { name: "Farm Division", href: "/divisions/farm" },
    { name: "Food Division", href: "/divisions/food" },
    { name: "Electronics Division", href: "/divisions/electronics" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="fagarsfasheg Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-brand-blue">Fagars</span>
              <span className="text-brand-green"> & Fasheg</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-brand-blue transition-colors font-medium">
                Divisions
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {divisions.map((division) => (
                    <Link
                      key={division.name}
                      href={division.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                    >
                      {division.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Divisions Dropdown */}
              <div>
                <button
                  onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-brand-blue transition-colors font-medium"
                >
                  Divisions
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDivisionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDivisionsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {divisions.map((division) => (
                      <Link
                        key={division.name}
                        href={division.href}
                        className="block text-sm text-gray-600 hover:text-brand-blue transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {division.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
