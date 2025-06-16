'use client';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-12" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          💬 What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          We’ve helped dozens of homes and businesses enjoy clean, uninterrupted power. Here’s what a few of them had to say:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-4">
              “Sunverge made switching to solar so easy. Our light bills dropped and the power never goes off. Installation was fast too!”
            </p>
            <h4 className="font-semibold text-sm text-gray-800">— Aisha O., Abuja</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-4">
              “I run a small business and power was a nightmare. With Sunverge’s help, we’ve had stable power for months now. Totally worth it.”
            </p>
            <h4 className="font-semibold text-sm text-gray-800">— Femi B., Lagos</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-gray-700 mb-4">
              “The team was professional and friendly. They answered all my questions and delivered exactly what I needed. Highly recommend!”
            </p>
            <h4 className="font-semibold text-sm text-gray-800">— Ngozi E., Enugu</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
