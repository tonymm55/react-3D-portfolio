import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
         I'm a skilled software developer with experience in JavaScript, and libraries like React, NodeJS and ThreeJS. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user friendly applications that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default About