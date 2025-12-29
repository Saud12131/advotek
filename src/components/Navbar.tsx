export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-2xl font-bold text-blue-600">MediVault</h1>

      <div className="hidden md:flex gap-6 items-center">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#how" className="hover:text-blue-600">How it Works</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}
