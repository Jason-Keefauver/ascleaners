export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-green-50 min-h-screen flex flex-col justify-center items-center text-center px-4 animate-fadeIn"
    >
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        Professional Cleaning Services You Can Trust
      </h1>

      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Reliable, thorough, and friendly cleaning for your home or office.
      </p>

      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 hover:scale-105 transition duration-300">
        Get a Free Quote
      </button>
    </section>
  );
}