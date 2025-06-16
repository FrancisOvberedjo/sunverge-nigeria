'use client';

import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-yellow-400 text-black py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Go Solar?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Let’s help you make the switch to reliable, clean energy. Get started with a free quote — it only takes a minute.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/quote">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Get a Free Quote
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
              Talk to Our Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
