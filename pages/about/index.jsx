import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMicrosoftazure,
  SiMysql,
  SiJupyter,
  SiMicrosoftexcel,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaPhp,
        ],
      },
      {
        title: "Data & Tools",
        icons: [
          FaPython,
          FaJava,
          FaDatabase,
          SiMysql,
          FaGitAlt,
          SiMicrosoftazure,
          FaAws,
          SiJupyter,
          SiMicrosoftexcel,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-End Development Intern - Skypark",
        stage: "Jun 2025 - Jul 2025",
      },
      {
        title: "Business Support Simulation - Deloitte Australia",
        stage: "May 2026",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Sc. Computer Science - Sri Krishna Arts and Science College",
        stage: "2023 - 2026",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "1st Place - HITRON Web Designing Competition",
        stage: "2025",
      },
      {
        title: "HTML and CSS in Depth - Meta / Coursera",
        stage: "2025",
      },
      {
        title: "Java Crash Course - Coursera",
        stage: "2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 pt-28 pb-12 xl:pt-32 xl:pb-12 flex items-center">
      <Circles />

      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-y-8 xl:gap-x-12 px-4">
        {/* left column: Avatar and Counters */}
        <div className="flex flex-col items-center xl:w-[30%] gap-y-4 z-10 w-full">
          {/* avatar card */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[200px] h-[250px] xl:w-[240px] xl:h-[300px] rounded-2xl overflow-hidden border-2 border-accent/40 shadow-[0_0_30px_rgba(241,48,36,0.15)] bg-primary/20 relative mx-auto"
          >
            <Avatar />
          </motion.div>

          {/* counters grid */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-3 w-full max-w-[280px] xl:max-w-none"
          >
            {/* users */}
            <div className="relative py-2 px-3 bg-primary/10 rounded-xl border border-white/5 flex flex-col items-center xl:items-start justify-center">
              <div className="text-xl xl:text-2xl font-extrabold text-accent mb-0.5">
                <CountUp start={0} end={200} duration={3} />+
              </div>
              <div className="text-[9px] uppercase tracking-[1px] leading-[1.3] text-center xl:text-left text-white/60">
                Active users
              </div>
            </div>

            {/* projects */}
            <div className="relative py-2 px-3 bg-primary/10 rounded-xl border border-white/5 flex flex-col items-center xl:items-start justify-center">
              <div className="text-xl xl:text-2xl font-extrabold text-accent mb-0.5">
                <CountUp start={0} end={20} duration={3} />+
              </div>
              <div className="text-[9px] uppercase tracking-[1px] leading-[1.3] text-center xl:text-left text-white/60">
                Core projects
              </div>
            </div>

            {/* bugs */}
            <div className="relative py-2 px-3 bg-primary/10 rounded-xl border border-white/5 flex flex-col items-center xl:items-start justify-center">
              <div className="text-xl xl:text-2xl font-extrabold text-accent mb-0.5">
                <CountUp start={0} end={15} duration={3} />+
              </div>
              <div className="text-[9px] uppercase tracking-[1px] leading-[1.3] text-center xl:text-left text-white/60">
                Bugs resolved
              </div>
            </div>

            {/* conflicts */}
            <div className="relative py-2 px-3 bg-primary/10 rounded-xl border border-white/5 flex flex-col items-center xl:items-start justify-center">
              <div className="text-xl xl:text-2xl font-extrabold text-accent mb-0.5">
                <CountUp start={0} end={30} duration={3} />%
              </div>
              <div className="text-[9px] uppercase tracking-[1px] leading-[1.3] text-center xl:text-left text-white/60">
                Conflicts reduced
              </div>
            </div>
          </motion.div>
        </div>

        {/* right column: Text & Tabs */}
        <div className="flex-1 flex flex-col justify-center z-10 w-full text-center xl:text-left">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Data-driven <span className="text-accent">insights</span> power modern solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[650px] mx-auto xl:mx-0 mb-4 px-2 xl:px-0 text-justify text-sm xl:text-base"
          >
            B.Sc. Computer Science candidate with hands-on experience in Python, data analysis, 
            and machine learning. Built application systems serving 200+ users and optimized 
            front-end and back-end integration during development internships.
          </motion.p>

          {/* tabs */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center xl:justify-start">
              {aboutData.map((item, itemI) => (
                <div
                  key={itemI}
                  className={`${
                    index === itemI
                      ? "text-accent after:w-[100%] after:bg-accent"
                      : "text-white/60 after:w-0"
                  } cursor-pointer capitalize xl:text-lg relative pb-1 transition-all duration-300 after:h-[2px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300`}
                  onClick={() => setIndex(itemI)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-1 flex flex-col gap-y-3 items-center xl:items-start w-full">
              {aboutData[index].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="flex flex-col md:flex-row gap-y-1 md:gap-y-0 w-full gap-x-4 items-center md:items-start text-center md:text-left text-white/70 border-b border-white/5 pb-2"
                >
                  <div className="flex flex-col flex-1">
                    {/* title */}
                    <div className="font-medium text-white text-sm xl:text-base">{item.title}</div>
                    {/* stage */}
                    <div className="text-xs text-white/40 mt-0.5">{item.stage}</div>
                  </div>

                  {item.icons && (
                    <div className="flex gap-x-3 mt-1.5 md:mt-0 md:ml-auto items-center">
                      {item.icons.map((Icon, iconI) => (
                        <div key={iconI} className="text-xl text-white/70 hover:text-accent transition-colors duration-300">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
