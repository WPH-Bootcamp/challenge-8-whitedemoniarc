// import { useState } from "react";

// import FintechImg from "../../assets/images/fintech.jpg";
// import EcommerceImg from "../../assets/images/ecommerce.jpg";
// import HealthcareImg from "../../assets/images/healthcare.jpg";

// const industries = [
//   {
//     id: "fintech",
//     title: "Fintech",
//     description:
//       "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
//     image: FintechImg,
//   },
//   {
//     id: "ecommerce",
//     title: "E-Commerce",
//     description:
//       "Build high-performance online stores with seamless checkout and customer experiences.",
//     image: EcommerceImg,
//   },
//   {
//     id: "healthcare",
//     title: "Healthcare",
//     description:
//       "Develop secure healthcare systems with compliance, patient management and telemedicine capabilities.",
//     image: HealthcareImg,
//   },
// ];

// const Industry = () => {
//   const [activeIndustry, setActiveIndustry] = useState(industries[0]);

//   return (
//     <section className="bg-black text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="mb-16">
//           <h2 className="text-5xl font-bold">Built for Your Industry</h2>

//           <p className="text-gray-400 mt-4">
//             We've helped companies across industries launch smarter, faster, and
//             more securely.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-[250px_1fr] gap-16">

//           {/* Left Tabs */}
//           <div className="space-y-8">
//             {industries.map((industry) => (
//               <button
//                 key={industry.id}
//                 onClick={() => setActiveIndustry(industry)}
//                 className={`
//                   flex items-center gap-4 text-left text-2xl font-semibold

//                   ${
//                     activeIndustry.id === industry.id
//                       ? "text-white"
//                       : "text-gray-500"
//                   }
//                 `}
//               >
//                 <span
//                   className={`
//                     w-1 h-10 rounded-full

//                     ${
//                       activeIndustry.id === industry.id
//                         ? "bg-[#FF6B47]"
//                         : "bg-gray-700"
//                     }
//                   `}
//                 />

//                 {industry.title}
//               </button>
//             ))}
//           </div>

//           {/* Right Content */}
//           <div>
//             <p className="text-xl text-gray-300 leading-relaxed">
//               {activeIndustry.description}
//             </p>

//             <img
//               src={activeIndustry.image}
//               alt={activeIndustry.title}
//               className="
//                 mt-10
//                 rounded-[32px]
//                 w-full
//                 object-cover
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industry;

import { useState } from "react";

import FintechImg from "../../assets/images/Fintech.png";
import EcommerceImg from "../../assets/images/Ecommerce.png";
import HealthcareImg from "../../assets/images/Healthcare.png";

const industries = [
  {
    id: "fintech",
    title: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: FintechImg,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: EcommerceImg,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: HealthcareImg,
  },
];

const Industry = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section
      className="bg-white text-black py-24 px-6 dark:bg-black
    dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Built for Your Industry
          </h2>

          <p
            className="bg-white text-[#0A0D12] mt-4 max-w-3xl dark:bg-black
    dark:text-white"
          >
            We've helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 ">
          {/* Left Tabs */}
          <div className="space-y-6">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className="flex items-center gap-4 text-left"
              >
                <span
                  className={`
                    w-1 h-10 rounded-full transition-all duration-300
                    ${
                      activeIndustry.id === industry.id
                        ? "bg-[#FF6B47]"
                        : "bg-gray-700"
                    }
                  `}
                />

                <span
                  className={`
                    text-xl font-semibold transition-colors duration-300
                    ${
                      activeIndustry.id === industry.id
                        ? "text-black dark:text-white"
                        : "text-gray-500"
                    }
                  
                  `}
                >
                  {industry.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <p
              className="text-lg md:text-xl text-[#0A0D12] leading-relaxed max-w-4xl dark:bg-black
    dark:text-white"
            >
              {activeIndustry.description}
            </p>

            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              className="
                mt-8
                w-full
                rounded-[32px]
                object-cover
                border
                border-[#101826]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;