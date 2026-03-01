export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-gray-50 animate-fadeIn">
      <h1 className="text-5xl font-bold mb-4">High-End Cleaning, Done Right</h1>
      <p className="text-lg mb-8 max-w-xl">
        Reliable, professional, and detail-oriented cleaning services for your home or office.
      </p>
      <button className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition mb-12">
        Book a Cleaning
      </button>
      <img
        src="https://via.placeholder.com/800x400?text=Clean+Space"
        alt="Spotless home"
        className="rounded shadow-lg w-full max-w-4xl"
      />
    </section>
  );
}