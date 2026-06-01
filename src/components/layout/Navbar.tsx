// import Button from "../ui/Button";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4">
//       <h1 className="text-xl font-bold">MyCompany</h1>

//       <ul className="hidden md:flex gap-6">
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>

//       <Button size="sm">Contact</Button>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/20 text-white w-full fixed top-0 left-0 z-50 ">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between
      rounded-full

      bg-black/20
      backdrop-blur-2xl

      border
      border-white/10

      shadow-[0_0_80px_rgba(255,107,71,0.15)]"
      >
        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          <span className="text-[#FF6B47]">■</span> Your Logo
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 text-sm">
          <li className="hover:text-[#FF6B47] cursor-pointer">About</li>
          <li className="hover:text-[#FF6B47] cursor-pointer">Service</li>
          <li className="hover:text-[#FF6B47] cursor-pointer">Projects</li>
          <li className="hover:text-[#FF6B47] cursor-pointer">Testimonials</li>
          <li className="hover:text-[#FF6B47] cursor-pointer">FAQ</li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block">
          <Button className="bg-[#FF623E] hover:bg-[#ff623E] px-8 py-3 rounded-full">
            Let’s Talk
          </Button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 px-6 py-8 flex flex-col">
          {/* TOP */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <span className="text-[#FF6B47]">■</span> Your Logo
            </h1>

            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <ul className="flex flex-col gap-8 mt-16 text-lg">
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          {/* MOBILE BUTTON */}
          <div className="mt-auto">
            <Button className="w-full bg-[#FF623E]  hover:bg-[#ff623E] py-4 rounded-full">
              Let’s Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;