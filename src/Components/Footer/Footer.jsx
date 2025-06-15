import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaPhoneAlt} from "react-icons/fa";


import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Footer = () => {
  const links = () => (
    <>
      <motion.li >
        <NavLink
          to="/"
          className="footer-navlink "
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li>
        <NavLink
          to="/bookshelf"
          className="footer-navlink"
        >
          Bookshelf
        </NavLink>
      </motion.li>
      <motion.li >
        <NavLink
          to="/add-book"
          className="footer-navlink"
        >
          Add Book
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/my-books"
          className="footer-navlink"
        >
          My Books
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <footer className="border-t bg-[#120536] border-[#9e7cfa54] pt-20 pb-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col items-center justify-center md:justify-start md:items-start text-center md:text-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-12 h-12 p-2 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #120536 0%, #6745EB 100%)",
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
                className="text-xl md:text-2xl font-bold text-white flex flex-col font-play"
              >
                <span>Book</span>
                <span className="-mt-2 font-light text-base md:text-lg uppercase tracking-[1px] md:tracking-[2px]">
                  Case
                </span>
              </motion.p>
            </div>
            <p className="mt-3 max-w-sm text-sm md:text-base text-white">
              Your digital reading companion. Create, organize, and share your
              book collection with fellow book lovers around the world.
            </p>
             <h3 className="text-white font-semibold my-5 text-lg md:text-xl">Follow Us</h3>
            <div className="flex gap-3">
              <span className="text-white bg-accent flex size-10 justify-center items-center rounded-full hover:rotate-360 hover:bg-violet-500 transition-all duration-600 ease-in-out">
                <FaFacebookF className="size-5" />
              </span>
  <span className="text-white bg-accent flex size-10 justify-center items-center rounded-full hover:rotate-360 hover:bg-violet-500 transition-all duration-600 ease-in-out">
                <FaInstagram className="size-6" />
              </span>
  <span className="text-white bg-accent flex size-10 justify-center items-center rounded-full hover:rotate-360 hover:bg-violet-500 transition-all duration-600 ease-in-out">
                <FaLinkedinIn className="size-5" />
              </span>
  <span className="text-white bg-accent flex size-10 justify-center items-center rounded-full hover:rotate-360 hover:bg-violet-500 transition-all duration-600 ease-in-out">
                <FaGithub className="size-6" />
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 text-xl md:text-3xl text-center md:text-start">
              Quick Links
            </h3>
            <ul className="text-sm text-center md:text-start">{links()}</ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
           
            <h3 className="text-white font-semibold mb-4 text-2xl md:text-3xl text-center md:text-start">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-3 justify-center md:justify-start text-sm md:text-base">
                <FaLocationArrow className="text-violet-400 text-lg md:text-xl" /> <span>123 Book Mall Street, Doha City</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start text-sm md:text-base">
                <FaEnvelope className="text-violet-400 text-lg md:text-xl"/><span> tellus@book-case.com</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start text-sm md:text-base">
                <FaPhoneAlt className="text-violet-400 text-lg md:text-xl" /> +974 60033591
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t mt-8 pt-8 text-center border-[#9e7cfa54]"
        >
          <p className="text-gray-300 text-sm md:text-base">
            © {new Date().getFullYear()} Book Case. All rights reserved | Designed by <span className="text-violet-400">Mosnisha Rema.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
