export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="flex justify-between px-6 py-4">
        <h1 className="font-bold">Arshad</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}
