export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold">AsCleaners</h1>
      <ul className="flex gap-6">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">Reviews</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}