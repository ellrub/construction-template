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
                    <img src={images.yellow_exca} alt="Gravemaskin" />
                    <p>Grøftearbeid</p>
                    <p className="card__extra--info">Vann/avløp, drenering, kabelgrøfter</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.demolition} alt="Grunn som blir sprengt med sprengstoff" />
                    <p>Sprengningsarbeid</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.work_site} alt="Lastebil" />
                    <p>Grunn og betongarbeid</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.asphalt} alt="Lastebil" />
                    <p>Asfaltering</p>
                </motion.div>
                <motion.div 
                    className="services__section--card"
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                >
                    <img src={images.crane_small} alt="Lastebil" />
                    <p>Kranearbeid</p>
                </motion.div>
            </div>
        </section>
    )

}

export default Services;