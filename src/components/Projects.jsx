/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-6">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {/* Projects data should be mapped here */}
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 "
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                className="rounded-lg mb-4"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h4 className="mb-2 text-semibold">{project.title}</h4>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <ul className="flex flex-wrap justify-start items-center gap-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="py-1 px-3 border-2 border-purple-900 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
