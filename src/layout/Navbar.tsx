export default function Navbar() {
    return (
      <nav className="
        fixed top-0 left-0 w-full h-16
        flex items-center justify-between px-8
        bg-black/20 backdrop-blur-md
        border-b border-white/10
        z-50
      ">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#FF5FFF]">
          POTFOLIO HAM SUNG MIN
        </h1>
  
        <div className="flex gap-6">
          <NavButton target="home" label="Home" />
          <NavButton target="about" label="About" />
          <NavButton target="skills" label="Skills" />
          <NavButton target="projects" label="Projects" />
          <NavButton target="contact" label="Contact" />
        </div>
      </nav>
    );
  }
  
  function NavButton({ target, label }: { target: string; label: string }) {
    return (
      <button
        onClick={() =>
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-gray-300 hover:text-white transition font-medium"
      >
        {label}
      </button>
    );
  }
  