/* eslint-disable no-unused-vars */
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-6">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconsVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-3 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-cyan-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;
