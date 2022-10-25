import React from "react";
import { motion } from "framer-motion";

import "./Services.scss";
import { images } from "../../constants"

function Services() { 
    return (
        <section className="services__section">
            <motion.h2
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5, ease: "easeOut"}}
            >
                Tjenester</motion.h2>
            <div className="services__section--container">
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.demolition} alt="Grunn som blir sprengt med sprengstoff" />
                    <p>Sprenging</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.excavation} alt="Gravemaskin" />
                    <p>Graving</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.truck} alt="Lastebil" />
                    <p>Transport</p>
                </motion.div>
            </div>
        </section>
    )

}

export default Services;