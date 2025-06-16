'use client';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-12" id="why">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ⚡ Why Choose Sunverge Nigeria?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          We&apos;re not just another solar company — we&rsquo;re your trusted energy partner. Heres why hundreds of Nigerians rely on us for their power needs:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">✅ Experienced Team</h3>
            <p className="text-gray-600">
              Certified professionals with 5+ years of hands-on installation and support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">💰 Affordable Packages</h3>
            <p className="text-gray-600">
              Flexible pricing to fit your home, business, or budget — no surprises.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📍 Nationwide Reach</h3>
            <p className="text-gray-600">
              We serve customers across Nigeria — from Lagos to Bauchi and beyond.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⚙️ Fast Installation</h3>
            <p className="text-gray-600">
              Get solar installed and working in as little as 48 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🤝 After-Sales Support</h3>
            <p className="text-gray-600">
              Friendly local support that actually picks up the phone when you call.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🌍 Eco-Friendly</h3>
            <p className="text-gray-600">
              We help reduce carbon emissions and support Nigeria’s green future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
