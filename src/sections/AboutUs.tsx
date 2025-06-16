'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  return (
   <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white text-gray-800 py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Sunverge Nigeria</h2>
          <p className="text-lg text-gray-600 mb-6">
            We&apos;re on a mission to make solar energy simple, affordable, and accessible to everyone in Nigeria. Whether you're powering your home, office, or community — we've got you covered with reliable solar solutions.
          </p>
          <p className="text-gray-600 mb-6">
            With years of experience, certified technicians, and high-quality equipment, Sunverge delivers clean energy you can count on — rain or shine.
          </p>
          <Link href="/about">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Learn More
            </button>
          </Link>
        </div>

        {/* Image / Illustration (replace with your own) */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg"
        >
        <Image
            src="/images/solar-installation.jpg" // Make sure this image is in your /public folder
            alt="About Sunverge"
            fill
            className="object-cover"
            priority
        />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs