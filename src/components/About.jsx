import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import cv from "../assets/sujal_cv.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Heading section */}
      <motion.div variants={textVariant()} className='-mt-20 sm:mt-0'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Social buttons section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8'
      >
        {/* First row - 3 buttons on mobile, all 4 on desktop */}
        <div className='flex gap-4 sm:gap-8 justify-center sm:justify-start flex-wrap'>
          {[
            {
              name: "GitHub",
              link: "https://github.com/sujalchavan03",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/sujalchavan03/",
            },
            {
              name: "LeetCode",
              link: "https://leetcode.com/u/",
            },
          ].map(({ name, link }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='bg-tertiary rounded-[10px] py-3 px-3 flex-1 sm:flex-none text-center shadow-md hover:shadow-lg transition'
            >
              {name}
            </motion.a>
          ))}

          {/* CV button - visible on desktop only */}
          <motion.a
            href={cv}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='bg-tertiary rounded-[10px] py-3 px-3 hidden sm:flex text-center shadow-md hover:shadow-lg transition'
          >
            See CV
          </motion.a>
        </div>

        {/* Second row - CV button only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex justify-center sm:hidden'
        >
          <motion.a
            href={cv}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='bg-tertiary rounded-[10px] py-3 px-3 w-32 text-center shadow-md hover:shadow-lg transition'
          >
            See CV
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Description paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a skilled software developer proficient in Java, C, C++, Python, and JavaScript,
        with expertise in Springboot, React.js, Node.js, and Next.js. A quick learner and collaborative partner,
        I work closely with clients to craft efficient, scalable, and user‑friendly solutions to real‑world challenges.
      </motion.p>

      {/* Services section */}
      <div className='mt-8 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
