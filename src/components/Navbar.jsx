import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      scrollYProgress.set(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const width = useTransform(scrollYProgress, [0, 100], ['0%', '100%']);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 10 }}
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--primary)' : 'transparent',
          backdropFilter: 'none' // Remove backdrop filter completely
        }}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link 
            to="/" 
            onClick={() => {
              setActive("");
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.p 
                className="text-white text-[18px] font-bold cursor-pointer flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Sujal Chavan
              </motion.p>
            </motion.div>
          </Link>

          <motion.ul 
            className="list-none hidden sm:flex flex-row gap-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                variants={itemVariants}
                whileHover="hover"
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a 
                  href={`#${nav.id}`} 
                  className={`relative block py-2 px-1 ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } transition-colors duration-300`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                  
                  {hoveredItem === index && (
                    <motion.div 
                      className="absolute -top-2 -right-2 flex"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="w-1 h-1 bg-cyan-400 rounded-full mx-0.5"
                          animate={{
                            y: [0, -3, 0],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  )}

                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      active === nav.title ? "w-full" : "w-0"
                    } bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full`}
                    animate={{ 
                      width: active === nav.title || hoveredItem === index ? "100%" : "0%",
                      opacity: active === nav.title || hoveredItem === index ? 1 : 0.7
                    }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <motion.button
              className="p-1 rounded-full"
              onClick={() => setToggle(!toggle)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                animate={{ rotate: toggle ? 180 : 0 }}
                transition={{ type: "spring" }}
              />
            </motion.button>

            <AnimatePresence>
              {toggle && (
                <motion.div
                  className="p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <motion.ul 
                    className="list-none flex justify-end items-start flex-col gap-4"
                  >
                    {navLinks.map((nav) => (
                      <motion.li
                        key={nav.id}
                        className="font-poppins font-medium cursor-pointer text-[16px] relative"
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.title);
                        }}
                      >
                        <a 
                          href={`#${nav.id}`}
                          className={`${active === nav.title ? "text-white" : "text-secondary"}`}
                        >
                          {nav.title}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{ width }}
        />
      </motion.nav>

      {/* Add margin-top to the first section below navbar */}
      <style jsx global>{`
        #hero {
          margin-top: 80px;
        }
      `}</style>
    </>
  );
};

export default Navbar;