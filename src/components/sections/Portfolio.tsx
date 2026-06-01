import Portfolio1 from "../../assets/projects/portfolio01.png";
import Portfolio2 from "../../assets/projects/portfolio02.png";
import Portfolio3 from "../../assets/projects/portfolio03.png";

const projects = [
  {
    category: "Landing Page",
    title: "Portfolio 1",
    image: Portfolio1,
  },
  {
    category: "Landing Page",
    title: "Portfolio 2",
    image: Portfolio2,
  },
  {
    category: "Landing Page",
    title: "Portfolio 3",
    image: Portfolio3,
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-white text-black py-24 px-6 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            From Vision to Launch! Projects We're Proud Of
          </h2>

          <p className="text-gray-400 mt-4">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                cursor-pointer

                group-hover:-translate-y-2
                group-hover:shadow-[0_0_30px_rgba(255,107,71,0.25)]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <p className="text-[#FF6B47] mt-5">{project.category}</p>

              <h3 className="text-3xl font-semibold mt-2">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
