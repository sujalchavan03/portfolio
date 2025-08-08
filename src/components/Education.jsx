import { motion } from "framer-motion"; 
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; 
import "react-vertical-timeline-component/style.min.css"; 
import { styles } from "../styles"; 
import { SectionWrapper } from "../hoc"; 
import { textVariant } from "../utils/motion"; 
import { FaGraduationCap } from "react-icons/fa";  

const EducationCard = ({ education }) => {   
  return (     
    <VerticalTimelineElement       
      contentStyle={{ 
        background: "#1d1836", 
        color: "#fff",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}       
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}       
      date={education.year}
      dateClassName="text-white-100 font-semibold md:text-[16px] text-[14px]"      
      iconStyle={{ 
        background: education.iconBg,
        boxShadow: "0 0 0 4px #1d1836, inset 0 2px 0 rgba(255, 255, 255, 0.3), 0 3px 10px rgba(0, 0, 0, 0.3)"
      }}       
      icon={         
        <div className="flex justify-center items-center w-full h-full">           
          <FaGraduationCap className="text-white text-2xl" />         
        </div>       
      }     
    >       
      <div className="border-l-4" style={{ borderColor: education.iconBg, paddingLeft: "16px" }}>         
        <h3 className="text-white text-[24px] font-bold tracking-wide">{education.degree}</h3>         
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>           
          {education.institution}         
        </p>
        <p className="text-secondary text-[14px] italic mt-1">
          {education.location}
        </p>       
      </div>        
      
      <ul className="mt-6 list-disc ml-5 space-y-3">         
        {education.points.map((point, index) => (           
          <li             
            key={`education-point-${index}`}             
            className="text-white-100 text-[14px] pl-1 tracking-wider"           
          >             
            {point}           
          </li>         
        ))}       
      </ul>     
    </VerticalTimelineElement>   
  ); 
};  

const Education = () => {   
  const educationData = [     
    {       
      degree: "BE- Computer Engineering",       
      // institution:,       
      year: "Aug 2024 – June 2027",
      location: "Maharashtra, India",       
      iconBg: "#7289da",      
      points: [         
        "Key coursework: Data Structures, Algorithms, Computer Networks, and Database Systems",         
        "Participated in coding events and hackathons to improve technical proficiency",       
      ],     
    },     
    {       
      degree: "Diploma in Computer Engineering - 83.41%",       
      institution: "SMDR Government Polytechnic Dhule",       
      year: "Oct 2021 – July 2024",
      location: "Maharashtra, India",       
      iconBg: "#43b581",      
      points: [         
        "Received high distinction for academic performance and excellence in programming",
        "Led projects focused on practical applications of database and web technologies",       
      ],     
    },
    {       
      degree: "10th Grade (SSC) - 91.60%",       
      institution: "Eklavya vidyalaya, Nandurbar",       
      year: "June 2021",
      location: "Maharashtra, India",       
      iconBg: "#f04747",      
      points: [
        "Completed secondary education under Maharashtra State Board of Secondary & Higher Secondary Education",
        "Participated in state level cricket competitions and science exhibitions",
        "Received academic excellence award for outstanding performance across all subjects",
      ],     
    },   
  ];    
  
  return (     
    <>       
      <motion.div variants={textVariant()} className="text-center">         
        <p className={`${styles.sectionSubText} text-center`}>My academic journey</p>         
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>Education.</h2>       
      </motion.div>        
      
      <div className="mt-10 flex flex-col">         
        <VerticalTimeline lineColor="rgba(114, 137, 218, 0.2)">           
          {educationData.map((education, index) => (             
            <EducationCard key={index} education={education} />           
          ))}         
        </VerticalTimeline>       
      </div>     
    </>   
  ); 
};  

export default SectionWrapper(Education, "Education");