import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-auto sm:h-screen mx-auto"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ======= Desktop Layout ======= */}
      <div className="hidden sm:flex absolute inset-0 top-[100px] max-w-7xl mx-auto px-6 flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sujal Chavan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate and adaptive tech enthusiast turning
            <br className="sm:block hidden" />
            bold visions into reality.
          </p>
        </div>
      </div>

      {/* ======= Desktop 3D Model ======= */}
      <div className="hidden sm:block">
        <ComputersCanvas />
      </div>

      {/* ======= Mobile Layout ======= */}
      <div className="sm:hidden flex flex-col items-center justify-center px-6 pt-20 pb-10 text-center space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm <span className="text-[#915EFF]">Sujal Chavan</span>
          </h1>
          <p className="mt-2 text-white-100 text-base leading-relaxed">
            A passionate and adaptive tech enthusiast turning bold visions into reality.
          </p>
        </div>

        {/* ======= Mobile PC Image (Enlarged) ======= */}
        <motion.div
          className="relative w-full flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/desktop_pc/pc.png"
            alt="3D PC Model"
            className="w-80 sm:w-96 h-auto drop-shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

     {/* ======= Scroll Indicator - Mobile View ======= */}
<div className="flex sm:hidden absolute bottom-6 w-full justify-center items-center">
  <a href="#about">
    <div className="w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
        className="w-2 h-2 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

{/* ======= Scroll Indicator - Desktop View ======= */}
<div className="hidden sm:flex absolute bottom-10 w-full justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>
    </section>
  );
};

export default Hero;
