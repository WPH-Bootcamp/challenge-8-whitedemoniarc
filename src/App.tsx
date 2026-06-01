/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

// import Navbar from "./components/layout/Navbar.tsx";
// import Hero from "./components/sections/Hero.tsx";
// import About from "./components/sections/About";
// import Services from "./components/sections/Services.tsx";
// import Footer from "./components/layout/Footer";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Company Profile Assignment
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Start building your components!
//         </p>
//         <div className="space-y-2 text-sm text-gray-500">
//           <p>TailwindCSS configured</p>
//           <p>Folder structure ready</p>
//           <p>Check README.md for instructions</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import Navbar from "./components/layout/Navbar";
// import Hero from "./components/sections/Hero";
// // import About from "./components/sections/About";
// import Services from "./components/sections/Services";
// import Footer from "./components/layout/Footer";
// import CompanyLogos from "./components/sections/CompanyLogos";
// import Stats from "./components/sections/Stats";
// import Process from "./components/sections/Process";
// import Industry from "./components/sections/Industry";
// import Portfolio from "./components/sections/Portfolio";
// import Testimonials from "./components/sections/Testimonials";
// import Faq from "./components/sections/Faq";
// import Contact from "./components/sections/Contact";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <CompanyLogos />
//       <Stats />
//       <Process />
//       {/* <About /> */}
//       <Services />
//       <Industry />
//       <Portfolio />
//       <Testimonials />
//       <Faq />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;



import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";
import CompanyLogos from "./components/sections/CompanyLogos";
import Stats from "./components/sections/Stats";
import Process from "./components/sections/Process";
import Industry from "./components/sections/Industry";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Faq from "./components/sections/Faq";
import Contact from "./components/sections/Contact";

  import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);


     useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-[9999]"
      >
        Toggle
      </button>


      <Navbar />
      <Hero />
      <CompanyLogos />
      <Stats />
      <Process />
      <Services />
      <Industry />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;