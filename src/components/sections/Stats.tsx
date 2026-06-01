const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "5+",
    label: "Years of Experience",
  },
  {
    number: "10+",
    label: "Industry Awards Won",
  },
  {
    number: "100%",
    label: "Client Satisfaction Rate",
  },
];

const Stats = () => {
  return (
    <section className="bg-white text-black py-24 px-6 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold">
          End-to-End IT Solutions That Drive Results
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                w-44 h-44
                md:w-56 md:h-56
                rounded-full
                bg-neutral-100
               
                border border-[#101826]
                flex flex-col
                items-center
                justify-center
                mx-auto

                dark:bg-black 

                 hover:border-[#FF6B47]
                 hover:scale-105

                 transition
                 duration-300
              "
            >
              <h3 className="text-[#FF6B47] text-4xl font-bold">
                {item.number}
              </h3>

              <p className=" text-center mt-3 px-4 text-sm md:text-base text-black dark:text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
