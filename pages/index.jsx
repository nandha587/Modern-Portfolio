import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen flex items-center">
      {/* text */}
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex items-center pt-32 pb-24 xl:py-0">
        <div className="text-center flex flex-col justify-center xl:text-left container mx-auto xl:pr-[400px] z-10">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-justify"
          >
            B.Sc. Computer Science candidate specializing in Python, machine learning, 
            data analytics, and responsive web development. Passionate about problem-solving, 
            predictive modeling, and automation.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none overflow-hidden select-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden lg:flex w-[380px] h-[450px] absolute lg:bottom-[10%] lg:right-[12%] rounded-2xl overflow-hidden border-2 border-accent/40 shadow-[0_0_50px_rgba(241,48,36,0.25)] bg-primary/20 backdrop-blur-sm pointer-events-auto"
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Avatar />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
