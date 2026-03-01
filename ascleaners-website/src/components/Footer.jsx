export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 text-center">
      <p className="mb-4">Follow us on social media:</p>
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-blue-500">Facebook</a>
        <a href="#" className="hover:text-blue-500">Instagram</a>
        <a href="#" className="hover:text-blue-500">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} AsCleaners. All rights reserved.</p>
    </footer>
  );
}