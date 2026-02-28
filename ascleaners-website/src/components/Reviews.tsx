export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white text-center px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-green-50 rounded shadow">
          <p>"Amazing service! My home has never been cleaner."</p>
          <p className="mt-4 font-semibold">— Sarah P.</p>
        </div>
        <div className="p-6 bg-green-50 rounded shadow">
          <p>"Professional, punctual, and thorough. Highly recommend!"</p>
          <p className="mt-4 font-semibold">— Mike R.</p>
        </div>
        <div className="p-6 bg-green-50 rounded shadow">
          <p>"Fantastic attention to detail and friendly staff."</p>
          <p className="mt-4 font-semibold">— Jessica L.</p>
        </div>
      </div>
    </section>
  );
}