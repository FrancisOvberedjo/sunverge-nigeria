'use client';
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="bg-white text-gray-800 py-16 px-6 md:px-12" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🌞 Our Solar Services
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          We offer complete solar solutions for homes, businesses, and communities across Nigeria. Whether you're just getting started or ready to upgrade, we've got you covered.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🛒 Solar Panel Sales</h3>
            <p className="text-gray-700">
              We supply top-quality, long-lasting solar panels designed for Nigerian weather conditions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🔧 Installation Services</h3>
            <p className="text-gray-700">
              Our technicians handle everything from mounting to wiring, ensuring a safe and efficient setup.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🔋 Battery & Inverter Setup</h3>
            <p className="text-gray-700">
              Enjoy 24/7 power with our reliable storage systems — even at night or on cloudy days.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">📊 Energy Assessment</h3>
            <p className="text-gray-700">
              Not sure what you need? We’ll evaluate your energy usage and recommend the perfect system.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🔁 Maintenance & Support</h3>
            <p className="text-gray-700">
              We provide regular checkups and fast repairs to keep your system performing at its best.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🏘️ Custom Solutions</h3>
            <p className="text-gray-700">
              Need a setup for a school, estate, or business? We tailor systems to fit your unique needs.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
