import { ChevronUp } from "lucide-react";
import { useState } from "react";


const processSteps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
    side: "left",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
    side: "right",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
    side: "left",
  },
  {
    id: 4,
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
    side: "right",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
    side: "left",
  },
  {
    id: 6,
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
    side: "right",
  },
];

const Process = () => {
    const [activeStep, setActiveStep] = useState<number | null>(1);
    
  return (
    <section
      className="bg-white text-black py-24 px-6 dark:bg-black dark:text-white
"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold">Our Process</h2>

          <p className="text-gray-400 mt-4">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 " />

          <div className="space-y-12">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="
                  grid
                  lg:grid-cols-[1fr_auto_1fr]
                  items-center
                  gap-8 
                "
              >
                {/* LEFT CARD */}
                <div
                  className={
                    step.side === "left" ? "block" : "hidden lg:block "
                  }
                >
                  {step.side === "left" && (
                    <ProcessCard
                      id={step.id}
                      title={step.title}
                      description={step.description}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  )}
                </div>

                {/* NUMBER */}
                <div className="flex justify-center">
                  <div
                    className="
                      w-14 h-14
                      rounded-full
                      bg-[#FF6B47]
                      flex
                      items-center
                      justify-center
                      font-semibold
                    "
                  >
                    {step.id}
                  </div>
                </div>

                {/* RIGHT CARD */}
                <div
                  className={
                    step.side === "right"
                      ? "block"
                      : "hidden lg:block "
                  }
                >
                  {step.side === "right" && (
                    <ProcessCard
                      id={step.id}
                      title={step.title}
                      description={step.description}
                      activeStep={activeStep}
                      setActiveStep={setActiveStep}
                    />
                  )}
                </div>

                {/* MOBILE CARD */}
                <div className="lg:hidden col-span-full ">
                  <ProcessCard
                    id={step.id}
                    title={step.title}
                    description={step.description}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  id: number;
  title: string;
  description: string;
  activeStep: number | null;
  setActiveStep: (id: number | null) => void;
}

const ProcessCard = ({
  id,
  title,
  description,
  activeStep,
  setActiveStep,
}: ProcessCardProps) => {
  const isOpen = activeStep === id;

 return (
   <div
     onClick={() => setActiveStep(isOpen ? null : id)}
     className="
      cursor-pointer
      bg-white
      border
      border-slate-800
      rounded-3xl
      px-6
      py-6

      dark:bg-black dark:text-white

      hover:border-[#FF6B47]

      transition-all
      duration-300
    "
   >
     <div className="flex justify-between items-start">
       <div>
         <h3 className="text-xl font-semibold">{title}</h3>

         {isOpen && <p className="text-gray-400 mt-3">{description}</p>}
       </div>

       <ChevronUp
         size={22}
         className={`
          text-black flex-shrink-0
          transition-transform duration-300
          ${isOpen ? "" : "rotate-180"} dark:text-white
        `}
       />
     </div>
   </div>
 );
};

export default Process;
