"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Electrothon" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Electrothon</span> is a
        student run hackathon oragnised by SPEC NITH. Taking moonshots is no
        smooth sailing. It's an inherently unpredictable ride. As we launch the
        5th in-person lunation of Electrothon, we strive for nothing less than
        the moon. Run by the student community SPEC under the moonlight of NIT
        Hamirpur, Electrothon has impacted over 5000 students. The budding
        hackers who joined Electrothon over its previous iterations left no
        stone unturned to ideate and amalgamate technologies that transfigure
        visions into reality.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
