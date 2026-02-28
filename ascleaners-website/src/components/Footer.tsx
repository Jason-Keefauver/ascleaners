export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4 text-center">
      <h3 className="text-xl font-bold mb-4">AsCleaners</h3>
      <p className="mb-4">123 Main Street, Your City, State</p>
      <p className="mb-4">Phone: (123) 456-7890 | Email: info@ascleaners.com</p>
      <div className="space-x-4 mb-4">
        <a href="#" className="hover:text-green-400">Facebook</a>
        <a href="#" className="hover:text-green-400">Instagram</a>
        <a href="#" className="hover:text-green-400">Twitter</a>
      </div>
      <p className="text-sm">&copy; 2026 AsCleaners. All rights reserved.</p>
    </footer>
  );
}