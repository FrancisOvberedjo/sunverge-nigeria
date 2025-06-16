'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Sunverge Nigeria</h3>
          <p className="text-gray-400">
            Powering Nigeria with clean, affordable solar energy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p className="text-gray-400 mb-2">📍 Lagos, Nigeria</p>
          <p className="text-gray-400 mb-2">📞 +234 812 345 6789</p>
          <p className="text-gray-400">✉️ support@sunverge.ng</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sunverge Nigeria. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;

