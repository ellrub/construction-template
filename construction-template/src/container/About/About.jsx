import React from "react";
import { motion } from "framer-motion";

import "./About.scss";

function About() { 
    return (
        <section className="about__section">
            <div className="about__container">
                <motion.h2
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >Om Oss</motion.h2>
                <motion.p
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >Bergen og Omegn Entreprenør AS ble etablert som aksjeselskap i 2005, 
                og i dag eies og drives det av Vidar og Øystein Tveit. Selskapet har fem ansatte, 
                er godkjent opplæringsbedrift og har Sentral Godkjenning for ansvarsrett. 
                Selskapet har fem gravemaskiner som varierer i størrelse fra 1,8 tonn til 14 tonn, to lastebiler og én borerigg. 
                </motion.p>
            </div>
            <div id="tjenester"></div>
        </section>
    )

}

export default About;