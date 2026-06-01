// import Button from "../ui/Button";

// const Hero = () => {
//   return (
//     <section className="px-6 py-20 text-center md:text-left md:flex items-center justify-between">
//       <div className="max-w-xl">
//         <h1 className="text-4xl font-bold mb-4">Build Your Digital Presence</h1>
//         <p className="mb-6 text-gray-600">
//           We help businesses grow with modern web solutions.
//         </p>
//         <Button>Get Started</Button>
//       </div>

//       <div className="mt-10 md:mt-0">
//         <div className="w-80 h-60 bg-gray-200 rounded-lg" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Button from "../ui/Button";
import HeroImage from "../../assets/images/Image-Hero-Light.png";
import HeroImageDark from "../../assets/images/Image-Hero.png";
import TestimonialCardP from "../../assets/images/Testimonial Card (1).png";
import TestimonialCardL from "../../assets/images/Testimonial Card.png";

const Hero = () => {
  return (
    <section
      className="bg-white text-black min-h-screen overflow-hidden dark:bg-black
    dark:text-white"
    >
      {/* Navbar spacing */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10">
        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 items-center gap-16 pt-20">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Your Tech Partner for
              <span className="block text-[#FF6B47]">Smarter Growth</span>
            </h1>

            <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>

            <div className="mt-10">
              <Button className="bg-[#FF623E] shadow-[inset_4px_4px_8px_rgba(255,255,255,0.25),inset_0_-4px_8px_rgba(0,0,0,0.2),0_12px_24px_rgba(0,0,0,0.4)] hover:bg-[#ff623E] text-white px-10 py-4 rounded-full">
                Let’s Talk
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* orange glow */}
            <div className="dark:absolute w-[500px] h-[500px] dark:bg-orange-500/20 blur-3xl rounded-full" />

            <img
              src={HeroImage}
              alt="Hero"
              className="absolute  w-full max-w-[700px] z-0 dark:hidden"
            />

            <img
              src={TestimonialCardP}
              alt="TestimonialCardP"
              className="absolute left-0 z-30 right-10 dark:hidden"
            />

            <img
              src={TestimonialCardL}
              alt="TestimonialCardL"
              className="absolute top-100 z-20 bot-0px  dark:hidden"
            />

            <img
              src={HeroImageDark}
              alt="Hero"
              className="relative z-10 w-full max-w-[700px] hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
