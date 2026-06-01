import { useState } from "react";
import SuccessModal from "../ui/SuccessModal";
import ErrorModal from "../ui/ErrorModal";

const services = [
  "Web Development",
  "Cloud Solutions",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Other",
];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);

  const [showSuccess, setShowSuccess] = useState(false);
 const [showError, setShowError] = useState(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = Math.random() > 0.5;

    if (success) {
      setShowSuccess(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <section
      className="bg-white text-black py-28 px-6 dark:bg-black
    dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Start? Let's Talk.
          </h2>

          <p className="text-gray-400 text-lg mt-6">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-4 text-xl font-semibold">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                bg-transparent
                border
                border-[#172033]
                rounded-3xl
                px-6
                py-5
                text-lg
                outline-none
                focus:border-[#FF6B47]
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-4 text-xl font-semibold">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                bg-transparent
                border
                border-[#172033]
                rounded-3xl
                px-6
                py-5
                text-lg
                outline-none
                focus:border-[#FF6B47]
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-4 text-xl font-semibold">Message</label>

            <textarea
              rows={6}
              placeholder="Enter your message"
              className="
                w-full
                bg-transparent
                border
                border-[#172033]
                rounded-3xl
                px-6
                py-5
                text-lg
                outline-none
                resize-none
                focus:border-[#FF6B47]
              "
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Services</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
              {services.map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => toggleService(service)}
                  className="flex items-center gap-4 text-left"
                >
                  <div
                    className={`
                      w-7
                      h-7
                      rounded-lg
                      border
                      flex
                      items-center
                      justify-center
                      transition-all

                      ${
                        selectedServices.includes(service)
                          ? "bg-[#FF6B47] border-[#FF6B47]"
                          : "border-[#172033]"
                      }
                    `}
                  >
                    {selectedServices.includes(service) && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>

                  <span className="text-xl">{service}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-[#FF623E]
              hover:bg-[#ff623E]
              text-white
              rounded-full
              py-5
              text-xl
              font-semibold
              transition-all
            "
          >
            Send
          </button>
        </form>
        <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
        />

        <ErrorModal isOpen={showError} onClose={() => setShowError(false)} />
      </div>
    </section>
  );
};

export default Contact;
