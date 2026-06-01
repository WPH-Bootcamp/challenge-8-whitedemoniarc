import { useState } from "react";

import Sarah from "../../assets/testimonials/sarah.png";
import John from "../../assets/testimonials/john.png";
import Emily from "../../assets/testimonials/emily.png";

const testimonials = [
  {
    name: "Sarah Tan",
    position: "Product Manager at Finovate",
    image: Sarah,
    review:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
  },
  {
    name: "John Lee",
    position: "Director at Innovate Corp",
    image: John,
    review:
      "A game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
  },
  {
    name: "Emily Chen",
    position: "Marketing Head at TechFlow",
    image: Emily,
    review:
      "The collaboration was seamless from start to finish. Their expertise truly helped us achieve successful results.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev =
    testimonials[(active - 1 + testimonials.length) % testimonials.length];

  const current = testimonials[active];

  const next = testimonials[(active + 1) % testimonials.length];

  return (
    <section
      id="testimonials"
      className="bg-white text-black py-28 overflow-hidden dark:bg-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold">
            What Partners Say About Working With Us
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative h-[620px] flex items-center justify-center">
          {/* Fade Left */}
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-56
              z-30
              pointer-events-none
              bg-gradient-to-r
              from-white
              to-transparent

              dark:from-black
            "
          />

          {/* Fade Right */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-56
              z-30
              pointer-events-none
              bg-gradient-to-l
              from-white
              to-transparent

              dark:from-black
            "
          />

          {/* LEFT CARD */}
          <div
            onClick={() =>
              setActive(
                (active - 1 + testimonials.length) % testimonials.length,
              )
            }
            className="
              absolute
              left-[-180px]
              w-[520px]
              cursor-pointer
              opacity-20
              scale-90
              transition-all
              duration-500
              
            "
          >
            <div className="bg-white border border-[#101826] rounded-[32px] p-10 text-center h-[360px] dark:bg-black dark:text-white">
              <div className="text-[#FF6B47] text-6xl font-bold mb-4">"</div>

              <div className="mb-5 text-xl">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-300 line-clamp-4">{prev.review}</p>

              <div className="mt-8">
                <h4 className="text-2xl font-semibold">{prev.name}</h4>

                <p className="text-[#FF6B47]">{prev.position}</p>
              </div>

              <img
                src={prev.image}
                alt={prev.name}
                className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  mx-auto
                  mt-8
                "
              />
            </div>
          </div>

          {/* CENTER CARD */}
          <div className="relative z-20">
            <div
              className="
                relative
                bg-white 
                
                border
                border-[#172033]
                rounded-[32px]
                w-[720px]
                px-16
                pt-20
                pb-24
                text-center
                dark:bg-black dark:text-white
              "
            >
              {/* Orange Corner */}
              <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#FF6B47]" />
              <div className="absolute top-0 left-0 h-24 w-[2px] bg-[#FF6B47]" />

              {/* Quote */}
              <div
                className="
                  absolute
                  -top-10
                  left-16
                  text-[#FF6B47]
                  text-[120px]
                  font-bold
                  leading-none
                  text-black
                  dark:text-white
                "
              >
                ”
              </div>

              {/* Stars */}
              <div className="mb-8 text-3xl">⭐⭐⭐⭐⭐</div>

              {/* Review */}
              <p
                className="
                  text-2xl
                  leading-relaxed
                  max-w-[620px]
                  mx-auto
                  text-black
                  dark:text-white
                "
              >
                “{current.review}”
              </p>

              {/* Name */}
              <div className="mt-12">
                <h4 className="text-3xl font-bold">{current.name}</h4>

                <p className="text-[#FF6B47] text-xl mt-2">
                  {current.position}
                </p>
              </div>

              {/* Avatar */}
              <img
                src={current.image}
                alt={current.name}
                className="
                  w-20
                  h-20
                  rounded-full
                  object-cover
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -bottom-10
                "
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            onClick={() => setActive((active + 1) % testimonials.length)}
            className="
              absolute
              right-[-180px]
              w-[520px]
              cursor-pointer
              opacity-20
              scale-90
              transition-all
              duration-500
            "
          >
            <div className="bg-[#050B14] border border-[#101826] rounded-[32px] p-10 text-center h-[360px]">
              <div className="text-[#FF6B47] text-6xl font-bold mb-4">"</div>

              <div className="mb-5 text-xl">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-300 line-clamp-4">{next.review}</p>

              <div className="mt-8">
                <h4 className="text-2xl font-semibold">{next.name}</h4>

                <p className="text-[#FF6B47]">{next.position}</p>
              </div>

              <img
                src={next.image}
                alt={next.name}
                className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  mx-auto
                  mt-8
                "
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                w-3
                h-3
                rounded-full
                transition-all

                ${active === index ? "bg-[#FF6B47]" : "bg-slate-700"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
