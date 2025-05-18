/* eslint-disable no-unused-vars */
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex justify-center">
            <img src={aboutImg} alt="about" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="py-6 max-w-xl text-neutral-400 my-2">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
