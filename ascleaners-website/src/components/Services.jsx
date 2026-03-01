import { FaHome, FaBuilding, FaBroom } from "react-icons/fa";

export default function Services() {
  const offerings = [
    {
      title: "Home Cleaning",
      desc: "Comprehensive cleaning for every room.",
      icon: <FaHome className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Office Cleaning",
      desc: "Professional, efficient office maintenance.",
      icon: <FaBuilding className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Special Projects",
      desc: "Deep cleans, move-in/out services, and more.",
      icon: <FaBroom className="text-blue-500 text-4xl mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((o) => (
          <div
            key={o.title}
            className="p-6 bg-white shadow rounded hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {o.icon}
            <h3 className="text-xl font-semibold mb-4">{o.title}</h3>
            <p className="text-gray-700">{o.desc}</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}