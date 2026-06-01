// import { Facebook, Instagram, Linkedin } from "lucide-react";

// import Facebook from "../../assets/Icons/facebook.png";
// import Instagram from "../../assets/Icons/instagram.png";
// import Linkedin from "../../assets/Icons/linkedin.png";
// import Tiktok from "../../assets/Icons/tiktok.png";

// import Logo from "../../assets/logos/Logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-black px-6 pb-10">
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           bg-[#050B14]
//           border
//           border-[#172033]
//           rounded-[40px]
//           px-12
//           py-14
//         "
//       >
//         {/* Top */}
//         <div className="flex flex-col lg:flex-row justify-between gap-10">
//           <img src={Logo} alt="Logo" className="h-12 object-contain" />
//         </div>

//         <h2
//           className="
//               text-4xl
//               md:text-6xl
//               font-bold
//               uppercase
//               leading-tight
//               text-white
//             "
//         >
//           LET'S DISCUSS
//           <br />
//           YOUR IDEAS
//         </h2>

//         {/* Divider */}
//         <div className="h-px bg-[#172033] my-14" />

//         {/* Bottom */}
//         <div className="flex flex-col lg:flex-row justify-between gap-10">
//           {/* Menu */}
//           <div className="flex flex-wrap gap-10 text-lg text-white">
//             <a href="#about">About</a>

//             <a href="#services">Service</a>

//             <a href="#projects">Projects</a>

//             <a href="#testimonials">Testimonials</a>

//             <a href="#faq">FAQ</a>
//           </div>

//           {/* Social */}
//           <div className="flex gap-5">
//             <a
//               href="#"
//               className="
//                 w-12
//                 h-12
//                 rounded-full
//                 border
//                 border-[#172033]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[#FF6B47]
//                 transition-all
//               "
//             >
//               <img
//                 src={Facebook}
//                 alt="Facebook"
//                 className="w-6 h-6 object-contain"
//               />
//             </a>

//             <a
//               href="#"
//               className="
//                 w-12
//                 h-12
//                 rounded-full
//                 border
//                 border-[#172033]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[#FF6B47]
//                 transition-all
//               "
//             >
//               <img
//                 src={Instagram}
//                 alt="Instagram"
//                 className="w-6 h-6 object-contain"
//               />
//             </a>

//             <a
//               href="#"
//               className="
//                 w-12
//                 h-12
//                 rounded-full
//                 border
//                 border-[#172033]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[#FF6B47]
//                 transition-all
//               "
//             >
//               <img
//                 src={Linkedin}
//                 alt="Linkedin"
//                 className="w-6 h-6 object-contain"
//               />
//             </a>

//             {/* TikTok */}
//             <a
//               href="#"
//               className="
//                 w-12
//                 h-12
//                 rounded-full
//                 border
//                 border-[#172033]
//                 flex
//                 items-center
//                 justify-center
//                 hover:border-[#FF6B47]
//                 transition-all
//               "
//             >
//               <img
//                 src={Tiktok}
//                 alt="TikTok"
//                 className="w-6 h-6 object-contain"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Logo from "../../assets/logos/Logo.png";

import Facebook from "../../assets/Icons/facebook.png";
import Instagram from "../../assets/Icons/instagram.png";
import Linkedin from "../../assets/Icons/linkedin.png";
import Tiktok from "../../assets/Icons/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-6 pb-8 md:pb-10 dark:bg-black ">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white
          text-black
          border
          border-[#172033]
          rounded-[32px]
          md:rounded-[40px]
          px-8
          md:px-12
          py-10
          md:py-14
 
          dark:bg-black
          dark:text-white
        "
      >
        {/* ================= MOBILE ================= */}
        <div
          className="lg:hidden text-black
              dark:text-white"
        >
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="
              h-8
              object-contain
              mb-8
            "
          />

          {/* Heading */}
          <h2
            className="
              text-[42px]
              font-bold
              uppercase
              leading-[1.1]
              
            "
          >
            LET'S DISCUSS
            <br />
            YOUR IDEAS
          </h2>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex justify-between items-start text-black
              dark:text-white">
          {/* Heading */}
          <h2
            className="
              text-6xl
              font-bold
              uppercase
              leading-[1.1]
             
            "
          >
            LET'S DISCUSS
            <br />
            YOUR IDEAS
          </h2>

          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="
              h-12
              object-contain
            "
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-[#172033] my-8 md:my-14 " />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-10

            lg:flex-row
            lg:justify-between
            lg:items-end
            
          "
        >
          {/* Menu */}
          <div
            className="
              flex
            flex-col
            gap-8

            lg:flex-row
            lg:flex-wrap
            lg:gap-10

            text-lg
            md:text-xl
            text-black
              dark:text-white
            "
          >
            <a href="#about">About</a>

            <a href="#services">Service</a>

            <a href="#projects">Projects</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#faq">FAQ</a>
          </div>

          {/* Social */}
          <div
            className="
              flex
              gap-4
              justify-start

              lg:justify-end
              
            "
          >
            {/* Facebook */}
            <a
              href="#"
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-full
                border
                border-[#172033]

                flex
                items-center
                justify-center

                hover:border-[#FF6B47]
                transition-all
              "
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="
                  w-5 h-5
                  md:w-6 md:h-6
                  object-contain
                "
              />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-full
                border
                border-[#172033]

                flex
                items-center
                justify-center

                hover:border-[#FF6B47]
                transition-all
              "
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="
                  w-5 h-5
                  md:w-6 md:h-6
                  object-contain
                "
              />
            </a>

            {/* Linkedin */}
            <a
              href="#"
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-full
                border
                border-[#172033]

                flex
                items-center
                justify-center

                hover:border-[#FF6B47]
                transition-all
              "
            >
              <img
                src={Linkedin}
                alt="Linkedin"
                className="
                  w-5 h-5
                  md:w-6 md:h-6
                  object-contain
                "
              />
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="
                w-12 h-12
                md:w-14 md:h-14

                rounded-full
                border
                border-[#172033]

                flex
                items-center
                justify-center

                hover:border-[#FF6B47]
                transition-all
              "
            >
              <img
                src={Tiktok}
                alt="TikTok"
                className="
                  w-5 h-5
                  md:w-6 md:h-6
                  object-contain
                "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;