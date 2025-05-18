/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 mb-20">
      <div>
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          src={logo}
          alt="logo"
          className=" rounded-full my-6 w-15 h-15 object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-3 text-2xl m-4">
        <FaTwitterSquare />
        <FaLinkedin />
        <FaFacebookSquare />
        <FaInstagramSquare />
      </div>
    </div>
  );
};
export default Navbar;
