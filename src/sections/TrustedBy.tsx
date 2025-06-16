'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  '/trustedby/google-ar21.svg',
  '/trustedby/facebook-ar21.svg',
  '/trustedby/coderwall-ar21.svg',
  '/trustedby/instacart-ar21.svg',
  '/trustedby/internetsociety-ar21.svg',
  '/trustedby/metabase-ar21.svg',
  '/trustedby/microsoft-ar21.svg',
];

const TrustedBy = () => {
  return (
    <section className="bg-white my-10" >
      <div className="text-center ">
        <div className="text-sm mb-5 text-gray-700">
          Trusted by leading brands.
        </div>
        <motion.div
          className="max-w-[80%] mx-auto grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-7  items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {logos.map((logo, index) => {
            // Hide logos 5, 6, and 7 on small screens
            const isHiddenOnSmall = index > 3;
            const hiddenClasses = isHiddenOnSmall ? 'hidden lg:flex' : 'flex';

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`${hiddenClasses} justify-center items-center`}
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={140}
                  height={80}
                  className="filter grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
        </div>
    </section>
  )
}

export default TrustedBy