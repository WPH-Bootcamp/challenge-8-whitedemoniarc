// import { useEffect, useState } from "react";
// import Button from "../ui/Button.tsx";

// const Navbar = () => {
//   return (
//     <nav
//       className="fixed
//     top-0
//     left-0
//     right-0
//     z-50
//      bg-black text-white flex items-center justify-between px-6 py-4"
//     >
//       <h1 className="text-xl font-bold">MyCompany</h1>

//       <ul className="hidden md:flex gap-6">
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>

//       <Button>Contact Us</Button>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import Button from "../ui/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        px-6
        py-4

        ${scrolled ? "bg-black/20 backdrop-blur-xl" : "bg-transparent"}
      `}
    >
      <div
        className={`
          relative
          max-w-7xl
          mx-auto

          flex
          items-center
          justify-between

          px-8
          py-4

          rounded-full
          border

          transition-all
          duration-500

            absolute
            inset-0
            -z-10
            bg-[#FF623E]
            opacity-10
            blur-[120px]
          ${
            scrolled
              ? `
                border-white/10
                bg-black/20
                backdrop-blur-xl
                shadow-[0_0_80px_rgba(255,107,71,0.25)]
              `
              : `
                border-transparent
              `
          }
        `}
      >
        <h1 className="text-xl font-bold text-white">MyCompany</h1>

        <ul className="hidden md:flex gap-10 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;