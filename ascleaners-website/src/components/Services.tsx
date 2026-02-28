export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Residential Cleaning</h3>
          <p>From apartments to houses, we keep your home sparkling clean.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Commercial Cleaning</h3>
          <p>Office spaces, retail stores, and more — cleaned to perfection.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">Specialty Services</h3>
          <p>Deep cleaning, move-in/out cleaning, or customized requests.</p>
        </div>
      </div>
    </section>
  );
}