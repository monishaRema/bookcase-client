import React, { use} from "react";
import { Link, NavLink } from "react-router";


import { AuthContext } from "../../Contex/AuthContex";
import Logo from "../../assets/logo.png";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { Slide, toast } from "react-toastify";

import { delay, motion } from "framer-motion";

const Navbar = () => {
  const { user, LogOut, setUser } = use(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF9F00",
      cancelButtonColor: "#6A8C25",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            setUser(null);
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          });
      }
    });
  };

  const photoUrl = user && user.photoURL ? user.photoURL : "";

  const navVarient = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const links = () => (
    <>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/"
          className="navlink text-base md:text-lg font-medium inline-block py-3 px-6 hover:text-yellow-400 "
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/all-plants"
          className="navlink text-base  md:text-lg font-medium inline-block py-3 px-6 hover:text-yellow-400"
        >
          All Plants
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/add-plant"
          className="navlink text-base  md:text-lg font-medium inline-block py-3 px-6 hover:text-yellow-400"
        >
          Add Plant
        </NavLink>
      </motion.li>
      <motion.li variants={navItemVariants}>
        <NavLink
          to="/my-plants"
          className="navlink text-base  md:text-lg font-medium inline-block py-3 px-6 hover:text-yellow-400"
        >
          My Plants
        </NavLink>
      </motion.li>
    </>
  );

  return (
    <header>
      <motion.nav
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={navVarient}
        className="bg-green-50 text-blak dark:bg-[#204e36] dark:text-white"
      >
        <div className="container mx-auto px-5">
          <div className="navbar px-0 flex justify-between items-center py-5">
            <div className="flex items-center gap-1 md:gap-0">
              <motion.div  variants={navItemVariants} className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:hidden text-[#6A8C25] dark:text-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="text-base dropdown-content rounded-b-md shadow-sm z-1 mt-6 md:mt-9 w-64 px-4 py-5 space-y-3 bg-green-50 text-[#6A8C25] dark:bg-[#204e36] dark:text-white"
                >
                  <li>
                    <NavLink className={"navlink hover:text-yellow-500"} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"navlink hover:text-yellow-500"}
                      to="/all-plants"
                    >
                      All Plants
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"navlink hover:text-yellow-500"}
                      to="/add-plant"
                    >
                      Add Plant
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"navlink hover:text-yellow-500"}
                      to="/my-plants"
                    >
                      My Plants
                    </NavLink>
                  </li>
                </ul>
              </motion.div>

              <Link className="flex items-center gap-1" to="/">
                <motion.img
                  variants={navItemVariants}
                  className="size-10 md:size-15"
                  src={Logo}
                  alt=""
                />

                <motion.span
                  variants={navItemVariants}
                  className="text-xl md:text-3xl font-bold text-[#6A8C25] dark:text-white"
                >
                  Planto.
                </motion.span>
              </Link>
            </div>

            <div className="flex gap-5">
              <ul className="hidden lg:flex flex-row">
                {links()}
              </ul>
              <motion.div 
              variants={navItemVariants}
                className="buttons flex gap-1 md:gap-3 items-center"
                
              >
                {user ? (
                  <>
                    <a
                      className="size-10 rounded-full overflow-hidden"
                      data-tooltip-id="profile-tooltip"
                    >
                      <img src={photoUrl} alt="" className="size-full" />
                    </a>
                    <Tooltip
                      id="profile-tooltip"
                      place="bottom"
                      variant="white"
                    >
                      <div className="flex flex-col bg-[#6A8C25] text-white p-3 rounded z-[999]">
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                      </div>
                    </Tooltip>
                  </>
                ) : (
                  <Link
                    to="/register"
                    className="rounded px-2 md:px-5 py-1 md:py-2 text-sm md:text-base border-2 border-[#6A8C25] dark:border-white bg-transparent text-[#6A8C25] hover:text-white dark:hover:text-white dark:text-white  hover:bg-[#6A8C25] hover:border-[#6A8C25]"
                  >
                    Register
                  </Link>
                )}

                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="rounded px-2 md:px-5 py-1 md:py-2 text-sm md:text-base border-2 border-[#6A8C25]  bg-[#6A8C25] text-white hover:bg-transparent hover:text-[#6A8C25] dark:hover:text-white  dark:hover:bg-transparent  dark:hover:border-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="rounded px-2 md:px-5 py-1 md:py-2 text-sm md:text-base border-2 border-[#6A8C25]  bg-[#6A8C25] text-white hover:bg-transparent hover:text-[#6A8C25] dark:hover:text-white  dark:hover:bg-transparent  dark:hover:border-white"
                  >
                    LogIn
                  </Link>
                )}
               
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
