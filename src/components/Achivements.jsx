// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { achievements } from "../constants";

// const AchievementCard = ({
//   index,
//   title,
//   level,
//   rank,
//   competition,
//   date,
// }) => (
//   <motion.div
//     variants={fadeIn("up", "spring", index * 0.1, 0.75)}
//     className="relative group"
//     whileHover={{ y: -8, scale: 1.02 }}
//     transition={{ duration: 0.3, ease: "easeOut" }}
//   >
//     {/* Subtle glow effect */}
//     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
    
//     {/* Main card */}
//     <div className="relative bg-black-200 border border-white/10 p-8 rounded-3xl xs:w-[320px] w-full h-full min-h-[260px] backdrop-blur-sm">
//       {/* Minimal corner accent */}
//       <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-3xl" />
      
//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col">
//         <motion.h3
//           className="text-white text-[18px] font-semibold mb-6 leading-tight pr-4"
//           whileHover={{ x: 4 }}
//           transition={{ duration: 0.2 }}
//         >
//           {title}
//         </motion.h3>

//         <div className="space-y-4 flex-grow">
//           <div className="flex items-center justify-between">
//             <span className="text-secondary text-[13px]">Level</span>
//             <span className="text-white text-[13px] font-medium bg-white/10 px-3 py-1 rounded-full">
//               {level}
//             </span>
//           </div>

//           <div className="flex items-center justify-between">
//             <span className="text-secondary text-[13px]">Rank</span>
//             <span className="text-white text-[13px] font-medium">
//               #{rank}
//             </span>
//           </div>

//           <div className="pt-2 border-t border-white/10">
//             <p className="text-white/90 text-[13px] font-medium mb-2">
//               {competition}
//             </p>
//             <p className="text-secondary text-[11px]">
//               {date}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const Achievements = () => {
//   return (
//     <div className="relative">
//       {/* Background particles effect */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className={`mt-12 bg-black-100 rounded-[20px] relative overflow-hidden`}>
//         {/* Header section with professional styling */}
//         <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] relative overflow-hidden`}>
//           {/* Subtle geometric accents */}
//           <div className="absolute top-8 right-8 w-24 h-24 border border-white/5 rotate-45" />
//           <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/5 rotate-12" />
          
//           <motion.div variants={textVariant()} className="relative z-10">
//             <motion.p
//               className={`${styles.sectionSubText} mb-4`}
//               whileInView={{ opacity: [0, 1], y: [20, 0] }}
//               transition={{ duration: 0.6 }}
//             >
//               MY ACHIEVEMENTS
//             </motion.p>
            
//             <motion.h2
//               className={`${styles.sectionHeadText}`}
//               whileInView={{ opacity: [0, 1], y: [30, 0] }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Achievements & Competitions
//             </motion.h2>

//             {/* Clean underline accent */}
//             <motion.div
//               className="h-0.5 bg-white/20 rounded-full mt-6"
//               initial={{ width: 0 }}
//               whileInView={{ width: "100px" }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             />
//           </motion.div>
//         </div>

//         {/* Cards section */}
//         <motion.div
//           className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center relative z-10`}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//           initial="hidden"
//           whileInView="show"
//         >
//           {achievements.map((achievement, index) => (
//             <AchievementCard
//               key={achievement.title}
//               index={index}
//               {...achievement}
//             />
//           ))}
//         </motion.div>


//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Achievements, "Achievements");