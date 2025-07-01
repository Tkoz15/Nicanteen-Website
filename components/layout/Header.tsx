"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold" style={{ color: '#16a34a' }}>Nicanteen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium hover:text-brand-green transition-colors">
            Features
          </Link>
          <Link href="#product" className="text-sm font-medium hover:text-brand-green transition-colors">
            Product
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-brand-green transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-brand-green transition-colors">
            Contact
          </Link>
        </nav>

        <Button 
          className="hidden md:inline-flex brand-gradient hover:opacity-90"
          size="default"
        >
          Shop Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-3">
            <Link 
              href="#features" 
              className="text-sm font-medium hover:text-brand-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#product" 
              className="text-sm font-medium hover:text-brand-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium hover:text-brand-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium hover:text-brand-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full brand-gradient hover:opacity-90 mt-4">
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}