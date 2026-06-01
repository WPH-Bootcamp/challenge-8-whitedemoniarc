import { useState } from "react";
import ConsultationImg from "../../assets/images/Consultation.png";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult - we'll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let's talk about your needs to get a tailored estimate",
  },
  {
    question: "How long does it take ?",
    answer:
      "Depends on scope - but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer:
      "Absolutely, We often begin with MVPs or pilot projects.",
  },
];




const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-white text-black  py-28 px-6 dark:bg-black
    dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold max-w-md">
            Need Help? Start Here.
          </h2>

          <p className="text-gray-400 text-xl max-w-sm">
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className="border-t border-[#172033] pt-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-20">
            {/* LEFT */}
            <div>
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#172033]">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="
                      w-full
                      py-8
                      flex
                      justify-between
                      items-center
                    "
                  >
                    <h3 className="text-2xl font-semibold text-left">
                      {faq.question}
                    </h3>

                    {openIndex === index ? (
                      <Minus size={28} />
                    ) : (
                      <Plus size={28} />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="pb-8">
                      <p className="text-gray-400 text-xl">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT CARD */}
            <div
              className="
                bg-[#D45534]
                rounded-[32px]
                p-6
                self-start
              "
            >
              <h3 className="text-5xl font-bold leading-tight">
                Let's talk it
                <br />
                through
              </h3>

              <p className="mt-4 text-xl">
                book a free consultation with our team.
              </p>

              <img
                src={ConsultationImg}
                alt="Consultation"
                className="
                  mt-8
                  rounded-[24px]
                  w-full
                  h-[170px]
                  object-cover
                "
              />

              <button
                className="
                  mt-6
                  bg-white
                  text-black
                  w-full
                  py-4
                  rounded-full
                  font-semibold
                  text-lg
                "
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;