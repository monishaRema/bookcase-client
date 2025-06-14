import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdContactPhone, MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Footer = () => {
  const links = () => (
    <>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/"
          className="navlink text-base md:text-lg font-medium inline-block py-3 px-6 "
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/bookshelf"
          className="navlink text-base  md:text-lg font-medium inline-block py-3 px-6 "
        >
          Bookshelf
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/add-book"
          className="navlink text-base  md:text-lg font-medium inline-block py-3 px-6 "
        >
          Add Book
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/my-books"
          className="navlink text-base md:text-lg font-medium inline-block py-3 px-6 "
        >
          My Books
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <footer className="border-t bg-[#001e2b] border-[#00ed644d] pt-20 pb-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-12 h-12 p-2 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #00ed64 0%, #00684a 100%)",
                }}
              >
                <Link className="flex items-center gap-2" to="/">
                  <motion.img
                    variants={navItemVariants}
                    className="w-8 h-6 md:w-10 md:h-8"
                    src={Logo}
                    alt=""
                  />
                </Link>
              </div>
              <motion.p
                variants={navItemVariants}
                className="text-base md:text-2xl font-bold text-white flex flex-col font-play"
              >
                <span>Book</span>
                <span className="-mt-2 font-light text-base md:text-lg uppercase tracking-[1px] md:tracking-[2px]">
                  Case
                </span>
              </motion.p>
            </div>
            <p className="mt-6 max-w-md text-SM" style={{ color: "#ffffff" }}>
              Your digital reading companion. Create, organize, and share your
              book collection with fellow book lovers around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className=" text-sm">{links()}</ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <span className="text-accent hover:text-white transition-all duration-300 ease-in-out">
                <FaFacebook className="size-8" />
              </span>
              <span className="text-accent hover:text-white transition-all duration-300 ease-in-out">
                <FaInstagram className="size-8" />
              </span>
              <span className="text-accent hover:text-white transition-all duration-300 ease-in-out">
                <FaLinkedin className="size-8" />
              </span>
              <span className="text-accent hover:text-white transition-all duration-300 ease-in-out">
                <FaGithub className="size-8" />
              </span>
            </div>
            <h3 className="mt-5 text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-2 ">
                <IoLocationSharp className="text-accent size-5" /> 123 Book Mall Street, Doha City
              </li>
              <li className="flex items-center gap-2">
                <MdContactPhone className="text-accent size-4"  /> contact@book-case.com
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineWifiCalling3 className="text-accent size-5" /> +1 (123) 456-7890
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t mt-8 pt-8 text-center border-[#00ed644d]"
        >
          <p className="text-gray-300 ">
            © 2025 Book Case. All rights reserved. Designed by Mosnisha Rema.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
