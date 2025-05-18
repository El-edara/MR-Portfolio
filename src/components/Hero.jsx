/* eslint-disable no-unused-vars */
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.jpg";

const Hero = () => {
  const containerVariants = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={containerVariants(0.1)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl pb-8 lg:pb-16 font-thin tracking-tight lg:mt-16"
            >
              Mohamed Reda
            </motion.h1>
            <motion.span
              variants={containerVariants(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-3xl lg:text-4xl font-bold "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={containerVariants(0.6)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-4 text-neutral-400 tracking-tighter text-lg leading-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex  justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              src={profilePic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
