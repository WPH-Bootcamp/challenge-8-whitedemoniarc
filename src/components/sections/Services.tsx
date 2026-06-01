// const Services = () => {
//   return (
//     <section className="px-6 py-20">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="p-6 border rounded-lg">
//           <h3 className="font-bold mb-2">Web Development</h3>
//           <p className="text-gray-600">Modern and scalable web apps.</p>
//         </div>

//         <div className="p-6 border rounded-lg">
//           <h3 className="font-bold mb-2">UI/UX Design</h3>
//           <p className="text-gray-600">Beautiful and user-friendly design.</p>
//         </div>

//         <div className="p-6 border rounded-lg">
//           <h3 className="font-bold mb-2">SEO Optimization</h3>
//           <p className="text-gray-600">Improve your website visibility.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import webDev from "../../assets/icons/webDev.png";
import mobileApp from "../../assets/icons/mobileApp.png";
import uxDesign from "../../assets/icons/uxDesign.png";
import cloudSolutions from "../../assets/icons/clousdSolutions.png";
import softwareDevelopment from "../../assets/icons/softwareDevelopment.png";
import itInfrastructure from "../../assets/icons/itInfrastructure.png";
import cyberSecurity from "../../assets/icons/cyberSecurity.png";
import qaSolutions from "../../assets/icons/qaSolutions.png";
import itConsulting from "../../assets/icons/itConsulting.png";

const services = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    icon: webDev,
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    icon: mobileApp,
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    icon: uxDesign,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
    icon: cloudSolutions,
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    icon: softwareDevelopment,
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: itInfrastructure,
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    icon: cyberSecurity,
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    icon: qaSolutions,
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    icon: itConsulting,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white text-black py-24 px-6 dark:bg-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Smart IT Solutions That Grow With You
          </h2>

          <p className="text-gray-400 mt-4">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD SERVICE */}
          {services.map((service) => (
            <div
              key={service.title}
              className="
      relative
      bg-white
      border
      border-[#101826]
      rounded-3xl
      p-8

      dark:bg-black dark:text-white

      hover:border-[#FF6B47]
      hover:shadow-[0_0_50px_rgba(255,107,71,0.5)]
      hover:-translate-y-2

      transition-all
      duration-300
    "
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-6"
              />

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;