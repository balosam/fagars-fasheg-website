import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const divisions = [
    { name: "Farm Division", href: "/divisions/farm" },
    { name: "Food Division", href: "/divisions/food" },
    { name: "Electronics Division", href: "/divisions/electronics" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="fagarsfasheg Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-xl font-bold">
                <span className="text-brand-blue">Fagars</span>
                <span className="text-brand-green"> & Fasheg</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner in import and export excellence across farm produce, food products, and electronics.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.name}>
                  <Link
                    href={division.href}
                    className="text-sm hover:text-brand-blue transition-colors"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:fagarsfasheg2301@gmail.com"
                  className="text-sm hover:text-brand-blue transition-colors break-all"
                >
                  fagarsfasheg2301@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+2348034620625"
                    className="block hover:text-brand-blue transition-colors"
                  >
                    +234 803 462 0625
                  </a>
                  <a
                    href="tel:+2348074413669"
                    className="block hover:text-brand-blue transition-colors mt-1"
                  >
                    +234 807 441 3669
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} fagarsfasheg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
