export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-center px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About AsCleaners</h2>
      <p className="text-gray-700 mb-6">
        At AsCleaners, we provide top-quality cleaning services with years of experience.
        Our team is trained, insured, and committed to leaving your space spotless.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        <div className="bg-green-50 p-6 rounded shadow-md flex-1">
          <h3 className="font-semibold mb-2">Trusted Staff</h3>
          <p>Our cleaners are experienced, friendly, and reliable.</p>
        </div>
        <div className="bg-green-50 p-6 rounded shadow-md flex-1">
          <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
          <p>We make sure every cleaning meets your expectations.</p>
        </div>
        <div className="bg-green-50 p-6 rounded shadow-md flex-1">
          <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
          <p>Book on your schedule, not ours — we work around you.</p>
        </div>
      </div>
    </section>
  );
}