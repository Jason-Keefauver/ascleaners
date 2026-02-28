export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">AsCleaners</div>
        <div className="space-x-6">
          <a href="#hero" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#reviews" className="hover:text-green-600">Reviews</a>
          <a href="#contact" className="hover:text-green-600 font-semibold">Contact</a>
        </div>
      </div>
    </nav>
  );
}