import { gb } from "@/public/assets";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaTwitch } from "react-icons/fa";

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handlClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-16" src={gb} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-6">
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#about"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-text-Green">01.</span> About
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-text-Green">02.</span> Experience
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#projects"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-text-Green">03.</span> Projects
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-text-Green">04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/curriculo.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex-col justify-between items-center mdl:hidden 
          text-4x1 text-textGreen cursor-pointer overflow-hidden group"
        >
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 
            transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 
            transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 
            transition-all ease-in-out duration-300"
          ></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => {
              ref.current = node;
            }}
            onClick={handlClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col
            items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center
              px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500
              absolute top-4 right-4"
              />
              <div className=" flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
                  duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
                  duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">01.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
                  duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">02.</span>Experience
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
                  duration-300 nav-link"
                    href="#projects"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">03.</span>Projects
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer
                  duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">04.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/curriculo.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="px-4 py-2 rounded-md text-textGreen text-[13] border border-textGreen
                  hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://github.com/Bixpo"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-textGreen rounded-full inline-flex
                  items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                  transition-all duration-300">
                      <LuGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/gabriel-bispo-684b86238/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-textGreen rounded-full inline-flex
                  items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                  transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, ease: "easeIn" }}
                    href="https://www.instagram.com/bixpo_bixpo/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-textGreen rounded-full inline-flex
                  items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                  transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6, ease: "easeIn" }}
                    href="https://www.twitch.tv/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-textGreen rounded-full inline-flex
                  items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                  transition-all duration-300">
                      <FaTwitch />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
