import React from "react";
import { motion } from "framer-motion";

import "./About.scss";

function About() { 
    return (
        <section className="about__section" >
            <motion.h2
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5, ease: "easeOut"}}
            >Om Oss</motion.h2>
            <motion.p
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5, ease: "easeOut"}}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum. 
                </motion.p>
            <div id="tjenester"></div>
        </section>
    )

}

export default About;