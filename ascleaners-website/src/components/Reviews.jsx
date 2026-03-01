export default function Reviews() {
  const reviews = [
    { name: "Alice", text: "Absolutely incredible service!" },
    { name: "Bob", text: "My office has never looked better." },
    { name: "Clara", text: "Professional, friendly, and thorough." },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="p-6 bg-white shadow rounded hover:shadow-lg transition"
          >
            <p className="italic mb-4">"{r.text}"</p>
            <p className="font-semibold">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}