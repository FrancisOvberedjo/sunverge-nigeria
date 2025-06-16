'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative h-screen w-full bg-black text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solar-panels.jpg" // Replace with your image path
          alt="Solar panels in Nigeria"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Powering Nigeria with Clean, Reliable Solar Energy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          At <span className="font-semibold text-yellow-400">Sunverge Nigeria</span>, we help you take control of your energy future with affordable, high-efficiency solar solutions tailored to your home or business.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Call Us Now
          </Link>
        </div>

        {/* Optional stat or tagline */}
        <p className="mt-6 text-sm text-gray-300">
          ✅ 1,000+ Installations Across Nigeria | ⚡ 24/7 Support
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
