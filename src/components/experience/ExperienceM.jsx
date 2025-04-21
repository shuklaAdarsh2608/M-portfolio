import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperiences from "./AllExperiences";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const ExperienceMAin = () => {
  return (
    <div id="experiences" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.25)} // ✅ Correct usage
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
<motion.div
 variants={fadeIn("up", 0.2)}  // ✅ Correct usage
 initial="hidden"
 whileInView="show"
 viewport={{ once: false, amount: 0.5 }}>

      <ExperienceTop />
</motion.div>
      <div className="w-full h-1 mt-4 bg-LightBrown lg:block sm:hidden"> </div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMAin;
